#!/usr/bin/env node

// https://github.com/GoogleChrome/puppeteer/blob/v1.7.0/docs/api.md#pagesetviewportviewport

const fs = require('fs')

const puppeteer = require('puppeteer')
let log = console.log

let allPages = require('../data/pagelist.json')
allPages.push('movies')
allPages.push('free-time')

// allPages = allPages.slice(0, 2)

const sections = [
  ['topic', 750],
  ['questions', 350],
  ['vocabulary', 625],
  ['answers', 1000],
  ['practice', 600],
  ['summary', 2500],
]

async function main() {
  const browser = await puppeteer.launch()
  const browserPage = await browser.newPage()

  for (let page of allPages) {

    let outDir = `../src/.vuepress/public/assets/shots/${page}/`
    log('outDir', outDir)
    try {
      fs.mkdirSync(outDir)
    } catch(err) {
      if (err.code !== 'EEXIST') console.error('mkdir error', err)
    }

    for (let sectionSpec of sections) {
      let [sectionName, height] = sectionSpec
      let opts = {
        width: 375,
        height: height
      }

      if (sectionName === 'summary') {
        // opts.height = 2500
        opts.fullPage = true
      }
      // let height = (section == 'intro') ? 5000 : 1000
      await browserPage.setViewport(opts)

      let url = `http://localhost:8080/course/speaking/${page}.html#${sectionName}`
      let shotPath = `${outDir}/${sectionName}.jpg`
      log(page, url, shotPath)
      await browserPage.goto(url, {waitUntil: "load"})
      await browserPage.screenshot({
        path: shotPath,
        // type: '.jpg',
        fullPage: opts.fullPage,
      })
    }
  }


  await browser.close()
}

main()