"use strict";

// const body = document.getElementById('body');
// const list = document.getElementById('list');
// const item = document.getElementById('item');
// const div = document.getElementById('div');
// const input = document.getElementById('input');
// const btn = document.getElementById('button');

// const handler = (event) => {
//     // console.dir(event.target.tagName);
//     const {ctrlKey, shiftKey, target} = event;

//     if(event.target === btn){
//         let count = +event.target.textContent;

//         if(event.shiftKey){
//             target.textContent = zero();
//         }

//         else if(event.ctrlKey){
//             target.textContent = decrement();
//         }

//         else{
//             target.textContent = increment();
//         }

//         function increment(){
//             return ++count;
//         }

//         function decrement(){
//             if(count === 0){
//                 return 0;
//             }

//             return --count;
//         }

//         function zero(){
//             return count = 0;
//         }

//     }

/*     if(event.target === body){
        input.value = 'white';
    }

    if(event.target === list){
        input.value = 'red';
    }

    if(event.target === item){
        console.log(event.target.dataset);
        console.log(event.target.dataset.textColor);
    }

    if(event.target === div){
        input.value = 'yellow';
    }
 */
// }

// body.addEventListener('click', handler, true);

// const listElement = document.createElement('table');
// const firstColumnElement = document.createElement('tr');

// const body = document.querySelector('body');

// body.appendChild(listElement);

// listElement.appendChild(firstColumnElement);
// listElement.appendChild(secondColumnElement);

// const text = document.getElementById('divText');

// // text.className = 'divState1';

// text.addEventListener('click', (event) => {

//     text.classList.toggle('divState1');
//     text.classList.toggle('divState2');
// })

const stateArr = [];

const form1 = document.getElementById("firstForm");
const input = document.getElementById("firstInput");
const outputText = document.getElementById("outputText");
const submitBtn = document.getElementById("submit");

outputText.classList.add("inputBorderAndColor");
submitBtn.classList.add("submitBtn");

submitBtn.textContent = "Submit";

// Task 1
input.addEventListener("input", (event) => {
  outputText.textContent = input.value;
});

// Task 2
form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  const ulList = document.getElementById("ulList");

  const { value } = input;

  const submitInf = [...value.split(" ")];

  if (submitInf.length < 3) {
    throw new Error("The entered value must be at least three words");
  } else {
    console.log(value);
  }
  // Task 3
  stateArr[stateArr.length++ - 1] = {
    date: new Date(),
    info: value,
  };

  const li = createLiNode({});

  //   const li = document.createElement("li");
  //   const deleteBtn = document.createElement("button");

  //   li.textContent = stateArr.length + " : " + value;
  //   deleteBtn.textContent = "Удалить";

  //   li.appendChild(deleteBtn);

  //   ulList.appendChild(li);

  //   event.target.reset();
});

function createLiNode(props) {
  const li = document.createElement("li");

  li.value = props.value;
  li.textContent = props.text;

  const delButton = createDeleteButton({
    text: "Delete",
    onClick: (event) => {
      event.currentTarget.parentElement.remove;
    },
  });

  li.append(delButton);

  ulList.append(li);

  event.target.reset();
}

function createDeleteButton(props) {
  const btn = document.createElement("button");

  const nameBtn = props.text;

  btn.textContent = nameBtn;
  btn.onclick = props.onclick;
}

ulList.addEventListener("click", (event) => {
  const str = event.currentTarget.childNodes.currentTarget.textContent.split(
    ""
  );

  console.dir(event.currentTarget.childNodes.currentTarget.textContent);

  iteratorStr = str[Symbol.iterator]();
  let index = 0;

  for (const i = 0; i < event.currentTarget.textContent.length; i++) {
    if (ch !== " ") {
    } else {
      break;
    }

    iteratorStr.next();
  }

  console.dir(event.currentTarget);

  delete stateArr[index];
  event.currentTarget.remove();
});
