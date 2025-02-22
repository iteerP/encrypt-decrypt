function atbashCipherEncrypt(text: string) {
  
  
  return text.replace(/[a-zA-Z]/g, (char) => {
    const base = char < "a" ? 65 : 97;
    return String.fromCharCode(base + (25 - (char.charCodeAt(0) - base)));
  });
}

export default atbashCipherEncrypt;
