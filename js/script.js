const hex = ["1","2","3","4","5","6","7","8","9","A","B",
"C","D","E","F"];
let colorArr = [];

const btn = document.getElementById("btn");
const bg = document.getElementById("bg");
const color = document.querySelector(".color");
let color_item = document.querySelectorAll(".colors-item");
let items_text = document.querySelectorAll(".items-text");

btn.addEventListener("click", function(){
    let hexcolor = "#";
    console.log(color_item.length);

    for(let i = 0;i<6;i++){
        hexcolor += hex[getRandomNum()];
    }
    color.textContent = hexcolor;
    bg.style.backgroundColor = hexcolor;
    color.style.color = hexcolor;
    colorArr.push(hexcolor);
    console.log(colorArr);
    deleteTen();
    itemsBg(colorArr.length);
});

function getRandomNum (){
    return Math.floor(Math.random() * hex.length);
}
function deleteTen(){
    if(colorArr.length == 11){
        colorArr.shift();
    }
}
function itemsBg(arg){
    for(let i=0;i<arg;i++){
        color_item[i].style.backgroundColor = colorArr[i]
        color_item[i].style.border = "1px solid black";
        items_text[i].textContent = colorArr[i];
    }
}