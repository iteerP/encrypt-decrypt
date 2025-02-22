function caesarCipherEncrypt(text: string, shift: number) {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const base = char < "a" ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shift) % 26) + base
    );
  });
}

export default caesarCipherEncrypt;
