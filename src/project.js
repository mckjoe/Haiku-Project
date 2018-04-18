export function checkLines(text) {
  let newlineCount = text.match(/.\n./g).length;
  return newlineCount;
}
