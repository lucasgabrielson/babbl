import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TopMovers from "../Overview/TopMovers/TopMovers";
import BottomMovers from "../Overview/BottomMovers/BottomMovers";
import BubbleChart from "../Overview/BubbleChart/BubbleChart";

import TopTen from "../Overview/TopTen/TopTen";
import SnippetsCarousel from "../Overview/SnippetsCarousel/SnippetsCarousel";
import News from "../News/News";

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "350px",
    margin: "0px 0px 20px 0px",
    padding: "10px",
    borderRadius: "5px",
  },
  CarouselContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    margin: "20px 0px 20px 0px",
    borderRadius: "5px",
  },
  chartMovers: {
    display: "flex",
    borderRadius: "5px",

    width: "100%",
    minWidth: "fit-content",
  },
  movers: {
    display: "flex",
    flexGrow: 1,
    marginLeft: "20px",
    flexDirection: "column",
    alignItems: "center",
  },
  bubbleChartContainer: {
    display: "flex",
    flexGrow: 3,
    margin: "0px 20px 0px 20px",
    border: "1px solid white",
    borderRadius: "4px",
  },
  TopTenContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    minWidth: "250px",
  },
  middle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  chartAndTen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  snippets: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  carouselHeaders: {
    padding: "20px",
    margin: "10px",
    color: "gray",
  },
}));

const Overview = () => {
  const classes = useStyles();

  return (
    <div className={classes.overview}>
      <div className={classes.chartAndTen}>
        <div className={classes.chartMovers}>
          <div className={classes.movers}>
            <h3>Daily Movement</h3>
            <TopMovers />
            <BottomMovers />
          </div>
          <div className={classes.middle}>
            <div className={classes.bubbleChartContainer}>
              <BubbleChart />
            </div>
          </div>
          <div className={classes.TopTenContainer}>
            <h3>Weekly Mentions</h3>
            <TopTen />
          </div>
        </div>
      </div>
      <h3 className={classes.carouselHeaders}>
        Check out the top trending article snippets
      </h3>
      <div className={classes.CarouselContainer}>
        <div className={classes.carousel}>
          <SnippetsCarousel />
        </div>
      </div>
      <News />
    </div>
  );
};

export default Overview;
