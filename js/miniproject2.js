const body = document.querySelector('body');
const stenbtn = document.querySelector('#sten');
const saxbtn = document.querySelector('#sax');
const papperbtn = document.querySelector('#papper');

let input = document.querySelector('input');
let userName = document.querySelector('#userName');
let userVal = document.querySelector('#userVal');
let usrPng = document.querySelector('#userPng');
let datorVal = Math.round(Math.random() * 3);
let pcVal = document.querySelector('#pcVal');
let pcPng = document.querySelector('#pcPng');
let poanguser = 0;
let poangpc = 0;

input.addEventListener('keyup', function (event) {
  userName.innerText = `Hello ${input.value} lets start playing ! ` + "\n\n\n\n" + 'choose:';
  if (event.key === 'Enter') {
    input.style.display = 'none';
  }
})

stenbtn.addEventListener('click', function () {
  let datorVal = Math.round(Math.random() * 3);
  userVal.innerText = `${input.value} choosed :Rock`;
  if (datorVal === 0) {
    pcVal.innerText = ("Pc choosed :Rock");
  }
  else if (datorVal === 1) {
    poanguser++;
    pcVal.innerText = ("Pc choosed :Scissors");
    usrPng.innerText = `Your points : ${poanguser}`;
  }
  else {
    pcVal.innerText = ("Pc choosed :Papper");
    poangpc++;
    pcPng.innerText = `Pc points : ${poangpc}`;
  }
  if (poanguser == 3) {
    alert(`${input.value} Win!`)
    location.reload(true)
  }
  if (poangpc == 3) {
    alert('Pc Win!');
    location.reload(true);
  }
})

saxbtn.addEventListener('click', function () {
  let datorVal = Math.round(Math.random() * 3);
  userVal.innerText = `${input.value} choosed :Scissors`;
  if (datorVal === 0) {
    pcVal.innerText = ("Pc choosed:Rock");
    poangpc++;
    pcPng.innerText = `Pc points: ${poangpc}`;
  }
  else if (datorVal === 1) {
    pcVal.innerText = ("Pc choosed: Scissors");
  }
  else {
    pcVal.innerText = ("Pc choosed: Paper");
    poanguser++;
    usrPng.innerText = `Your points: ${poanguser}`;
  }
  if (poanguser == 3) {
    alert(`${input.value} Win!`)
    location.reload(true)
  }
  if (poangpc == 3) {
    alert('Pc Win!')
    location.reload(true)
  }
})

papperbtn.addEventListener('click', function () {
  userVal.innerText = `${input.value} choosed :Paper`;
  let datorVal = Math.round(Math.random() * 3);
  if (datorVal === 0) {
    pcVal.innerText = ("Pc choosed :Rock");
    poanguser++;
    usrPng.innerText = `Your points : ${poanguser}`;
  }
  else if (datorVal === 1) {
    pcVal.innerText = ("Pc choosed : Scissors");
    poangpc++;
    pcPng.innerText = `Pc points : ${poangpc}`;
  }
  else {
    pcVal.innerText = ("Pc choosed :Paper");
  }
  if (poanguser == 3) {
    alert(`${input.value} Win!`)
    location.reload(true)
  }
  if (poangpc == 3) {
    alert('Pc Win!')
    location.reload(true)
  }
})

