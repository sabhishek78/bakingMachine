// The Baking Machine
// Allowed Time: 40 mins

// You have designed a machine to bake some cakes. The machine should be smart and can measure proportions on it's own. How many cakes could the machine bake considering his recipes?

// Write a function cakesCount, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes machine can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples
// cakesCount({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); // should return 2

// cakesCount({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); // should return 0
function cakesCount(recepie,ingredients){
  let count=0;
  let recepieKeys=Object.keys(recepie);
  let ingredientKeys=Object.keys(ingredients);
  for(let i=0;i<recepieKeys.length;i++){
    if(ingredientKeys.indexOf(recepieKeys[i])==-1){
      return 0;
    }
  }
  while(allIngredientValuesPositive(ingredients)){
    recepieKeys.forEach((e,i)=>ingredients[e]=ingredients[e]-recepie[e]);
   if(allIngredientValuesPositive(ingredients))
     count++;
    }
    return count;
   }
 function allIngredientValuesPositive(ingredients){
 let values=Object.values(ingredients);
  for(let i=0;i<values.length;i++){
    if(values[i]<0){
      return false;
    }
  }
  return true;
 }

console.log(cakesCount({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));//2
console.log(cakesCount({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); // should return 0