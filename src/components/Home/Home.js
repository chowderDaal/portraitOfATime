import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './home.css'

const Home=()=> {
  return (
    <Paper elevation={0} className="Home">

    <Grid container spaccing={5} className="spaceEvenly centerVertically fullHeight">

        <Grid item xs={12} lg={3} id="yesterdayCard">
            <Paper elevation={3} className="dayCardHeight">
                Yesterday
            </Paper>
        </Grid>

        <Grid item xs={12} lg={3} id="todayCard">
            <Paper elevation={3} className="dayCardHeight">
                Today
            </Paper>
        </Grid>

        <Grid item xs={12} lg={3} id="tomorrowCard">
            <Paper elevation={3} className="dayCardHeight">
                Tomorrow
            </Paper>
        </Grid>

    </Grid>

    </Paper>
    
  );
}

export default Home;