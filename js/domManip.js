// console.log("the page is here")
/* 
    What is an event?
        A user triggered action
*/
// function alertthis(){
//     alert("the button has been pushed")
// }
// var x=0;
// A few events to know
/* 
    mousedown, mouseup, onload, keydown, dblclick,
    click, mouseenter, mouseleave,
    mouseout, mousemove, submit,keyup, keypress, and so many more
*/

/* 
    DOM stands for Document Object Model
    This is a virtual representation of the html
*/
// console.log(document);
// console.log(document.URL)
// console.log(document.title)
//document refers to the dom

/* 
    Three special things that you can do with dom Manipulation
        Find Elements
            document.getElementById(idName)
            document.getElementsByTagName(tagName)
            document.getElementsByClassName(className)
        Change Elements
            element.innerHTML= new html content
            element.attribute= new value
            element.setAttribute(attribute, value)
            element.style.property=new value
        Add or remove elements
            document.createElement(element)
            element.appendChild(element)
            element.removeChild(element)
            element.replaceChild(element)
            document.write(text)
*/
// window.onload=function(){
//     document.getElementById("thisButton")
//     .innerHTML="this is a js button"
// }

//get element by id
let thisButton = document.getElementById("thisButton");
//innerHTML lets us grab and change the html inside the tags
thisButton.innerHTML = "this is a js button";

//element.attribute you can set the property of the elements attribute
thisButton.className = "btn btn-primary";

//setAttribute lets you change and set attributes of the html elements
thisButton.setAttribute("name", "button");

//one of the ways you can change styling
thisButton.style = "color:red";

//grabbing the property of the style property of the element
thisButton.style.color = "#AA11FF";

let body = document.querySelector("body");

//document.createElement() is how we can create html elements in js
let img = document.createElement("img");

//we set the attribute for alt equal to some text
img.alt = "no image here folks";
body.appendChild(img);
let inp=document.getElementById("imgInput");
let sub=document.getElementById("submit");
img.src =
"https://static.rogerebert.com/uploads/review/primary_image/reviews/frankenweenie-2012/hero_EB20121003REVIEWS121009987AR.jpg";

let imageArray = [
    "https://static.rogerebert.com/uploads/review/primary_image/reviews/frankenweenie-2012/hero_EB20121003REVIEWS121009987AR.jpg",
    "https://usatftw.files.wordpress.com/2019/05/ap-indycar-gp-auto-racing.jpg?w=1000&h=600&crop=1"
];
function addToImages(url) {
    imageArray[imageArray.length] = url;
}
function inpImg(){
    addToImages(inp.value)
}
sub.addEventListener("click",inpImg);

let x = 0;
function changeImg() {
  img.setAttribute("src", imageArray[x % imageArray.length]);
  document.getElementsByTagName("h1")[0].innerHTML = `the x is at: ${x}`;
  x++;
}

//this is how you can add an event listener to an element.
//it looks cleaner, and it will add in analytics to the events
//the method takes an event name and a function name
//this is known as a callback function
//A callback function is a function passed into another function
//as an argument. It is then invoked inside the outer function
//to complete some kind of routine or action
thisButton.addEventListener("click", changeImg);
thisButton.addEventListener("dblclick", consoleEvent);
function consoleEvent(houdini, name) {
  console.log(houdini);
}
/* 
addEventListener(event, func){
    let eventInformation={junk}
    on event: func(eventInformatin);
} */
function age() {
  return 5;
}

function objectReturn(name, callback) {
  return {
    name: name,
    age: callback()
  };
}
// callback("steve", age)

/* callback((function (){
    return "Carolyne";
})(),age) */

/* callback("gary",function (){
    return 16;
}) */

/* callback(function (){
    return "greg";
}, age) */

/* callback(function (){
    return "greg";
}, age).name() */

let words = ["theres", "a", "snake", "in", "my", "boot", "in", "js"];

let olList = document.getElementById("olList");
function makeList(kangaroo) {
  if (kangaroo.altKey) {
    for (let x = 0; x < words.length; x++) {
      let li = document.createElement("li");
      olList.appendChild(li);
      li.innerHTML = `this is a js list item: ${words[x]}`;
    }
  }
}

thisButton.addEventListener("dblclick", makeList);

function divAlert(event){
    alert(`target: ${event.target.id} -----~this: ${this.id}`)
    if(this.id=="two"){
        event.stopPropagation()
    }
}

let divs=document.getElementsByTagName('div');

for(let x=0;x<divs.length;x++){
    divs[x].addEventListener("click",divAlert);
}

//bubbling
/* 
When an event happens on an html element, it first runs the handlers on it
    then on its parent, then all the way up to its ancestors

    event.stopPropagation() will stop bubbling

    The opposite of this is called capturing. This is where, when an event 
    happens on an html element, it runs the hanflers on its ancestors and 
    goes down the line until it reached the original element.

    for more information:
        https://javascript.info/bubbling-and-capturing
*/