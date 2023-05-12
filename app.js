console.log(document)
let titler=document.getElementById('header-title');
titler.style.borderBottom="solid 3px #000";
let subHead=document.getElementById("adder");
subHead.style.fontWeight="bold";
subHead.style.color="green";

let items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}