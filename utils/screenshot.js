async function captureScreenshot(page, testInfo) {
  const screenshotPath = testInfo.outputPath('failed-screenshot.png');

  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
  });

  return screenshotPath;
}

module.exports = {
  captureScreenshot,
};