const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

app.use('/users', require('./routes/userRoutes'));
app.use('/expenses', require('./routes/expenseRoutes'));
app.use('/balances', require('./routes/balanceRoutes'));

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});