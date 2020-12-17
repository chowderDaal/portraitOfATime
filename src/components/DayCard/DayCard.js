import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useState} from 'react';
import './dayCard.css'

const DayCard=(props)=> {
  const [displayDate, setDisplayDate]=useState(props.date);
  return (
        <div className="DayCard ">
            <Paper elevation={6} className="dayCardHeight gradientBackgroud">
                <Typography variant="h4">
                    {displayDate.toString()}
                </Typography>
            </Paper>
        </div>
  );
}

export default DayCard;