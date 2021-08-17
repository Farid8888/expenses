import classes from './Chart.module.css'
import ChartBar from './ChartBar'


const Chart =(props)=>{
    
        const arrayValue =  props.items.map(item=>{
             return item.value
         })
    const maxValue = Math.max(...arrayValue)
    console.log(maxValue)
    return(
       <div className={classes.chart}>
        {props.items.map(item=>{
            return <ChartBar key={item.label}
                             label={item.label}
                             maxValue={maxValue}
                             value={item.value}/>
        })}
       </div>
    )
}

export default Chart