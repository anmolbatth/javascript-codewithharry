// console.log('Welcome to tutorial 14');
// /*
// element selectors:
// 1. Single element selector
// 2. Multi element selector

// */

// // 1. Single element selector
// let element = document.getElementById('myfirst');
// // element = element.className;
// // element = element.childNodes;
// // element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'Harry is a good boy';
// element.innerHTML = '<b>Harry is a good boy</b>';
// // console.log(element.innerText);


// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel)

// // 2. Multi element selector
// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// elems = document.getElementsByTagName('div');
// console.log(elems)

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'blue'; 
// }
// // Array.from(elems).forEach(element => {
// //     console.log(element);
// //    element.style.color = 'blue'; 
// // });
// // console.log(elems[0].getElementsByClassName('child'))
// let elem = document.getElementById('myfirst');
// // console.log(elem);
// // elem = elem.childNodes;
// // elem = elem.parentNode;
// // console.log(elem);
// // elem.style.color = 'red';
// elem = elem.innerHTML;
// console.log(elem);

// // let elems = document.getElementsByClassName('div');
// elems = document.getElementsByTagName('div');
// // console.log(elems);
// Array.from(elems).forEach(element => {
//   console.log(elems);
//   element.style.color = 'blue';
// });

// let container = document.querySelector('.container');
// console.log(container.children);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling); 
// console.log(container.nextElementSibling); 

// let heading = document.createElement('h2');
// let txt = document.createTextNode("Go to code with harry");
// heading.append(txt);
// heading.id = 'harrylink';
// console.log(heading);
// let link = document.createElement('a');
// link.setAttribute = ('href',"http://www.codewithharry.com");

// document.getElementById('heading').addEventListener('click',function(e){
//   console.log("you clicked");
//   variable = e.target;
//   console.log(variable);
// })

document.getElementById('container').addEventListener('mousemove',function(e){
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},128)`;
})

