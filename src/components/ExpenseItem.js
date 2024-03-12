import React from "react";
import { useDispatch } from "react-redux"; 
import { FaTrash } from 'react-icons/fa';
import { deleteExpense } from "../redux/actions"; 

const ExpenseItem = (props) => {
    const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch

    const handleDeleteExpense = () => {
        dispatch(deleteExpense(props.id)); // Отправляем действие deleteExpense с id расхода в хранилище
    };

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className='me-3'>
                    ${props.cost}
                </span>
                <FaTrash size='24px' color="red" onClick={handleDeleteExpense}></FaTrash>
            </div>
        </li>
    );
};

export default ExpenseItem;
