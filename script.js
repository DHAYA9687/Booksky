var popup = document.querySelector('.pop-box');
var overlay=document.querySelector('.pop-overlay');
//var btn=document.querySelector('#adding');
var close=document.querySelector('#cancel');
//popup function to display the popup
function pop(){
popup.style.display="block";
overlay.style.display="block";
};
close.addEventListener("click",function(event){
event.preventDefault();
popup.style.display="none";
overlay.style.display="none";
});
//target the container to append the content8
//target forms inputs
//target add
//target title,author,description
var container=document.querySelector('.container');
var title=document.querySelector('#pop-box-title');
var author=document.querySelector('#pop-box-author');
var description=document.querySelector('#description');
var add=document.querySelector('#add');
add.addEventListener("click",function(event){
event.preventDefault();
var div = document.createElement('div');
div.setAttribute('class','body-container');
div.innerHTML=`<h2>${title.value}</h2>
                <h4>${author.value}</h4>
                <p>${description.value}</p>
                <button onclick="dpop(event)">Delete</button>`;
container.append(div);
popup.style.display="none";
overlay.style.display="none";
});
//delete function
function dpop(event){
event.target.parentElement.remove();
}