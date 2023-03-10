# Payroll-Server

## API End Points
POST: http://localhost:3001/create-payroll

POST: http://localhost:3001/update-payroll

POST: http://localhost:3001/delete-payroll

GET: http://localhost:3001/get-payrolls


## Start Server
Before starting server run this command: **npm install**
Once you installed all dependencies, you can use **node index.js** or **npm start** to start the server.

### Create Payroll
Send JSON in this structure
const payroll = {
    name: name,
    designation: designation,
    basicPay: basicPay,
    incentivePay: incentivePay,
    houseRentAllowance: houseRentAllowance,
    mealAllowance: mealAllowance,
    providentFund: providentFund,
    loan: loan
};

### Update Payroll
Send JSON in this structure
const payroll = {
    payrollId: _id, <-- This is the ObjectId of the Payroll
    name: name,
    designation: designation,
    basicPay: basicPay,
    incentivePay: incentivePay,
    houseRentAllowance: houseRentAllowance,
    mealAllowance: mealAllowance,
    providentFund: providentFund,
    loan: loan
};

In case if you left a field empty, the server will replace it with previous saved value (that was stored before update).
P.S: Without payrollId, you can't update the document and send ObjectId in the **string format**.

### Delete Payroll
Send the ObjectId as the body in the **string format**. This ObjectId can be obtained by fetching data from "http://localhost:3001/get-payrolls" Api.
