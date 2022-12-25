# Payroll-Server

## API End Points
POST: http://localhost:3001/create-payroll
POST: http://localhost:3001/update-payroll (under development)
POST: http://localhost:3001/delete-payroll
GET: http://localhost:3001/get-payrolls

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

### Update & Delete Payroll
Just send the ObjectId to the API. This ObjectId is received from "http://localhost:3001/get-payrolls" Api. *Make sure you convert the ObjectId to string.*