const xlsx = require('xlsx');
const Income = require('../models/Income');

// Add Income Source
exports.addIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, source, amount, date } = req.body;

        // Validation: Check for missing fields
        if(!source || !amount || !date) {
            return res.status(400).json({ message: 'Please fill in all fields to add income' });
        }

        
        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date) // Ensure date is stored as a Date object  
        });
        
        await newIncome.save();
        res.status(200).json(newIncome);
    } catch (err) {
        res.status(500).json({ message: 'Server error' }); 
    }
}

// Get All Income Source
exports.getAllIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const incomes = await Income.find({ userId }).sort({ date: -1 });
        res.status(200).json(incomes);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}

// Delete Income Source
exports.deleteIncome = async (req, res) => {

    try {
        await Income.findByIdAndDelete(req.params.id);
        res.json({ message: 'Income source deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
        
}

// Download Excel
exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const incomes = await Income.find({ userId }).sort({ date: -1 });

        // Prepare data for Excel
        const data = incomes.map(income => ({
            Source: income.source,
            Amount: income.amount,
            Date: income.date
        }));

        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, 'Incomes');
        xlsx.writeFile(wb, 'income_details.xlsx');
        res.download('income_details.xlsx');
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}