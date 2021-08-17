import classes from './ChartBar.module.css'




const ChartBar =(props)=>{
   const calcHeight= Math.round((props.value/props.maxValue) * 100) + '%'

    return(
      <div className={classes.chartBar}>
         <div className={classes.outer}>
             <div className={classes.inner} style={{height:calcHeight}}>
             </div>
         </div>
         <div className={classes.label}>{props.label}</div>
      </div>
    )
}


export default ChartBar