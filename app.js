const container = document.querySelector(".container");
container.innerHTML = "";
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
