// import puppeteer from 'puppeteer'
const puppeteer = require('puppeteer');

exports.makePDF = async (url, outputPath) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  await page.pdf({path: outputPath, format: 'A4'})
  await browser.close()
}


