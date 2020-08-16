var stdout = process.stdout;

function up(n = 1) {
  stdout.write("\033[" + n + "A");
}
function down(n = 1) {
  stdout.write("\033[" + n + "B");
}
function right(n = 1) {
  stdout.write("\033[" + n + "C");
}
function left(n = 1) {
  stdout.write("\033[" + n + "D");
}

module.exports = { up, down, right, left };
