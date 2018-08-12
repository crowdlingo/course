const yaml = require('js-yaml')
const fs   = require('fs')
const path = require('path')
const Mustache = require('mustache')

const YAMLPATH = './data/lessonData.yaml'

function readYaml() {
  try {
    let doc = yaml.safeLoad(fs.readFileSync(YAMLPATH, 'utf8'))
    return doc
    // console.log(doc)
  } catch (e) {
    console.error("error", e)
  }
}

// pair questions and answers
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

function cleanDoc() {
  let doc = readYaml()
  doc = doc.map( item => {
    item.pairs = item.pairs.map( pair => {
      pair.a = pair.a || '...'
      return pair
    })
    return item
  })
  let dump = yaml.dump(doc, {
    sortKeys: false,
    lineWidth: 20000
  })
  console.log(dump)

}

// manipulating raw data
// question and answer pairs
// async function cleanUp() {
//   let doc = readYaml()
//   // let items = cleanDoc(doc)
//   // let items = pairItems(doc)
//   console.log(dump)
// }

function ensureDir(dirpath) {
  try {
    fs.mkdirSync(dirpath)
  } catch(err) {
    if (err.code !== 'EEXIST') {
      console.error('mkdir', dirpath, err)
    }
  }
}


async function renderPages() {
  let items = readYaml()
  let template = fs.readFileSync('./data/speaking.mustache', 'utf8')
  Mustache.parse(template)

  items.map( elem => {
    let output = Mustache.render(template, elem)
    let fname = `${elem.cname}.md`
    let fp = path.join(__dirname, '../src/speaking/', fname)
    let assetPath = path.join(__dirname, '../src/.vuepress/public/assets/speaking/', elem.cname)
    ensureDir(assetPath)
    console.log('fp', fp)
    // console.log('elem >>\n', elem)
    // console.log('output >>\n', output)
    fs.writeFileSync(fp, output)
  })

  let pageList = items.map( p => {
    return p.cname
  })
  pageList = pageList.sort()
  fs.writeFileSync('./data/pagelist.json', JSON.stringify(pageList, null, 2))
}

// cleanUp()

// renderPages()

cleanDoc()