import { ynab } from './client_libraries';

ynab.getTransactionsFromLastWeek()
    .then(response => {
        const accountTransactions = {};
        const accountTotals = {};

        const transactions = response.data.transactions;

        transactions.forEach(transaction => {
            if (!accountTransactions[transaction.account_name]) {
                accountTransactions[transaction.account_name] = [];
            }

            accountTransactions[transaction.account_name].push(transaction.amount * .001);
        });

        Object.keys(accountTransactions).forEach(key => {
            console.log(`${key}: ${accountTransactions[key]}`);
            accountTotals[key] = accountTransactions[key].reduce((accumulator, currentVal) => accumulator + currentVal);
            console.log(`${key}: ${accountTotals[key]}`);
        });
    })
    .catch(err => console.log(err));