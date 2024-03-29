import React from "react";
import { useSelector } from "react-redux"; 

const ExpenseTotal = () => {
    const expenses = useSelector(state => state.expenses); // Получаем список расходов из состояния Redux

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    return(
        <div className="alert alert-info">
            <span>Total cost: ${totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
