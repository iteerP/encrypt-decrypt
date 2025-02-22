function rot13Encrypt(text: string) {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const base = char < "a" ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

export default rot13Encrypt;
