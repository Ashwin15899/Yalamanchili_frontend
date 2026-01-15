import { accounts } from "./userAccountDetails.js";

const form = document.getElementById("form");
const accNo = document.getElementById("accNo");
const accHolder = document.getElementById("accHolder");
const accType = document.getElementById("accType");
const balance = document.getElementById("balance");
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const transfer = document.getElementById("transfer");
const depositForm = document.getElementById("deposit-form");
const withdrawForm = document.getElementById("withdraw-form");
const transferForm = document.getElementById("transfer-form");
const depositAmount = document.getElementById("user-ip-deposit");
const withdrawAmount = document.getElementById("user-ip-withdraw");
const transferAcc = document.getElementById("user-ip-accNo");
const transferAmount = document.getElementById("user-ip-transfer");
const txnhistory = document.getElementById("history-body");
const homePageBtn = document.getElementById("home-page-btn");
const txnPageBtn = document.getElementById("txn-page-btn")
const homePage = document.getElementById("home-page");
const txnPage = document.getElementById("txn-page");

let userFound;
const userTransactionsDisplay = [];

(() => {
    console.log(localStorage.getItem("currentAccountNo", accNo.value));
    console.log("Hi")
    const accountNo = localStorage.getItem("currentAccountNo", accNo.value);
    userFound = accounts.find(item => item.accNo == accountNo)
    accNo.innerHTML = userFound.accNo;
    accHolder.innerHTML = userFound.Name;
    accType.innerHTML = userFound.accType;
    balance.innerHTML = userFound.balance;
    for (let i = 0; i < userFound.transactions.length; i++) {
        userTransactionsDisplay.push(userFound.transactions[i])
    }
    addTransaction()
})();

homePageBtn.addEventListener("click", ()=>{
    txnPage.style.display="none";
    homePage.style.display="block";
})

txnPageBtn.addEventListener("click", ()=>{
    homePage.style.display="none";
    txnPage.style.display="flex";
})

deposit.addEventListener("click", () => {
    depositForm.style.display = "block";
    withdrawForm.style.display = "none";
    transferForm.style.display = "none";
})

withdraw.addEventListener("click", () => {
    withdrawForm.style.display = "block";
    depositForm.style.display = "none";
    transferForm.style.display = "none";
})

transfer.addEventListener("click", () => {
    transferForm.style.display = "block";
    withdrawForm.style.display = "none";
    depositForm.style.display = "none";
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (withdrawForm.style.display === "none" && transferForm.style.display === "none") {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].accNo == userFound.accNo) {

                const currentBalance = accounts[i].balance;
                accounts[i].balance += parseFloat(depositAmount.value);
                balance.innerHTML = accounts[i].balance;

                const txnObject = {
                    type: "Deposit",
                    transferredTo: "self",
                    oldBalance: currentBalance,
                    amount: depositAmount.value,
                    updatedBalance: accounts[i].balance,
                    date: new Date().toLocaleString()
                };

                accounts[i].transactions.unshift(txnObject);
                userTransactionsDisplay.unshift(txnObject);
                addTransaction();
                alert(`Amount ${depositAmount.value} deposit successful`)
            }
        }
    }

    if (depositForm.style.display === "none" && transferForm.style.display === "none") {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].accNo == userFound.accNo) {

                const currentBalance = accounts[i].balance;
                accounts[i].balance -= parseFloat(withdrawAmount.value);
                balance.innerHTML = accounts[i].balance;

                const txnObject = {
                    type: "Withdraw",
                    transferredTo: "self",
                    oldBalance: currentBalance,
                    amount: withdrawAmount.value,
                    updatedBalance: accounts[i].balance,
                    date: new Date().toLocaleString()
                };

                accounts[i].transactions.unshift(txnObject);
                userTransactionsDisplay.unshift(txnObject);
                addTransaction();
                alert(`Amount ${withdrawAmount.value} withdraw successful`)
            }
        }
    }

    if (depositForm.style.display === "none" && withdrawForm.style.display === "none") {
        if (transferAcc.value == userFound.accNo) {
            alert("Cannot accept same account number. Use deposit option")
        } else {
            let transactionSuccessful = false;
            for (let i = 0; i < accounts.length; i++) {
                if (accounts[i].accNo == transferAcc.value) {
                    const receiverCurrentBalance = accounts[i].balance;
                    let senderName;
                    const senderTxnObject = {};
                    for (let j = 0; j < accounts.length; j++) {
                        if (accounts[j].accNo == userFound.accNo) {

                            accounts[j].balance -= parseFloat(transferAmount.value);
                            balance.innerHTML = accounts[j].balance;
                            senderName = accounts[j].Name;

                            senderTxnObject.type= "Issue",
                            senderTxnObject.oldBalance= userFound.balance,
                            senderTxnObject.amount= transferAmount.value,
                            senderTxnObject.updatedBalance= accounts[j].balance,
                            senderTxnObject.date= new Date().toLocaleString()
                            senderTxnObject.transferredTo= accounts[i].Name,

                            accounts[j].transactions.unshift(senderTxnObject);
                        }
                    }
                    accounts[i].balance += parseFloat(transferAmount.value);

                    const receiverTxnObject = {
                        type: "Acquire",
                        transferredfrom: senderName,
                        oldBalance: receiverCurrentBalance,
                        amount: transferAmount.value,
                        updatedBalance: accounts[i].balance,
                        date: new Date().toLocaleString()
                    }
                    
                    accounts[i].transactions.unshift(receiverTxnObject);
                    userTransactionsDisplay.unshift(senderTxnObject);
                    addTransaction();
                    transactionSuccessful = true;
                }
            }
            if(transactionSuccessful)
                alert(`Amount ${transferAmount.value} transferred to account ${maskAccountno(transferAcc.value)} successfully`)
            else
                alert("No receiver account found")
        }
    }
})


function maskAccountno(accNo) {
    let masked = "";
    for (let i = 0; i < 14; i++) {
        if (i < 10)
            masked += "X"
        else
            masked += accNo[i]
    }
    return masked
}

function addTransaction() {
    txnhistory.innerHTML = `
        ${userTransactionsDisplay.map((item, index) => (
        `<tr>
            <td>${item.type}</td>
            <td>${item.transferredTo || item.transferredfrom}</td>
            <td>${item.oldBalance}</td>
            <td>${item.amount}</td>
            <td>${item.updatedBalance}</td>
            <td>${item.date}</td>
        </tr>`
    )).join("")}
    `
}
