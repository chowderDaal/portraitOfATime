import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import DayCard from '../DayCard/DayCard';
import './home.css';

const Home=()=> {
  const[cardsInView, setCardsInView]=useState([
    {
      date:new Date(Date.now() - 864e5),
      primaryColor:'#7b4397',
      secondaryColor:'#dc2430'
    },
    {
      date:new Date(),
      primaryColor:'#5A3F37',
      secondaryColor:'#2C7744'

    },
    {
      date:new Date(Date.now() + 864e5),
      primaryColor:'#D1913C',
      secondaryColor:'#FFD194'
    },
  ]);
  return (
    <Paper elevation={0} className="Home fullHeight">
        <div className="centerVertically fullHeight">
        <Grid container spacing={0} className="spaceEvenly" >
            {cardsInView.map(card =>
              <Grid item xs={12} lg={3} key={card.date}>
                    <DayCard date={card.date} primaryColor={card.primaryColor} secondaryColor={card.secondaryColor}/>
               </Grid>
            )}
        </Grid>
        </div>

    </Paper>
  );
}
export default Home;