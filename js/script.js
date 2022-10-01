//array of color
// const arrColor = ['98ff98','E39FF6'];
// let randomColorString = '#';

// function randomColor (){
//     const ranNum = Math.floor((Math.random() * 2));
//     // return(arrColor[ranNum]);
//     // return(randomColorString + arrColor[ranNum]);
//     var element = document.getElementById("myDiv");
//     element.style.backgroundColor = "#" + arrColor[ranNum];
//     color.innerHTML = "#" + randomColor;
// }

// window.onload = function(){randomColor()};

//falling words
const awesome = document.getElementById("awesome");
const awesomeThings = ['you', 'me', 'everyone'];

const wait = (func, timeout) => {
    return new Promise(resolve => setTimeout(() => {
      resolve(func());
    }, timeout));
}

  (async () => {
    let index = 0;
    while (true) {
      await wait(() => {
        awesome.classList.add("show");
        awesome.textContent = awesomeThings[index];
        index = ++index % awesomeThings.length;
    }, 1000);
      await wait(() => {
        awesome.classList.add("hide");
      }, 1500);

      await wait(()=> {
        awesome.classList.remove("show");
        awesome.classList.remove("hide");
      }, 500);
    }
  })()


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}



