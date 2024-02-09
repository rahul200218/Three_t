

let burger = document.getElementById('burger');
let mobile_nav = document.getElementById('mobile_nav');

let inc=0;
let firstmove=document.getElementById("firstmove")
let flag=0;

burger.addEventListener("click",()=>{
    if (flag==0){
        flag=1
        console.log("hello")
        burger.classList.add("open")
        mobile_nav.style.left="0%"
    }
    else if(flag==1){
        flag=0
        burger.classList.remove("open")
        mobile_nav.style.left="-100%"
    }
  })



  const symbols = ['X', 'O'];
let moveIndex = 0;

function performNextMove(moveindex) {
    const table = document.getElementById('ticTacToeTable');
    const cells = table.getElementsByTagName('td');

    if (moveindex == 0) {
        moveIndex++;
        
        cells[0].innerText = "X";
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 1) {
        moveIndex++;
        cells[4].innerText = "O";
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 2) {
        moveIndex++;
        cells[8].innerText = "X";
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 3) {
        moveIndex++;
        cells[2].innerText = "O";
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 4) {
        moveIndex++;
        cells[6].innerText = "X";
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 5) {
        moveIndex++;
        cells[3].innerText = "O";
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 6) {
        moveIndex++;
        cells[7].innerText = "X";
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 7) {
        moveIndex++;
        cells[8].innerText = "X";

        cells[6].classList.add("neon-text")
        cells[7].classList.add("neon-text")
        cells[8].classList.add("neon-text")
        setTimeout(() => performNextMove(moveIndex), 3000);
    } else if (moveindex == 8) {
        setTimeout(() => {

            cells[6].classList.remove("neon-text")
            cells[7].classList.remove("neon-text")
            cells[8].classList.remove("neon-text")
            for (let i = 0; i < 9; i++) {
                cells[i].innerText = " ";
            }
            moveIndex = 0;
            performNextMove(moveIndex);
        }, 5000);
    }
}
setTimeout(() => performNextMove(moveIndex), 1000);



 
  function handleScrollStart() {
    const header = document.getElementById('header');
    header.classList.add('with-box-shadow');
  }

  function handleScrollStop() {
    const header = document.getElementById('header');
    setTimeout(() => {
      header.classList.remove('with-box-shadow');
    }, 200);
  }

  let scrollStoppedTimer;


  window.addEventListener('scroll', function() {
    handleScrollStart();
    clearTimeout(scrollStoppedTimer);
    scrollStoppedTimer = setTimeout(function() {
      handleScrollStop();
    }, 200);
  });