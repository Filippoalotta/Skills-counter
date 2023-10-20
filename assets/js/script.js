const innerDiv = document.querySelector('.counter-inner-container');
const displayRate = document.createElement('div');
const decreaseBtn = document.createElement('button');
const increaseBtn = document.createElement('button');
const saveBtn = document.createElement('button');

function getDisplayRate() {
    displayRate.setAttribute('id', 'counter-display');
    innerDiv.appendChild(displayRate);
};
getDisplayRate();

function getDecreaseBtn() {
    decreaseBtn.classList.add('modifier');
    decreaseBtn.setAttribute('id', 'remove');
    decreaseBtn.innerHTML = 'Decrease';
    innerDiv.appendChild(decreaseBtn);
};
getDecreaseBtn();

function getIncreaseBtn() {
    increaseBtn.classList.add('modifier');
    increaseBtn.setAttribute('id', 'add');
    increaseBtn.innerHTML = 'Increase';
    innerDiv.appendChild(increaseBtn);
};
getIncreaseBtn();

function assignmentSave() {
    saveBtn.classList.add('modifier');
    saveBtn.setAttribute('id', 'save');
    saveBtn.innerHTML = 'Save';
    innerDiv.appendChild(saveBtn);
};
assignmentSave();

const maximumValue = 10;
const minimumValue = 0;

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('displayRate') ) {
        displayRate.innerHTML = localStorage.getItem('displayRate');
      } else {
        displayRate.innerHTML = 0;
      }
});

decreaseBtn.addEventListener('click', decreaseValue);
function decreaseValue(){
    if(displayRate.innerHTML > minimumValue){
        displayRate.innerHTML--;
    };
};

increaseBtn.addEventListener('click', increaseValue);
function increaseValue(){
    if(displayRate.innerHTML < maximumValue){
        displayRate.innerHTML++;
    };
};

saveBtn.addEventListener('click', saveData);
function saveData(){
    localStorage.setItem('displayRate', displayRate.innerHTML);
};

function showData(){
    displayRate.innerHTML = localStorage.getItem('displayRate');
}
showData();