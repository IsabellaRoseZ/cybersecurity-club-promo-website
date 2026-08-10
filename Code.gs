function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('Cybersecurity Club Rush')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
