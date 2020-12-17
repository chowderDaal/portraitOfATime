import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import DayCard from '../DayCard/DayCard';
import './home.css'

const Home=()=> {
  const[datesInView, setDatesInView]=useState([new Date(Date.now() - 864e5), new Date(), new Date(Date.now() + 864e5)]);
  return (
    <Paper elevation={0} className="Home fullHeight">
        <div className="centerVertically fullHeight">
        <Grid container spacing={0} className="spaceEvenly" >
            {datesInView.map(day =>
              <Grid item xs={12} lg={3} key={day}>
                    <DayCard date={day}/>
               </Grid>
            )}
        </Grid>
        </div>

    </Paper>
  );
}
export default Home;