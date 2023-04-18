// You manage a grocery store and need to keep track of the inventory of various items.
// You will use arrays to store the data and various
// functions to manipulate and analyze the data. 
//Create an array containing the names of all items in the inventory maximum of 10.
let groceryArray= ["tomatoes","peaches","potatoes","spinach","onions","vinegar",
"banana","mangoes","vegetables","pears"];
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stockArray =[10,30,50,20,100,25,120,300,200,150];
//Write a function to add a new item to the inventory, updating both arrays.
function addItems(groceryArray,stockArray){
    groceryArray.push("avocadoes")
    stockArray.push(80)
    console.log(groceryArray);
    console.log(stockArray);

}
addItems(groceryArray,stockArray)
//Write a function to update the stock quantity of an existing item.
// function updateStockQuantity(groceryArray,stockArray){
//     console.log(`${groceryArray[0]}- ${ stockArray[0]}`);
// }
// updateStockQuantity(groceryArray,stockArray)

function updateStockQuantity(groceries,number){
    let n =groceryArray.indexOf(groceries);
    if (n===-1){
        console.log("Not available in  the array");
    }
    stockArray.push(number)
    console.log(`The number of ${groceries} is ${stockArray[6]}`)
}
updateStockQuantity("banana",120)

//Write a function to calculate the total number of items in the inventory.
function totalItems(){
    let total =0;
    for (let i = 0; i < stockArray.length; i++) {
         total+= stockArray[i];
        }
    console.log(total);       
    }
    
totalItems()

//Write a function to find the item with the lowest stock quantity.


// function lowestQuantity(stockArray){
//     for(i===0;i<=stockArray.length;i++){
//     Math.min(stockArray);}
//     console.log(stockArray)
// }
// lowestQuantity(stockArray)

function checkLowestQuantity(groceryArray,stockArray){
    let lowestItem=null;
    let lowestQuantity=null;
    for (let m = 0;m < groceryArray.length;m++) {
        let itemp=groceryArray[m]
        let quantityk=stockArray[m]
        if (lowestItem===null ||quantityk<lowestQuantity) {
            lowestItem =itemp;
            lowestQuantity=quantityk;
        }
    
    }
return lowestItem
}
console.log();
checkLowestQuantity(groceryArray,stockArray)