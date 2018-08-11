// https://github.com/GoogleChrome/puppeteer/blob/v1.7.0/docs/api.md#pagesetviewportviewport

const puppeteer = require('puppeteer');
let log = console.log

const pages = [
  'movies',
  'free-time'
]

const sections = [
  '', 'vocabulary', 'grammar', 'questions', 'answers'
]

async function main() {
  const browser = await puppeteer.launch();
  const browserPage = await browser.newPage();
  browserPage.setViewport({
    width: 400,
    height: 400,
    // isMobile: true
  })

  for (let page of pages) {
    for (let section of sections) {
      let url = `http://localhost:8080/course/speaking/${page}.html#${section}`
      let shotPath = `../src/speaking/images/${page}/${section}.png`
      log(page, url, shotPath)
      await browserPage.goto(url);
      await browserPage.screenshot({path: shotPath});
    }
  }
  await browser.close();
}

main()