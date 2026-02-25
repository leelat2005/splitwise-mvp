const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json(expense);
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.findAll();
  res.json(expenses);
};

exports.updateExpense = async (req, res) => {
  await Expense.update(req.body, { where: { id: req.params.id }});
  res.json({ message: "Updated" });
};

exports.deleteExpense = async (req, res) => {
  await Expense.destroy({ where: { id: req.params.id }});
  res.json({ message: "Deleted" });
};