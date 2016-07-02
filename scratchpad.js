//var age = prompt('Please tell me your age:');
//console.log(age);

//[1.1.Practice](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#practice)

//var phonePrice = prompt('Price of Phone: $');
//console.log('The phone price is: $' + phonePrice);
//var accessoryPrice = prompt('Price of accessory: $');
//console.log('The accessory price is: $' + accessoryPrice);
//var bankAccount = prompt('Amount in bank account: $');
//console.log('The bank account has: $' + bankAccount);

const PHONE = 99.99;//making these consts literal values since the prompt() method above makes the prompt input a string
const ACCESSORY = 24.99;
const TAX = 0.06;

var bankAccount = 1000;

function calculateTotalPurchaseAmount() {
  //console.log('amount is: ' + amount);
  //console.log(typeof(amount) === 'number');
  //amount = Number((amount + (amount * TAX)).toFixed(2));//the toFixed() method returns the number as a string, so the whole amount is wrapped in the Number() object to turn the toFixed() string to a number
  //console.log(typeof(amount) === 'number');

  const amountPhonePlusAccessoryPlusTax = Number(((PHONE + ACCESSORY) + ((PHONE + ACCESSORY) * TAX)).toFixed(2));
  const amountPhonePlusTax = Number((PHONE + (PHONE * TAX)).toFixed(2));

  var totalSpent = 0;
  var totalPurchases = 0;

  console.log('amountPhonePlusAccessoryPlusTax is: $' + amountPhonePlusAccessoryPlusTax);
  console.log('amountPhonePlusTax is: $' + amountPhonePlusTax);

  while (amountPhonePlusAccessoryPlusTax <= bankAccount) {
    bankAccount -= amountPhonePlusAccessoryPlusTax;
    totalSpent += amountPhonePlusAccessoryPlusTax;
    totalPurchases ++;
    console.log('A phone and accessory were purchased!\n$' + amountPhonePlusAccessoryPlusTax + ' was deducted from your bank account!\nYou\'re bank account balance is now $' + bankAccount + '.\nYou\'ve spent a total of $' + totalSpent + '\nTotal purchases: ' + totalPurchases);
  }

}

console.log(calculateTotalPurchaseAmount());

/*
REFERENCES
  - YDKJS 1.1.Practice: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#practice
  - typeof(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  - Number(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  - Number.toFixed(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

*/
