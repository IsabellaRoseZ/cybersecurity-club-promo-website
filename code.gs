function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Cybersecurity Club Rush')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
