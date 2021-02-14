const currencyUnit = {
  "PENNY": 1,
  "NICKLE": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
  }
  
  function checkCashRegister(price, cash, cid) {
  
  let changeAmount = cash * 100 - price * 100;
  let changeAmountCheck = changeAmount;
  let change = [];
  let status = '';
  
  let cidAmount = 0;
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
  
  filteredCid.forEach(elem => {
      let curr = elem[0];
      let currAmount = elem[1] * 100;
      cidAmount += currAmount;
      let amount = 0;
      while (changeAmount >= currencyUnit[curr] && currAmount > 0) {
          amount += currencyUnit[curr];
          changeAmount -= currencyUnit[curr];
          currAmount -= currencyUnit[curr];
      }
      if (amount !== 0) {
          change.push([curr, amount / 100]);
      }
  });
  
  if (changeAmount > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
  } else if (changeAmount == 0 && changeAmountCheck == cidAmount) {
      status = 'CLOSED';
      change = cid;
  } else {
      status = 'OPEN';
  } return { 'status': status, 'change': change };
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);