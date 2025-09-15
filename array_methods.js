const transactions = [200, -100, 300, -50, 400];

// 1. forEach: Log each transaction
transactions.forEach((transaction, index) => {
  console.log(`Transaction ${index + 1}: ${transaction > 0 ? 'Deposit' : 'Withdrawal'} =  ${Math.abs(transaction)}`);
});

// 2. map: Create a new array with deposit transactions
const depositTransactions = transactions.map((transaction,  index) => {
    if (transaction > 0) {
        return `Transaction ${index + 1} is a deposit = ${transaction}`;
    }else{
        return `Transaction ${index + 1} is a withdrawal = ${Math.abs(transaction)}`;
    }
});   
console.log('Deposit Transactions:', depositTransactions);

// 3. filter: Get all Deposit transactions
const onlyDepositTransactions = transactions.filter(transaction => transaction > 0);
console.log('Only Deposit Transactions:', onlyDepositTransactions);

// 4. reduce: Calculate the total balance
const totalBalance = transactions.reduce((accumulator, transaction) => accumulator + transaction, 0);
console.log('Total Balance:', totalBalance);

//Chaining methods: Get total deposits
const totaldeposits = transactions.filter(transaction => transaction > 0).reduce((acc, transaction) => acc + transaction, 0);
console.log('Total Deposits:', totaldeposits);