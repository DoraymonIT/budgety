import './Income.css';
import React, { useState } from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addIncome, changePeriod } from '../../features/transaction/transactionSlice';
import moment from 'moment/moment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import Typography from '@mui/material/Typography';

const Income = ({ isAdded, setIsAdded }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const onTitleChange = e => setTitle(e.target.value)
    const onAmountChange = e => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount('');
            return;
        }
        setAmount(val);
    }

    const onDateChange = e => setDate(e.target.value)
    const formatDate = moment(moment((date), 'YYYY-MM-DD')).format('MM-DD-YYYY');

    const [titleError, setTitleError] = useState(false);
    const [amountError, setAmountError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const onSaveIncomeClick = (e) => {
        e.preventDefault()
        setTitleError(false)
        setAmountError(false)
        setDateError(false)

        if (title === '') {
            setTitleError(true)
        }

        if (amount === 0) {
            setAmountError(true)
        }

        if (date === '') {
            setDateError(true)
        }

        if (title && amount && date) {
            dispatch(
                addIncome(title, formatDate, amount)
            )
            setTitle('')
            setAmount('')
            setDate('')
            navigate("/")
            setIsAdded(true)
            dispatch(changePeriod(0))
        }
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
        <div className="flex justify-end">
            <Link to="/" className="flex items-center text-gray-600 hover:text-red-600">
                <div className="flex items-center space-x-2">
                    <UilTimes />
                    <span>Cancel transaction</span>
                </div>
            </Link>
        </div>
        <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Add new income</h2>
    
            <form className="mt-4 space-y-4" noValidate autoComplete="off" onSubmit={onSaveIncomeClick}>
                <div className="flex flex-col space-y-3">
                    <label>  Name of Income</label>
                    <input
                        className="border border-gray-300 rounded-md p-2 focus:border-purple-500"
                      
                      
                        value={title}
                        onChange={onTitleChange}
                        required
                 
       
                    />
                      <label>  Amount</label>
                    <input
                        className="border border-gray-300 rounded-md p-2 focus:border-purple-500"
              
                        value={amount}
                   
                        onChange={onAmountChange}
                       
                        required
                   
                    />
                    <label>Date of Expense</label>
                    <input
                        className="border border-gray-300 rounded-md p-2 focus:border-purple-500"
               
              
                        type="date"
                        value={date}
                        onChange={onDateChange}
                        required
                    
                    />
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                    <button type="submit" className="px-6 py-2 bg-purple-500 shadow-sm text-white rounded-md hover:bg-purple-600">
                        Submit
                    </button>
                    <Link to="/" className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    </div>
    
    );
};
export default Income;
