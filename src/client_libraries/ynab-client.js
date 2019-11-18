import * as ynab from 'ynab';

import { getLastWeekRange } from './moment-client';

const ynabApi = new ynab.API("");

export const getBudgets = () => {
    return ynabApi.budgets.getBudgets();
}

export const getTransactions = (budgetId = 'last-used', since_date = null) => {
    return ynabApi.transactions.getTransactions(budgetId, since_date);
}

export const getTransactionsFromLastWeek = (budgetId = 'last-used') => {
    // use moment client to get date range of last week
    const [lastSunday, lastSaturday] = getLastWeekRange();

    return ynabApi.transactions.getTransactions(budgetId, lastSunday);
}