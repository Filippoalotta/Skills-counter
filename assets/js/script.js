const displayRate = document.getElementById('counter-display');
const decreaseBtn = document.getElementById('remove');
const increaseBtn = document.getElementById('add');
const saveBtn = document.getElementById('save');

const maximumValue = 10;
const minimumValue = 0;


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

    



