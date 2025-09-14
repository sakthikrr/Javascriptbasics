const transactions = [200, -100, 300, -50, 400];

// 1. forEach: Log each transaction
transactions.forEach((transaction, index) => {
  console.log(`Transaction ${index + 1}: ${transaction > 0 ? 'Deposit' : 'Withdrawal'} =  ${Math.abs(transaction)}`);
});

// 2. map: Create a new array with deposit transactions
const depositTransactions = transactions.map(transaction => (transaction > 0 ? transaction : 0));
console.log('Deposit Transactions:', depositTransactions);