export const FAKE_FINANCE_STATS = {
    balance: 12500000,
    income: 450000,
    expenses: 120000,
    monthlyData: [
        { name: 'Jan', revenus: 4000, depenses: 2400 },
        { name: 'Fév', revenus: 3000, depenses: 1398 },
        { name: 'Mar', revenus: 2000, depenses: 9800 },
        { name: 'Avr', revenus: 2780, depenses: 3908 },
        { name: 'Mai', revenus: 1890, depenses: 4800 },
        { name: 'Juin', revenus: 2390, depenses: 3800 },
    ]
};

export const FAKE_TRANSACTIONS = [
    { id: 1, label: "Cotisation annuelle - Jean", amount: 50000, type: "income", date: "2025-05-01" },
    { id: 2, label: "Location salle AG", amount: 150000, type: "expense", date: "2025-04-28" },
    { id: 3, label: "Achat fournitures", amount: 25000, type: "expense", date: "2025-04-25" },
    { id: 4, label: "Subvention Mairie", amount: 500000, type: "income", date: "2025-04-20" },
];