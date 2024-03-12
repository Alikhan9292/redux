import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addExpense } from '../redux/actions';

const AddExpenseForm = () => {
    const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch(addExpense(expense)); // Отправляем действие addExpense с расходом в хранилище
    };

    return(
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor="name">Name</label>
                    <input 
                    required
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm'>
                    <label htmlFor="cost">Cost</label>
                    <input
                    required
                    type='text'
                    className='form-control'
                    id='cost'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;
