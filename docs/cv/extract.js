const pdfModule = require('pdf-parse');
console.log('Type of pdfModule:', typeof pdfModule);
console.log('Keys:', Object.keys(pdfModule));
if (typeof pdfModule === 'function') {
  console.log('It is a function');
} else if (pdfModule.default) {
  console.log('Has default:', typeof pdfModule.default);
}
