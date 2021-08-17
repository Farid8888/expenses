import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import React,{useState} from "react";
import Expense from './components/Expenses/Expense'


const App = () => {


  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount:94.12,
      date:new Date(2020,7,14)
    },
    {
        id:'e2',
        title:'New Tv',
        amount:799.49,
        date:new Date(2021,3,12)
    },
    {
        id:'e3',
        title:'Car Insuranse',
        amount:294.67,
        date:new Date(2021,3,28)
    },
    {
        id:'e4',
        title:'New Desk(Wooden)',
        amount:450,
        date:new Date(2021,4,12)
    }
  ];
  const [filteredYear,setFilteredYear] = useState('2020')
  const [expense,setExpense] = useState(expenses)


  const addHandler =(data)=>{
    setExpense(prevState=>{
      return prevState.concat(data)
    })
  }


const filterHandler = (year)=>{
  setFilteredYear(year)
}
console.log(expense)
  
const filterExpenses = expense.filter(expense=>expense.date.getFullYear().toString() === filteredYear)

  return (
    <React.Fragment>
      <ExpenseForm add={addHandler} />
      <Expense expenses={filterExpenses} filter={filterHandler}/>
    </React.Fragment>
  );
};

export default App;
