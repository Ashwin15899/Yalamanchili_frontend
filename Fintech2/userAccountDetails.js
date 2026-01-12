export const accounts = [
    {
        "accNo": 12345678901001,
        "Name": "Ashwin",
        "password": "#Ashwin158",
        "role": "user",
        "accType": "Savings A/c",
        "balance": 50000.00,
        "transactions": [
            {
                "type": "Deposit",
                "transferredTo": "self",
                "oldBalance": 20000.00,
                "amount": 30000.00,
                "updatedBalance": 50000.00,
                "date": new Date().toLocaleString()
            }
        ]
    },
    {
        "accNo": 12345678901002,
        "Name": "Balaji",
        "password": "@Balaji998",
        "role": "admin",
        "accType": "Current A/c",
        "balance": 45000.00,
        "transactions": [
            {
                "type": "Deposit",
                "transferredTo": "self",
                "oldBalance": 20000.00,
                "amount": 25000.00,
                "updatedBalance": 45000.00,
                "date": new Date().toLocaleString()
            }
        ]
    },
    {
        "accNo": 12345678901003,
        "Name": "Kumar",
        "password": "#kumar55",
        "role": "user",
        "accType": "Savings A/c",
        "balance": 35000.00,
        "transactions": [
            {
                "type": "Acquire",
                "transferredfrom": "Balaji",
                "oldBalance": 20000.00,
                "amount": 15000.00,
                "updatedBalance": 35000.00,
                "date": "25/11/2025, 17:22:51"
            },
            {
                "type": "Deposit",
                "transferredTo": "self",
                "oldBalance": 10000.00,
                "amount": 10000.00,
                "updatedBalance": 20000.00,
                "date": "20/11/2025, 11:49:15"
            }
        ]
    }
]