import classes from './DateFilter.module.css'



const DateFilter =(props)=>{

const changeValue =(event)=>{
props.dateHandler(event.target.value)
props.filter(event.target.value)
}
console.log(props.selected)
    return(
        <div className={classes.dataFilter}>
            <h2>Filter by year</h2>
            <select className={classes.selectDate} value={props.selected} onChange={changeValue}>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
    )
}


export default DateFilter