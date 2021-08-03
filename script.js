const myBtn = document.querySelector('#mybutton').addEventListener('click', giveAlert);
const changeBackGround = document.querySelector('.blue-background');
const colorBtn = document.querySelector(' .colorchange');
const tb = document.querySelector('.textbox');
const boldButton = document.querySelector('.make-bold');
const bigButton = document.querySelector('.make-big');
const italicButton = document.querySelector('.make-italic');

function giveAlert(){
alert('i been clicked');
};
myBtn.addEventListener('click', function() {
   
   alert('button clicked');
})

const colorChange =() =>{
   changeBackGround.classList.toggle('red-background') 
}

colorBtn.addEventListener('click', colorChange);

const makeParagraph2Bold = () => {
   tb.classList.toggle('bold');
};
 boldButton.addEventListener('click', makeParagraph2Bold);

const makeParagraph2Big = () => {
   tb.classList.toggle('big');
};
 bigButton.addEventListener('click', makeParagraph2Big);

const makeParagraph2Italic = () => {
   tb.classList.toggle('italic');
};
 italicButton.addEventListener('click', makeParagraph2Italic);
