/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function uniqueCat(trans){
  let uniq = [];
  let j = 0;

  for(let i=0; i < trans.length; i++){
    if(uniq.includes(trans[i].category) === false){
      uniq[j++]= trans[i].category;
    }
  }
  return uniq;
}

function calculateTotalSpentByCategory(transactions) {
    if(transactions.length == 0){
      return [];
    }


    const uniqueCategory = uniqueCat(transactions);
    let result = new Array(uniqueCategory.length);
    let resultind = 0;
    let sum = 0;

    
    for(let i = 0; i < result.length; i++){
      result[i] = {category: uniqueCategory[i], totalSpent: 0} ;
    }
    uniqueCategory.forEach(cat => {
      for(let i=0; i < transactions.length; i++){
        if(cat == transactions[i].category)
        {
          sum += transactions[i].price;
        }
      }
      result[resultind++].totalSpent = sum;
      sum = 0;
    });
    return result;
  }
  
  module.exports = calculateTotalSpentByCategory;