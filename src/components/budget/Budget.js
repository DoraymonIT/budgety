import './Budget.css'
import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import {UilMoneybag}  from '@iconscout/react-unicons'
const Budget = () => {
    const balance = useSelector((state) => state.transactions.balance);

    return (
        <>
            <div className='text-center budget-container balance-color shadow-transparent'>
                <div className="text-fuchsia-800 font-bold text-2xl budget-title">
                <UilMoneybag className="money-button"/>     Balance
                </div>
                <div className='text-fuchsia-800 font-bold text-xl budget-total'>
                    <NumericFormat value={balance} displayType="text" thousandSeparator={true} prefix="MAD " />
                </div>
            </div>
        </>
    );
};
export default Budget