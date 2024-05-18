document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseTableBody = document.querySelector('#expense-table tbody');

    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function renderExpenses() {
        expenseTableBody.innerHTML = '';
        expenses.forEach((expense, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td class="actions">
                    <button  onclick="editExpense(${index})">Edit</button>
                    <button onclick="deleteExpense(${index})">Delete</button>
                </td>
            `;
            expenseTableBody.appendChild(row);
        });
    }

    window.editExpense = function(index) {
        const expense = expenses[index];
        document.getElementById('expense-amount').value = expense.amount;
        document.getElementById('expense-category').value = expense.category;
        document.getElementById('expense-date').value = expense.date;
        expenseForm.onsubmit = function(event) {
            event.preventDefault();
            expenses[index] = {
                amount: document.getElementById('expense-amount').value,
                category: document.getElementById('expense-category').value,
                date: document.getElementById('expense-date').value,
            };
            localStorage.setItem('expenses', JSON.stringify(expenses));
            renderExpenses();
            expenseForm.reset();
            expenseForm.onsubmit = addExpense;
        }
    }

    window.deleteExpense = function(index) {
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
    }

    function addExpense(event) {
        event.preventDefault();
        const newExpense = {
            amount: document.getElementById('expense-amount').value,
            category: document.getElementById('expense-category').value,
            date: document.getElementById('expense-date').value,
        };
        expenses.push(newExpense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
        expenseForm.reset();
    }

    expenseForm.onsubmit = addExpense;
    renderExpenses();
});