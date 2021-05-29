import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import Paper from '@material-ui/core/paper';


// import components
import BubbleChart from '../BubbleChart/BubbleChart';
import LineChart from '../LineChart/LineChart';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    backgroundColor: 'white',
    width: 'fit-content',
    // border: '2px solid black'
  },
  tabs: {
    backgroundColor: 'white'
  }
}));

export default function FullWidthTabs({selectedTicker}, {setSelectedTicker}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>

      <Box position="static" color="default">
        <Tabs
          value={value}
          boxShadow={0}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          // variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Sentiment Chart" {...a11yProps(1)} />
          <Tab label="Price Chart" {...a11yProps(2)} />
          
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BubbleChart selectedTicker={selectedTicker} setSelectedTicker={setSelectedTicker}/>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <LineChart selectedTicker={selectedTicker} setSelectedTicker={setSelectedTicker}/>
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}