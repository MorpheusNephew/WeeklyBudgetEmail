import { ynab } from './client_libraries';

ynab.getBudgets()
    .then(response => {
        const budget = response.data.budgets[0];
        
        ynab.getTransactionsFromLastWeek(budget.id)
            .then(response => {
                console.log(response.data.transactions);
            });
    })