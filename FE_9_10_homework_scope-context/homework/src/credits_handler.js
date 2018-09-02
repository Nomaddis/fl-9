//task 1
function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let tax = 0.005;

    return {
        getCardOptions () {
            return {
                balance,
                transactionLimit,
                historyLogs,
                key
            };
        },
        putCredits (amount) {
            balance = balance + amount;
            historyLogs.push({
                operationType: 'Received credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },
        takeCredits (amount) {
            if(amount <= transactionLimit && amount <= balance) {
                balance = balance - amount;
                historyLogs.push({
                    operationType: 'Take credits',
                    credits: amount,
                    operationTime: new Date().toLocaleString('en-GB')
                });
            } else {
                alert('Uupps... Some problem with withdraw. Please check your balance and transaction limit');
            }
        },
        setTransactionLimit (amount) {
            transactionLimit = amount;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')
            });
        },
        transferCredits (amount, card) {
            let withTax = amount + amount * tax;
            if(withTax <= balance && withTax <= transactionLimit) {
                this.takeCredits(withTax);
                card.putCredits(amount);
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: amount,
                    operationTime: new Date().toLocaleString('en-GB')
                });
            } else {
                alert('Error while try transferring');
            }
        }
    };
}

//task 2
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.max = 3;
    }

    addCard() {
        if(this.cards.length < this.max) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            alert(`User should have <= ${this.max} cards.`);
        }

    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
