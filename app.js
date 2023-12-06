const container = document.querySelector(".container");
//container.innerHTML = "";
for (let i = 1; i < 10; i++){  
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);  
    container.innerHTML += `<div class="box" id="${i}">${i}</div>`;
    const boxId = document.getElementById(`${i}`);
    boxId.style.backgroundColor = `rgb(${r},${g},${b})`;
}
// 1. négyzet manipulálása:***************************************
const box1 = document.getElementById("1");
//let isBlurred = false;
const blurry = (event)=>{
    event.target.classList.toggle("blur");
    /*
    isBlurred = !isBlurred;
    if (isBlurred){
        event.target.classList.add("blur");        
    }else{
        event.target.classList.remove("blur");        
    }
    */
}
box1.addEventListener("click", blurry);
// 2. négyzet manipulálása:***************************************
const box2 = document.getElementById("2");
const reduce1 = (event) => {
    // Ternary operator egyszerű if-else kiváltására:
    event.target.style.scale = event.target.style.scale === "0.4" ? "1" : "0.4";
    /*
    if ( event.target.style.scale === "0.4"){
        event.target.style.scale = "1";
    }else{
        event.target.style.scale = "0.4";
    }
    */

}
box2.addEventListener("mouseover", reduce1);
// 3. négyzet manipulálása:***************************************
const box3 = document.getElementById("3");
const randomizeNum = (event) =>{
    let rnd = Math.floor(Math.random()*100);
    event.target.innerText = rnd;
}
box3.addEventListener("dblclick", randomizeNum);

// 4. négyzet manipulálása:***************************************
const box4 = document.getElementById("4");

const disappear = (event) =>{
    // Az eljárás itt eltünteti azt az elemet, amelyen az esemény bekövetkezett:
    event.target.style.visibility = "hidden";

    // A setTimeout beépített eljárásnak először adni kell egy eljárást/függvényt, amely itt láthatóvá teszi újra az elemet, utána vesszővel meg kell adni, hogy a disappear eljárás hívása után mennyi idő múlva hívja meg az előtte álló eljárást. Az időzítés előtti eljárást, most itt helyben deklaráltam fat arrow segítségével. A időegység millisecundumban értendő, itt most egy másodperc.
    setTimeout(() =>{
        event.target.style.visibility = "visible";
    },1000);
}

box4.addEventListener("click", disappear);

// box_5 Minden legyen kör alakú!:
const box5 = document.getElementById("5");

const circularise = () => {
    const boxes = document.querySelectorAll(".box");
    for (box of boxes){
        box.style.borderRadius = box.style.borderRadius === "50%" ? "" : "50%";
        /**
        if (box.style.borderRadius == "50%"){
            box.style.borderRadius = "";
        } else {
            box.style.borderRadius = "50%";
        }
        */        
    }
}
box5.addEventListener("click", circularise);

// box_6 Kurzorpozíciók:
const box6 = document.getElementById("6");
document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    box6.style.fontSize = "1.7rem";
    box6.innerHTML = `X:${x}<br>Y:${y}`;
})

// box_7 Number copy:
const box7 = document.getElementById("7");
const input7 = document.querySelector(".container2 .seven input");
const button7 = document.querySelector(".container2 .seven button");

const write = () =>{
    box7.innerText = `${input7.value}`;
}

button7.addEventListener("click", write);

// box_8: Az input mező tartalma azonnal a box8-ba íródik:
const box8 = document.getElementById("8");
const input8 = document.querySelector(".eight input");
// Az "input" esemény azonnal bekövetkezik, amint az input mezőbe egy karaktert írunk.
// A "keydown" esemény ugyanez, ám a leütött billentyűt figyeli (BÁRMILYEN billentyű legyen az).
// A leütött billentyű kódja az esemény key attribútumában érhető el.
input8.addEventListener("keydown", (event) =>{
    box8.innerText = event.key;
})

// box_9: Mini kalkulátor:******************
const calc = document.querySelector(".nine button");
const calculate = () =>{
    const box_9 = document.getElementById("9");
    let result = Number(document.getElementById("9").innerText);
    const operator = document.querySelector(".nine select").value;
    const operandus = document.querySelector(".nine input").value;

    switch (operator){
        case "add":
            result += Number(operandus);
            break;
        case "sub":
            result -= Number(operandus);
            break;
        case "multiply":
            result *= Number(operandus);
            break;
        case "div":
            result /= Number(operandus);
            break;
        default:
            break;
    }
    //box_9.innerText = result;
    box_9.innerText = operandus ? result : "-";
    if (!operandus) {
        setTimeout(()=>{
            box_9.innerText = "9";
            result = 9;
        },1000);
    }
}

calc.addEventListener("click",calculate);
