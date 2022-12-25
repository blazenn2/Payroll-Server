const { getDb, ObjectId } = require('../utils/dbconnection');

const createPayroll = async (req, res, next) => {
    try {
        const db = getDb();
        const { name, designation, basicPay, incentivePay, houseRentAllowance, mealAllowance, providentFund, loan } = req.body;
        const payroll = {
            name: name || null,
            designation: designation || null,
            basicPay: Number(basicPay) || null,
            incentivePay: Number(incentivePay) || null,
            houseRentAllowance: Number(houseRentAllowance) || null,
            mealAllowance: Number(mealAllowance) || null,
            providentFund: Number(providentFund) || null,
            loan: Number(loan) || null
        };
        const newProduct = await db.collection("payroll").insertOne(payroll);
        if (newProduct) res.status(200).json({ message: "Created a new payroll successfully!", data: payroll })

    } catch (err) {
        next(err);
    }
};

const getAllPayrolls = async (req, res, next) => {
    try {
        const db = getDb();
        const payrolls = await db.collection("payroll").find().toArray();
        if (payrolls) res.status(200).json({ message: "Succesfully found all records!", data: payrolls });
    } catch (err) {
        next(err);
    }
};

const deletePayroll = async (req, res, next) => {
    try {
        const { payrollId } = req.body;
        const db = getDb();
        const deletePayroll = await db.collection("payroll").findOneAndDelete({ _id: ObjectId(payrollId) });
        if (deletePayroll) res.status(200).json({ message: "Payroll deleted successfully!" });
    } catch (err) {
        next(err);
    }
};

const updatePayroll = async (req, res, next) => {
    try {
        const db = getDb();
        // const 
    } catch (err) {
        next(err);
    }
};

module.exports = { createPayroll: createPayroll, getAllPayrolls: getAllPayrolls, deletePayroll: deletePayroll, updatePayroll: updatePayroll };