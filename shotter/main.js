// https://github.com/GoogleChrome/puppeteer/blob/v1.7.0/docs/api.md#pagesetviewportviewport

const puppeteer = require('puppeteer');
let log = console.log

const pages = [
  'movies',
  'free-time'
]

const sections = [
  ['full', 2500],
  ['vocabulary', 1000],
  ['questions', 1000],
  ['answers', 800]
]

async function main() {
  const browser = await puppeteer.launch();
  const browserPage = await browser.newPage();

  for (let page of pages) {
    for (let section of sections) {
      let [name, height] = section

      let opts = {
        width: 375,
        height: height
      }

      if (name === 'full') {
        opts.height = 2500
        opts.fullPage = true
      }
      // let height = (section == 'intro') ? 5000 : 1000
      await browserPage.setViewport(opts)

      let url = `http://localhost:8080/course/speaking/${page}.html#${name}`
      let shotPath = `../src/speaking/shots/${page}-${name}.jpg`
      log(page, url, shotPath)
      await browserPage.goto(url, {waitUntil: "load"})
      await browserPage.screenshot({
        path: shotPath,
        // type: '.jpg',
        fullPage: opts.fullPage,
      })
    }
  }


  await browser.close();
}

main()