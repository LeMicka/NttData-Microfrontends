import { IOperationType } from "../operation-type";

export const mockOperations : IOperationType[] = [
    {
        id: 1,
        title: "Invoice Payment",
        date: new Date("2024-01-05"),
        amount: 1200.50,
        description: "Payment received for invoice #INV-001",
        status: "completed"
    },
    {
        id: 2,
        title: "Subscription Fee",
        date: new Date("2024-01-10"),
        amount: -49.99,
        description: "Monthly SaaS subscription",
        status: "completed"
    },
    {
        id: 3,
        title: "Refund Issued",
        date: new Date("2024-01-12"),
        amount: -200.00,
        description: "Refund for cancelled order",
        status: "processed"
    },
    {
        id: 4,
        title: "Salary Payment",
        date: new Date("2024-01-15"),
        amount: -3500.00,
        description: "January salary payout",
        status: "completed"
    },
    {
        id: 5,
        title: "Client Deposit",
        date: new Date("2024-01-18"),
        amount: 5000.00,
        description: "Advance payment from client",
        status: "pending"
    },
    {
        id: 6,
        title: "Cloud Services",
        date: new Date("2024-01-20"),
        amount: -320.75,
        description: "Monthly cloud infrastructure costs",
        status: "completed"
    },
    {
        id: 7,
        title: "Office Supplies",
        date: new Date("2024-01-22"),
        amount: -89.40,
        description: "Stationery and office materials",
        status: "completed"
    },
    {
        id: 8,
        title: "Consulting Income",
        date: new Date("2024-01-25"),
        amount: 1800.00,
        description: "Consulting services for client X",
        status: "completed"
    },
    {
        id: 9,
        title: "Tax Payment",
        date: new Date("2024-01-28"),
        amount: -950.00,
        description: "Quarterly tax payment",
        status: "scheduled"
    },
    {
        id: 10,
        title: "Bonus Received",
        date: new Date("2024-01-30"),
        amount: 750.00,
        description: "Performance bonus",
        status: "completed"
    }
];