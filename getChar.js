var stdin = process.stdin;

function getChar() {
  return new Promise((resolve) => {
    stdin.once("data", function (key) {
      resolve(key);
    });
  });
}
exports.getChar = getChar;
