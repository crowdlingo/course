const yaml = require('js-yaml')
const fs   = require('fs')
const path = require('path')
const Mustache = require('mustache')
const log = console.log
const _ = require('underscore')

const inputYaml = './data/lessonDataInput.yaml'  // hand edit
const outputYaml = './data/lessonDataOutput.yaml'   // auto generated output

const ConceptNet = require( 'concept-net' )
let conceptNet = ConceptNet(null, null, '5.3')
// let conceptNet = ConceptNet()

const natural = require('natural')
// const wordnet = new natural.WordNet()

const WordPOS = require('wordpos')
const wordpos = new WordPOS()

const Tools = {

  ensureDir(dirpath) {
    try {
      fs.mkdirSync(dirpath)
    } catch(err) {
      if (err.code !== 'EEXIST') {
        console.error('mkdir', dirpath, err)
      }
    }
  },

  readYaml(which) {
    let yamlPath
    if (which === 'input') {
      yamlPath = inputYaml
    } else {
      yamlPath = outputYaml
    }
    try {
      let doc = yaml.safeLoad(fs.readFileSync(yamlPath, 'utf8'))
      return doc
      // console.log(doc)
    } catch (e) {
      console.error("error", e)
    }
  },

  // pair questions and answers from rawfile
  // function pairItems(doc) {
  //   let items = doc.map( item => {
  //     item.cname = item.topic.replace(/ +/gim, '-').toLowerCase()
  //     let pairs = []
  //     for (let i=0; i<item.questions.length; i++) {
  //       let pair = {
  //         q: item.questions[i],
  //         a: item.answers[i] || ""
  //       }
  //       pairs.push(pair)
  //     }
  //     delete item.questions
  //     delete item.answers
  //     item.pairs = pairs
  //     return item
  //   })
  //   return items
  // }

  checkPairs(pairs) {
    pairs = pairs.map( pair => {
      if (!pair.a || pair.a == '...') {
        return false
      } else {
        // pair.a = pair.a || '...'  // needed for .md formatting
        return pair
      }
    }).filter(elem => elem)
    return pairs.slice(0, 5)
  },

  splitWords(line) {
    if (!line) return
    return(line.split(' '))
  },

  findLongWords(page) {
    let blob = []
    let longWords = []
    page.pairs.map( pair => {
      log('pair', pair)
      let q = (Tools.splitWords(pair.q))
      let a = (Tools.splitWords(pair.a))
      blob = blob.concat(q, a)
    })
    log('blob', blob)
    blob.map( word => {
      word = word.replace(/[^A-Za-z]/gim, '')  // trim ,. etc
      if (word.length > 7) {
        longWords.push(word)
      }
    })
    longWords = _.uniq(longWords)
    longWords = _.sample(longWords, 8)
    log('longWords', longWords)
    return longWords
  },

  async buildVocab(words) {
    if (!words) {
      return []
    }
    let vocab = []
    for (let word of words) {
      let obj = await Tools.checkWord(word)
      if (obj) vocab.push(obj)    // skip null
    }
    log('vocab', vocab)
    return vocab
  },

  async checkWord(word) {
    let result = await wordpos.lookup(word)
    // log(result)
    // TODO - somehow judge which one to use?
    let stem = natural.PorterStemmer.stem(word)
    let first = result[0]
    if (!first) {
      return null
      // console.error('no result for ', word)
      // console.error('result =', result)
      // if(word !== stem) {
      //   log("stemmed", word, " => ", stem)
      //   result = await wordpos.lookup(stem)
      //   first = result[0]
      //   if (!first) {
      //     log('no result for stem', stem)
      //     return null
      //   }
      // }
    }
    let syns
    if (first.synonyms) {
      syns = first.synonyms.map(elem => {
        return elem.replace('_', ' ') // wordnet has some_word
      }).filter(syn => syn !== word)
    }
    // let pos = first.lexName ? first.lexName.split('.').shift() : ''
    let obj = {
      en: word,
      stem: stem,
      pos: first.pos,
      syns: syns,
      def: first.def || '...'
    }
    log('obj', obj)
    return obj
    // wordpos.lookup(word, function(res) {
    //   log('word', res)
    // })
    // wordpos.getAdjectives('The angry bear chased the frightened little squirrel.', function(result){
    //   console.log(JSON.stringify(result))
    // })
    // wordpos.lookup('accomodation', function(result){
    //   // console.log(result)
    //   console.log(JSON.stringify(result, null, 2))
    // })
  },

  // clean and process
  // input -> output
  async cleanYaml() {
    let doc = Tools.readYaml('input')
    for (let page of doc) {
      page.pairs = Tools.checkPairs(page.pairs)
      // page.topFive = page.pairs.slice(0, 5)
      if (!page.words) {
        page.words = Tools.findLongWords(page)
      }
      page.vocab = await Tools.buildVocab(page.words)
      page.description = page.description || page.pairs[0].q
    }

    let dump = yaml.dump(doc, {
      sortKeys: false,
      lineWidth: 20000
    })
    dump = "# DO NOT EDIT - auto generated file \n" + dump
    fs.writeFileSync(outputYaml, dump)
  },

  async renderTextFile(data, template) {
    log('renderTextFile')
    // let pagePath = path.join(__dirname, '../../src/.vuepress/public/assets/speaking/', elem.cname)
  },

  async renderPages() {
    let items = Tools.readYaml('output')

    // preparse templates
    let mdTemplate = fs.readFileSync('./data/speaking.mustache', 'utf8')
    Mustache.parse(mdTemplate)
    let txtTemplate = fs.readFileSync('./data/speakingTxt.mustache', 'utf8')
    Mustache.parse(mdTemplate)

    items.map( elem => {
      // create folder for assets to save grunt time
      let assetsPath = path.join(__dirname, '../../src/.vuepress/public/assets/speaking/', elem.cname)
      Tools.ensureDir(assetsPath)

      // markdown file
      let mdOutput = Mustache.render(mdTemplate, elem)
      let mdFilename = `${elem.cname}.md`
      let mdFilePath = path.join(__dirname, '../../src/speaking/', mdFilename)
      console.log('mdFilePath', mdFilePath)
      fs.writeFileSync(mdFilePath, mdOutput)
      this.renderTextFile(elem, mdFilePath)

      // text file
      let txtOutput = Mustache.render(txtTemplate, elem)
      let txtFilename = `${elem.cname}.txt`
      let txtFilePath = path.join(assetsPath, txtFilename)
      console.log('txtFilePath', txtFilePath)
      fs.writeFileSync(txtFilePath, txtOutput)
      this.renderTextFile(elem, txtFilePath)

    })

    let pageList = items.map( p => {
      return p.cname
    })
    pageList = pageList.sort()
    fs.writeFileSync('./data/pagelist.json', JSON.stringify(pageList, null, 2))
  },


  async checkIdea(word) {

    conceptNet.search({
      start: '/c/en/donut'
    }, function onDone( err, result ) {
      log(err)
      log(result)
    })

    let xpath = '/c/en/toast' // + word
    conceptNet.lookup( xpath, {
      limit: 10,
      offset: 0,
      filter: 'core'
    }, function onDone( err, result ) {
      log(err)
      log(result)
    })
  }

}

module.exports = Tools
