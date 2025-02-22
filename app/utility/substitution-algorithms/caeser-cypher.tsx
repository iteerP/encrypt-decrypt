function caesarCipherEncrypt(text: string, shift: number) {
  const encryptedText = [];

  for (let idx = 0; idx < text.length; idx++) {
    let charAscii = text[idx].toLowerCase().charCodeAt(0);
    charAscii += shift;

    if (charAscii > "z".charCodeAt(0)) {
      charAscii = charAscii - "z".charCodeAt(0) - 1 + "a".charCodeAt(0);
    }

    encryptedText.push(String.fromCharCode(charAscii));
  }

  return encryptedText.join("");
}

export default caesarCipherEncrypt;
