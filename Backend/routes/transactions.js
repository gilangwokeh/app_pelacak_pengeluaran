const { addExpense, getExpense, deleteExpense } = require('../controller/expense')
const { addIncome, getIncomes, deleteIncome } = require('../controller/income')

const router = require('express').Router()

router.post('/add-income', addIncome)
    .get('/get-income', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expenses', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expenses/:id', deleteExpense)


    

module.exports =  router