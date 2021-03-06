import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import TickerCard from "../Dashboard/TickerCard/TickerCard";
import WatchList from "../Dashboard/WatchList/WatchList";
import BubbleChart from "../Dashboard/BubbleChart/BubbleChart";
import Tabs from "./ChartTabs/ChartTabs";
import SnippetsCarousel from "../Dashboard/SnippetsCarousel/SnippetsCarousel";
import ArticleTabs from "../Dashboard/ArticleTabs/ArticleTabs";
import DashboardAppBar from "../LandingPageBabbl/views/DashboardAppBar";

const useStyles = makeStyles({
  root: {
    margin: "20px",
  },
  title: {
    borderBottom: "5px solid gray",
    borderRadius: "5px",
  },
  tickerContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  chartContainer: {
    display: "flex",

    justifyContent: "space-between",
  },
  watchlistContainer: {
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
  },
  CarouselContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 20px 0px",
    borderRadius: "5px",
  },
  carousel: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "350px",
    margin: "20px 0px 20px 0px",
    padding: "10px",
    borderRadius: "5px",
  },
  snippetsTitle: {
    textAlign: "left",
  },
  carouselHeaders: {
    padding: "20px",
    margin: "10px",
    color: "gray",
  },
});

const Dashboard = () => {
  const dispatch = useDispatch();
  let user = useSelector((store) => store.user);
  // Sets initial ticker to show as AAPL
  const [selectedTicker, setSelectedTicker] = useState("AAPL");

  useEffect(() => {
    dispatch({ type: "FETCH_USER_WATCHLIST", payload: user.id });
  }, [dispatch]);

  const classes = useStyles();

  console.log("ticker on dashboard", selectedTicker);
  return (
    <div>
      <DashboardAppBar />
      <div className={classes.root}>
        <div className={classes.tickerContainer}>
          {/* Makes selectedTicker and setSelectedTicker state accessible in all the components below */}
          <TickerCard
            selectedTicker={selectedTicker}
            setSelectedTicker={setSelectedTicker}
          />
        </div>
        <div className={classes.chartContainer}>
          <Tabs
            selectedTicker={selectedTicker}
            setSelectedTicker={setSelectedTicker}
          />
          <div className={classes.watchlistContainer}>
            <h4 className={classes.title}>Watchlist</h4>
            <WatchList
              selectedTicker={selectedTicker}
              setSelectedTicker={setSelectedTicker}
            />
          </div>
        </div>
        <div className={classes.snippetsTitle}>
          <h3 className={classes.carouselHeaders}>
            Check out the top trending article snippets
          </h3>
        </div>
        <div className={classes.CarouselContainer}>
          <div className={classes.carousel}>
            <SnippetsCarousel
              selectedTicker={selectedTicker}
              setSelectedTicker={setSelectedTicker}
            />
          </div>
        </div>

        <div>
          <ArticleTabs />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
