function greeting() {
  let userName = "Mateo";
  function displayUserName() {
    return "Hello " + userName;
  }

  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log("MoneyBox: " + saveCoins);
}

moneyBox(5);
moneyBox(5);

//Uso del closure
function moneyBox2() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log("MoneyBox: " + saveCoins);
  }
  return countCoins;
}

const myMoney = moneyBox2();
myMoney(96);
myMoney(3);

const yourMoney = moneyBox2();
yourMoney(30);
yourMoney(50);
