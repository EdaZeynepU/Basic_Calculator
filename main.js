const numbers = document.querySelectorAll(".number");
const basicOperators= document.querySelectorAll(".basicOperators");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const screen = document.querySelector("#screen");

const mp= document.querySelector(".mp");
const mr= document.querySelector(".mr");
const mc= document.querySelector(".mc");
const mm= document.querySelector(".mm");

let baseMemory="";
let memory="";
let first=0;
let operator="";
let equalCheck=0;

function show(num) {
  if (screen.value=="0") {
    screen.value=num;
  }else if (equalCheck==1){
    screen.value=num;
    first=0;
    equalCheck=0;
  } else{
    screen.value+=num;
  }
}

function square() {
  screen.value=parseFloat(screen.value)**2;
}
function percent() {
  screen.value=parseFloat(screen.value)/100;
}
function root() {
  screen.value=parseFloat(screen.value)**(1/2);
}

function del(){
  screen.value=screen.value.slice(0,-1);
}

function doEqual(){
  if (equalCheck==0){
    if (first==0) {
      first=parseFloat(screen.value);
    } else{
      switch (operator) {
      case "+":
        first+=parseFloat(screen.value);
        break;
      case "-":
        first=first - parseFloat(screen.value);
        break;
      case "/":
          first/=parseFloat(screen.value);
        break;
      case "*":
        first*=parseFloat(screen.value);
        break;
      default:
        break;
    }
  }
}
  screen.value=0;
}

function eventListeners() {
  numbers.forEach(num => {
    num.addEventListener("click", () => {
      show(num.dataset.num);
      equalCheck=0;
    });
  });

  basicOperators.forEach(op=>{
    op.addEventListener("click",()=>{
        doEqual();
        operator=op.dataset.num;
  })})

  equal.addEventListener("click", ()=> {
    doEqual();
    screen.value=first;
    equalCheck=1;
    operator=""
  });

  clear.addEventListener("click", ()=>{
    first=0;
    screen.value=0;
  });


  mp.addEventListener("click",()=>{
    if (memory=="") {
      baseMemory,memory=parseFloat(screen.value);
      console.log("hey");
    }else{
      memory+=baseMemory;
    }
  })
  mm.addEventListener("click",()=>{
      memory-=baseMemory;

  })
  mr.addEventListener("click",()=>{
    if (memory=="") {
      alert("memory empty");
    }else{
      screen.value=memory;
    }
  })
  mc.addEventListener("click",()=>{
      memory="";
      baseMemory="";
  })
}





eventListeners();
