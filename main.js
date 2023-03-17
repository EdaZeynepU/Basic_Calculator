const numbers = document.querySelectorAll(".number");
const basicOperators= document.querySelectorAll(".basicOperators");
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const screen = document.querySelector("#screen");

const mp= document.querySelector(".mp");
const mr= document.querySelector(".mr");
const mc= document.querySelector(".mc");
const mm= document.querySelector(".mm");

let baseMemory=""
let memory="";
let first=0;
let operator="";


function show(num) {
  if (screen.value=="0") {
    screen.value=num
  } else {
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


function eventListeners() {
  numbers.forEach(num => {
    num.addEventListener("click", () => {
      show(num.dataset.num);
    });
  });

  basicOperators.forEach(op=>{
    op.addEventListener("click",()=>{
      first=parseFloat(screen.value);
      console.log(op.dataset.num);
      operator=op.dataset.num;
      screen.value=0;
  })})

  // plus.addEventListener("click",() => {
  //   first=parseInt(screen.value);
  //   operator="+";
  //   screen.value="";
  // });



  equal.addEventListener("click", ()=>{
    switch (operator) {
      case "+":
        console.log(screen.value)
        screen.value=first+parseFloat(screen.value);
        break;
      case "-":
        screen.value=first-parseFloat(screen.value);
        break;
      case "/":
        screen.value=first/parseFloat(screen.value);
        break;
      case "*":
        screen.value=first*parseFloat(screen.value);
        break;
      default:
        break;
    }
  });




  clear.addEventListener("click", ()=>{
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
      console.log("memory empty")
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
