const distance = document.getElementById('distance');
const price = document.getElementById('price');
const distanceDisplay = document.getElementById('label1');
const equal = document.getElementById('label2');
const priceDisplay = document.getElementById('label3');
let distancePerPetrol;
let petrolPrice;
while(isEmpty(petrolPrice) || Number(isNaN(petrolPrice))){
    petrolPrice = window.prompt("What is the current petrol price per liter?");
};

while(isEmpty(distancePerPetrol) || isNaN(Number(distancePerPetrol))){
    distancePerPetrol = window.prompt("How is your car go through consume per liter petrol");
};

distanceDisplay.textContent = distancePerPetrol + "km";
priceDisplay.textContent = "RM" + petrolPrice;

//action listener
distance.onchange = function(){
    converting()
};
price.onchange = function(){
    converting()
};
distance.onclick = function(){
    clear()
};
price.onclick = function(){
    clear()
};


//function
function converting(){
    let distanceValue = Number(distance.value);
    let priceValue = Number(price.value);
    if(!isEmpty(distanceValue)){
        (isNaN(distanceValue))?
        alert("Please enter only numbers"):
        distanceDisplay.textContent = distanceValue + "km";
        priceDisplay.textContent = "RM" + parseFloat((1/distancePerPetrol) * distanceValue * petrolPrice).toFixed(2);
    };
    if(isEmpty(distanceValue)&&!isEmpty(priceValue)){
        (isNaN(priceValue))?
        alert("Please enter only numbers"):
        distanceDisplay.textContent = parseFloat((priceValue*distancePerPetrol/petrolPrice)).toFixed(2) + "km";
        priceDisplay.textContent = "RM" + priceValue;
    };
    label2.textContent = "=";
};
function clear(){
    distance.value = "";
    price.value= "";
};
function isEmpty(text){
    return (text == "" || text == null)
};