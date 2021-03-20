import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useState, useEffect, useRef } from "react";
import DayCard from "../DayCard/DayCard";
import TopBar from "../TopBar/TopBar";
import "./home.css";

const Home = () => {
  const generateDateId = (argDate) => {
    let month = argDate.getMonth() + 1;
    let dayNumber = argDate.getDate();
    let year = argDate.getFullYear();
    return month + "-" + dayNumber + "-" + year + "dayCard";
  };

  const [cardsInView, setCardsInView] = useState([
    {
      date: new Date(Date.now() - 864e5),
      dayCardId: generateDateId(new Date(Date.now() - 864e5)),
      primaryColor: "#7b4397",
      secondaryColor: "#dc2430",
      entries: [],
    },
    {
      date: new Date(),
      dayCardId: generateDateId(new Date()),
      primaryColor: "#191654",
      secondaryColor: "#43C6AC",
      entries: [
        {
          type: "Task",
          complete: true,
          content: "#1 This is a task.",
        },
        {
          type: "Note",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ultricies neque, eget ullamcorper velit fringilla ac. Nullam cursus mi at fermentum lacinia. Morbi non vulputate nibh. Vivamus volutpat pharetra mattis. Phasellus ex velit, porttitor sit amet mi non, placerat pharetra ex. Etiam nec viverra lectus. Morbi vulputate non quam.",
        },
        {
          type: "Task",
          complete: false,
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
          complete: true,
          content: "#2 This is a task.",
        },
      ],
    },
    {
      date: new Date(Date.now() + 864e5),
      dayCardId: generateDateId(new Date(Date.now() + 864e5)),
      primaryColor: "#D1913C",
      secondaryColor: "#FFD194",
      entries: [
        {
          type: "Task",
          complete: false,
          content: "#1 This is a task.",
        },
        {
          type: "Note",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ultricies neque, eget ullamcorper velit fringilla ac. Nullam cursus mi at fermentum lacinia. Morbi non vulputate nibh. Vivamus volutpat pharetra mattis. Phasellus ex velit, porttitor sit amet mi non, placerat pharetra ex. Etiam nec viverra lectus. Morbi vulputate non quam.",
        },
        {
          type: "Task",
          complete: true,
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
          complete: false,
          content:
            "#2 This is a task. askjdh sdfksdfj dsfklsdjflsd sdlfkjsdlkfj sdlkfjsdlkjf sldkfjsdlkjf",
        },
      ],
    },
  ]);

  const handleCheckboxChange = (dayIndex, entryIndex) => {
    let tmpCardsInView = [...cardsInView];
    tmpCardsInView[dayIndex].entries[entryIndex].complete = !tmpCardsInView[
      dayIndex
    ].entries[entryIndex].complete;

    setCardsInView([...tmpCardsInView]);
  };

  useEffect(() => {
    let scrollDiv = document.getElementById("3-19-2021dayCard").offsetTop;
    window.scrollTo({ top: scrollDiv - 54, behavior: "smooth" });
  }, []);

  return (
    <Paper elevation={0} className="Home noBorderRadius">
      <TopBar />
      <div
        className=" fullHeight centerVertically flexWrap"
        id="dayCardContainer">
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12} className="spaceEvenly flexWrap">
            {cardsInView.map((card, index) => (
              <Grid item xs={12} lg={3} key={card.date}>
                <DayCard
                  dayCardId={card.dayCardId}
                  date={card.date}
                  primaryColor={card.primaryColor}
                  secondaryColor={card.secondaryColor}
                  entries={card.entries}
                  handleCheckboxChange={handleCheckboxChange}
                  dayIndex={index}
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
