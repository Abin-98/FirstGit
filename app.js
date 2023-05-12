let titler=document.getElementById('main-header');
titler.style.borderBottom="solid 3px #000";
let subHead=document.getElementById("adder");
subHead.style.fontWeight="bold";
subHead.style.color="green";

let items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
let newitem=document.getElementsByTagName("li");
newitem[4].textContent="Changed name";
newitem[4].style.color="#ffbbff";