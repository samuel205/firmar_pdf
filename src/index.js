import SignPDF from "./signpdf";
import fs from "node:fs";
import path from "node:path";

async function main() {
  const pdfBuffer = new SignPDF(
    path.resolve('test/prueba.pdf'),
    path.resolve('test/sing_test.p12'),
      {passphrase:'password_secret'}
  );

  const signedDocs = await pdfBuffer.signPDF();
  const randomNumber = Math.floor(Math.random() * 5000);
  const pdfName = `signed/signed_file_${randomNumber}.pdf`;

  fs.writeFileSync(pdfName, signedDocs);
  console.log(`Archivo firmado: ${pdfName}`);
}

main();