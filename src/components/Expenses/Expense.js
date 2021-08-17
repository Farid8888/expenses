import ExpenseItem from "./ExpenseItem"
import Card from '../../UI/Card'
import DateFilter from './DateFilter'
import React,{useState} from 'react'
import ExpenseChart from './ExpenseChart'


const Expense =(props)=>{
    const [value,setValue] = useState('2020')
    

    const content = props.expenses.map(expense=>{
        return <ExpenseItem key={expense.id}
                    id={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}/>
    })

    const selectHandler =(data)=>{
      setValue(data)
    }
    
    return(
        <Card>
            <DateFilter selected={value} dateHandler={selectHandler} filter={props.filter}/>
            <ExpenseChart expenses={props.expenses}/>
           <div>
               {content}
           </div>
        </Card>
    )
}


export default Expense