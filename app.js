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
let odditem=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odditem.length;i++){
    odditem[i].style.backgroundColor="#00ff00";
}