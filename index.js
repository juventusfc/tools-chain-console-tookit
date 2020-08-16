var stdin = process.stdin;
var stdout = process.stdout;
const { select } = require("./select");

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");

void (async function () {
  stdout.write("which framework do you want to use?\n");
  let answer = await select(["vue", "react", "angular"]);
  stdout.write("You selected " + answer + "\n");
  process.exit();
})();
