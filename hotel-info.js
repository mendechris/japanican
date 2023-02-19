const test = document.getElementById('demo');
let room = 1;
let ppl = 2;

function min(val) {
  if (val === 1) {
    return 0;
  }
  return 1;
}

function addPpl() {
  ppl++;
  test.innerHTML = `${ppl} adults; ${room} rooms`;
}
function remPpl() {
  ppl -= min(ppl);

  test.innerHTML = `${ppl} adults; ${room} rooms`;
}

function addRm() {
  room++;
  test.innerHTML = `${ppl} adults; ${room} rooms`;
}

function remRm() {
  room -= min(room);
  test.innerHTML = `${ppl} adults; ${room} rooms`;
}
