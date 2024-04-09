import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CardElement from "../../component/cardElement";
import nojobimage from "../../images/nojobimage.png"
import { Tilt } from 'react-tilt'
import yellowbg from "../../images/yellowbg.jpg"
import greenbg from "../../images/greenbg.jpg"
import cloud from "../../images/cloud.png"
import yoga from "../../images/yoga.png"
import bird from "../../images/bird2.gif"
import breathe from "../../images/breathe.gif"
import breathe2 from "../../images/breathe2.gif"
import breathe3 from "../../images/breathe3.gif"
import timeryoga from "../../images/timeryoga.png"
import { FaForward } from "react-icons/fa";
import Footer from "../../component/Footer";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const UserGraphicGuide = () => {
  const { userInfo : user } = useSelector(state => state.userProfile);
  const {mode} = useSelector(state => (state.mode));

  const [timer, setTimer] = useState(60); // Timer starts at 60 seconds
  const [isActive, setIsActive] = useState(false); // State to track if timer is active

  const [value, setValue] = React.useState(0);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    let interval;

    // Start the timer when isActive becomes true
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1); // Decrement the timer by 1 every second
        if (timer === 0) {
          setIsActive(false); // When the timer reaches 0, stop it
        }
      }, 1000);
    } else {
      clearInterval(interval); // Clear the interval when the timer is not active
    }

    // Clear the interval when the component unmounts or when isActive changes
    return () => clearInterval(interval);
  }, [isActive]);

   // Function to handle the click event on the Icon
   const handleIconClick = () => {
    setIsActive(true); // Set isActive to true to start the timer
  };
  
  console.log(user);
  console.log(user?.blogHistory.length);
  console.log(user?.blogHistory?.length);
  return (
    <>
      <Box >
        <Box>
          <div className="w-[205vh] relative overflow-clip">
            <img src={cloud} className="absolute -left-10 top-[68vh] h-32 w-64" />
            <img src={cloud} className="absolute -right-10 top-5 h-32 w-64" />
            <img src={greenbg} className="object-cover w-full h-[240vh]" />
            <div className="flex absolute font-semibold space-x-4 text-5xl right-[42%] top-20">
              <p className="text-[#8B4513]">Choose from a series of Exercises </p>
            </div>
            <div className="absolute right-0 top-2">
              <img src={bird} className="h-[90vh] w-[90vh]"/>
            </div>
            <div className="flex absolute left-16 pl-10 font-semibold space-x-4 text-2xl right-[35%] top-40">
              <p className="text-[#8B4513]">Guided meditations to help you manage life’s <br/> more challenging moments.</p>
            </div>
            <div className="flex absolute left-20 pl-6 space-x-4 text-lg right-[35%] top-64 w-[86vh] text-justify">
              <p className="text-[#8B4513]">Select from our range of tailored exercises designed to alleviate anxiety, offering a pathway to tranquility and emotional balance. Rediscover joy and vitality with exercises crafted to combat depression, guiding you towards a brighter outlook on life. Conquer sleeplessness with our specialized exercises, promoting deep relaxation and rejuvenating rest for a refreshed mind and body.</p>
            </div>


            <div className="flex bg-black w-full absolute top-[120vh]">
              <div className="relative w-full">
              <div className="absolute top-0 w-full">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
      </CustomTabPanel>
                
                
                </div>
              </div>
            </div>
           
          </div>
        </Box>
          
        <Box>
            {
                user && 
                user?.blogHistory?.map((history, i) => ( 
                    <div className={`${mode === 'light' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...' : 'bg-black'}`}>  
                   <CardElement className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
                            key={i}
                            id = {history.id}
                            blogTitle = {history.title}
                            description={history.description}
                            category={history.category}
                            location={history.location} 
                    />   
                    </div> 
                // <h3>{history.title}</h3>
                )) 
            }
        </Box> 
      </Box>
      <Footer />
    </>
  );
};

export default UserGraphicGuide;
