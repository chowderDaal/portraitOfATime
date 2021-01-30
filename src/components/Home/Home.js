import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import DayCard from "../DayCard/DayCard";
import TopBar from "../AppBar/TopBar";
import "./home.css";

const Home = () => {
  const [cardsInView, setCardsInView] = useState([
    {
      date: new Date(Date.now() - 864e5),
      primaryColor: "#7b4397",
      secondaryColor: "#dc2430",
      entries: [],
    },
    {
      date: new Date(),
      primaryColor: "#5A3F37",
      secondaryColor: "#2C7744",
      entries: [
        {
          type: "Task",
          content: "#1 This is a task.",
        },
        {
          type: "Note",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ultricies neque, eget ullamcorper velit fringilla ac. Nullam cursus mi at fermentum lacinia. Morbi non vulputate nibh. Vivamus volutpat pharetra mattis. Phasellus ex velit, porttitor sit amet mi non, placerat pharetra ex. Etiam nec viverra lectus. Morbi vulputate non quam.",
        },
        {
          type: "Task",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus.",
        },
        {
          type: "Note",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros suscipit erat malesuada tempus.",
        },
        {
          type: "Task",
          content: "#2 This is a task.",
        },
      ],
    },
    {
      date: new Date(Date.now() + 864e5),
      primaryColor: "#D1913C",
      secondaryColor: "#FFD194",
      entries: [
        {
          type: "Task",
          content: "#1 This is a task.",
        },
        {
          type: "Note",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ultricies neque, eget ullamcorper velit fringilla ac. Nullam cursus mi at fermentum lacinia. Morbi non vulputate nibh. Vivamus volutpat pharetra mattis. Phasellus ex velit, porttitor sit amet mi non, placerat pharetra ex. Etiam nec viverra lectus. Morbi vulputate non quam.",
        },
        {
          type: "Task",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus.",
        },
        {
          type: "Note",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt eros suscipit erat malesuada tempus.",
        },
        {
          type: "Task",
          content: "#2 This is a task.",
        },
      ],
    },
  ]);

  return (
    <Paper elevation={0} className="Home noBorderRadius">
      <TopBar />
      <div className=" fullHeight centerVertically">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12} className="spaceEvenly">
            {cardsInView.map((card) => (
              <Grid item xs={12} lg={3} key={card.date}>
                <DayCard
                  date={card.date}
                  primaryColor={card.primaryColor}
                  secondaryColor={card.secondaryColor}
                  entries={card.entries}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};
export default Home;
