const info = document.getElementById('occupants');
let room = 1;
let ppl = 2;
let child = 0;

function min(val) {
  if (val === 1) {
    return 0;
  }
  return 1;
}

function prtInfo() {
  let aInfo = ppl > 1 ? 'adults' : 'adult';
  let rInfo = room > 1 ? 'rooms' : 'room';
  let cInfo = child > 1? 'children' : 'child';
  if(child === 0) {
    info.innerHTML = `${ppl} ${aInfo} - ${room} ${rInfo}`;
    return undefined;
  }
  info.innerHTML = `${ppl} Ad/${child} Ch - ${room} Rm`;
}

function addPpl() {
  ppl++;
  prtInfo()
}
function remPpl() {
  ppl -= min(ppl);
  prtInfo()
}


function addCh() {
  child++;
  prtInfo()
}
function remCh() {
  if(child <= 0) {
    return undefined
  }

  child--;
  prtInfo()
}

function addRm() {
  room++;
  prtInfo()
}

function remRm() {
  room -= min(room);
  prtInfo()
}

function getppl() {
  return ppl;
}

function getrm(){
  return room;
}