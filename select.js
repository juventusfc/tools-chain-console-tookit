var stdout = process.stdout;
var { up, down, right, left } = require("./cursorTool");
const { getChar } = require("./getChar");

async function select(choices) {
  let selected = 0;
  for (let i = 0; i < choices.length; i++) {
    let choice = choices[i];
    if (i === selected) {
      stdout.write("[x] " + choice + "\n");
    } else {
      stdout.write("[ ] " + choice + "\n");
    }
  }

  up(choices.length);
  right();

  while (true) {
    let char = await getChar();
    // Ctrl + c
    if (char === "\u0003") {
      process.exit();
      break;
    }

    if (char === "w" && selected > 0) {
      stdout.write(" ");
      left();
      selected--;
      up();
      stdout.write("x");
      left();
    }

    if (char === "s" && selected < choices.length - 1) {
      stdout.write(" ");
      left();
      selected++;
      down();
      stdout.write("x");
      left();
    }

    if (char === "\r") {
      down(choices.length - selected);
      left();
      return choices[selected];
    }
  }
}
exports.select = select;
