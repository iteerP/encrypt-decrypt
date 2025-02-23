function atbashCipherEncrypt(text: string) {
  text = text.toLowerCase();

  const mappings: Record<string, string> = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
  };

  const encryptedText = [];
  for (let idx = 0; idx < text.length; idx++) {
    encryptedText.push(mappings[text[idx]]);
  }

  return encryptedText.join("");
}

export default atbashCipherEncrypt;
