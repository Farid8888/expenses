import classes from './ExpenseForm.module.css'
import {useState} from 'react'

const ExpenseForm = (props) => {
const [title,setTitle] = useState('')
const [amount,setAmount] = useState('')
const [date,setDate] = useState('')
const [expense,setExpense] = useState(false)

  const onSubmitHandler=(event)=>{
    event.preventDefault()
    const expenses={
      title:title,
      amount:amount,
      date:new Date(date),
      id:Math.random().toString()
    }
    props.add(expenses)
    setTitle('')
    setAmount('')
    setDate('')
  }

  const titleChange =(event)=>{
    setTitle(event.target.value)
  }


  const amountChange =(event)=>{
    setAmount(event.target.value)
  }

  const dateChange =(event)=>{
    setDate(event.target.value)
  }

  const expenseHandler = ()=>{
    setExpense(prevst=>{
      return !prevst
    })
  }
console.log(expense)


  if(expense){
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.form}>
         <div className={classes.titleAmount}>
        <div className={classes.title}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" onChange={titleChange} value={title}></input>
        </div>
        <div className={classes.amount}>
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" onChange={amountChange} value={amount}
           min="0.01" step="0.01" ></input>
        </div>
        </div>
        <div className={classes.date}>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" onChange={dateChange} value={date}></input>
        </div>
        <div className={classes['btn-btn']}>
        <div className={classes.btn + ' ' + classes.btn1}>
            <button type="button" onClick={expenseHandler}>
                Cancel
            </button>
        </div>
        <div className={classes.btn}>
            <button type='submit'>
                Add Expense
            </button>
        </div>
        </div>
      </div>
    </form>
  )};

  if(!expense){
    return (
    <div className={classes.expenseForm}>
    <div className={classes.expenseAdd}>
       <div className={classes.btn}>
            <button type='button' onClick={expenseHandler}>
                Add New Expense
            </button>
        </div>
    </div>
    </div>
  )
}};

export default ExpenseForm;
