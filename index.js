require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { mongoConnect } = require('./utils/dbconnection');
const payroll = require('./controllers/payroll');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/get-payrolls", payroll.getAllPayrolls);
app.post('/create-payroll', payroll.createPayroll);
app.post('/delete-payroll', payroll.deletePayroll);
app.post('/update-payroll', payroll.updatePayroll);

app.use((err, req, res, next) => {
    console.log(err);
    const status = err.statusCode || 500;
    const msg = err.message;
    res.status(status).json({ message: msg });
});

mongoConnect(() => {
    app.listen(port, () => console.log(`Sever started at ${port}`));
});