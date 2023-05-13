let titler=document.getElementById('main-header');
titler.style.borderBottom="solid 3px #000";
let subHead=document.getElementById("adder");
subHead.style.fontWeight="bold";
subHead.style.color="green";

/*let items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
let newitem=document.getElementsByTagName("li");
newitem[4].textContent="Changed name";
newitem[4].style.color="#ffbbff";
let item2=document.querySelector(".list-group-item:nth-child(2)");
item2.style.backgroundColor="green";
let item3=document.querySelector(".list-group-item:nth-child(3)");
item3.style.color="white";
let itemfont=document.querySelectorAll(".list-group-item");
itemfont[1].style.color="#00ff00";*/

let cardd=document.querySelector("h2");
cardd.parentElement.style.backgroundColor='#aaaaff';

//let lister=document.querySelector(".list-group");
//lister.lastChild.style.color="blue";
//lister.firstChild.textContent="Changed";
//console.log(lister.firstChild);
//let lister2=document.querySelector(".list-group-item:nth-child(2)");
//lister2.nextElementSibling.style.color="red";

let newD=document.createElement("li");
newD.className="list-group-item";

newD.setAttribute('title', "Item number 5.1");

let txt=document.createTextNode("Item 5.1");
newD.appendChild(txt);

let ulist=document.querySelector(".list-group");
let lastlist=document.querySelector("li:nth-child(5)");

ulist.insertBefore(newD, lastlist);

let odditem=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odditem.length;i++){
    odditem[i].style.backgroundColor="#f0f0f0";
}