import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useState} from 'react';
import './dayCard.css'

const DayCard=(props)=> {
  const [displayDate, setDisplayDate]=useState(props.date);
  const [gradientStyle, setGradientStyle]=useState({
    backgroundImage: "linear-gradient(45deg,"+props.primaryColor+","+props.secondaryColor+")"
  });

  const convertDateFormat=(argDate)=>{
    let allMonths=[    
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"]
    let month= allMonths[argDate.getMonth()];
    let dayNumber= argDate.getDate();
    let year=argDate.getFullYear();
    return month+" "+dayNumber+", "+year;
  }

  console.log(gradientStyle.backgroundImage);
  return (
        <div className="DayCard ">
            <Paper elevation={6} className="dayCardHeight centerHorizontally dayCardPadding grow" style={gradientStyle}>
                <Typography variant="h5" className="centerHorizontally">
                    {convertDateFormat(displayDate)}
                </Typography>
            </Paper>
        </div>
  );
}

export default DayCard;