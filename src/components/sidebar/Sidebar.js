import { useState, useEffect } from "react";
import "./Sidebar.css";
import piggybank from "../../images/piggybank.png";
import { NavLink } from "react-router-dom";
import {
  UilEstate,
  UilBars,
  UilTimes,
  UilPlusCircle,
  UilMinusCircle,
} from "@iconscout/react-unicons";
import { addDemoExpense, addDemoIncome, resetTransactions } from '../../features/transaction/transactionSlice';
import { useDispatch } from 'react-redux';
import { UilArrowDown } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ show, dataExpense, dataIncome, setPage }) => {
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(!expanded);
  const dispatch = useDispatch();
  const [demoArrow, setDemoArrow] = useState(<UilArrowDown className="arrow" />)

  const handleDemo = () => {
    dispatch(addDemoExpense(dataExpense));
    dispatch(addDemoIncome(dataIncome));
    setPage(1)
    setExpanded(false)
    navigate("/")
  }

  const [demoAlert, setDemoAlert] = useState(<button onClick={handleDemo} className="demo-btn alert">Demo</button>)

  useEffect(() => {
    if (localStorage.getItem("firstVisit")) {
      setDemoArrow(null)
      setDemoAlert(buttonNormal)
    } else {
      localStorage.setItem("firstVisit", "true")
    }
    // eslint-disable-next-line
  }, [])

  const buttonNormal = (<button
    onClick={handleDemo}
    className="demo-btn text-white bg-fuchsia-800 hover:bg-fuchsia-600 rounded-md px-10 py-4 text-sm font-medium text-center mb-4  ">Demo
  </button>)

  const [afterWelcome, setAfterWelcome] = useState(true)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setAfterWelcome(false)
    }, 8000)
    return () => {
      clearTimeout(timeId)
    }
  }, [])

  const handleReset = () => {
    dispatch(resetTransactions())
    setExpanded(false)
    navigate("/")
  }

  return (
    <nav className="nav">
      {expanded ? <div className="close-icon" onClick={handleClick}><UilTimes /></div> : <div className="burger-icon" onClick={handleClick}><UilBars /></div>}
      <div className={expanded ? 'sidebar open' : 'sidebar'}>
        <div className="logo">
          <img src={piggybank} alt="logo" />
          <span>
            <span className="text-3xl font-extrabold text-fuchsia-800">Budgetify</span>
          </span>
        </div>

        <div className="menu">
          <ul className="menu-items" onClick={handleClick}>
            <li><NavLink to='/' className="menu-item  rounded-md hover:bg-fuchsia-800 hover:text-white px-3 py-2 text-sm font-medium text-fuchsia-950"> <UilEstate /> Dashboard</NavLink></li>
            <li><NavLink to='/add-income' className="menu-item  rounded-md hover:bg-fuchsia-800 hover:text-white px-3 py-2 text-sm font-medium text-fuchsia-950"> <UilPlusCircle /> Add Income</NavLink></li>
            <li><NavLink to='/add-expense' className="menu-item  rounded-md hover:bg-fuchsia-800 hover:text-white px-3 py-2 text-sm font-medium text-fuchsia-950"><UilMinusCircle /> Add Expense</NavLink></li>
          </ul>
        </div>

        <div className="control-panel">
          {show &&
            <>
              {demoArrow}
              {demoAlert}
            </>
          }
          {!afterWelcome &&
            <>{buttonNormal}</>
          }
          <button
            onClick={handleReset}
            className="reset-btn border-fuchsia-800 border  text-fuchsia-800 hover:bg-fuchsia-800 hover:text-white  rounded-md px-10 py-4 text-sm font-medium text-center  ">Reset
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
