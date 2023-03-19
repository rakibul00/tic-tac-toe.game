console.log("Welcome to tic toe");

let music = new Audio("./music.mp3")
let auditrun = new Audio("./ting.mp3")
let gameover = new Audio("./gameover.mp3")

let turn = "X"

const checkGame = ()=>{
    return turn === "X" ? "0" :"X"
}

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    const win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){

            document.getElementsByClassName("Info").innerText = boxtext[e[0]].innerText = "win";
            console.log("good work")
            document.getElementsByClassName("imgBox")[0].style.width = "200px"

        }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn
            turn = checkGame()
            auditrun.play()
            checkwin()
            document.getElementsByClassName("Info")[0].innerText = "turn for" + turn
        }
    })
})
let button = document.getElementById("reset")
button.addEventListener("click", ()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    Array.from(boxtext).forEach(Element=>{
        Element.innerText = ""
    })
})