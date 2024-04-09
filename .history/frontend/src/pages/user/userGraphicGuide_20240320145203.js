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

import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';


const UserGraphicGuide = () => {
  const { userInfo : user } = useSelector(state => state.userProfile);
  const {mode} = useSelector(state => (state.mode));

  const [timer, setTimer] = useState(60); // Timer starts at 60 seconds
  const [isActive, setIsActive] = useState(false); // State to track if timer is active


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
                
                <div>
                <Stepper activeStep={activeStep} className="pt-10 mx-40">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
                </Stepper>
                {activeStep === 0 ? ( //Personal Details
                    <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <div className="absolute top-10 left-24 flex w-full">
                    <div className="border-2 shadow-xl shadow-green-300 rounded-lg w-full">
                      <img src={breathe} className="h-[60vh] w-[100vh] rounded-lg" />
                    </div>
                    <div className="flex left-16 w-full justify-center pl-10 font-semibold space-x-4 right-24 text-4xl ">
                      <p className="text-[#808000] absolute right-[34vh]">Breathing Exercise 1</p>
                    </div>
                    </div>
                    <div className="flex absolute w-full justify-center pl-10 space-x-4 right-24 text-lg top-32">
                      <p className="text-green-800 absolute right-0 w-[62vh] text-justify ">Begin by finding a quiet and comfortable space to sit or lie down. Close your eyes and take a deep breath in through your nose, feeling your chest and belly expand. Hold for a moment, then exhale slowly through your mouth, letting go of any tension. Repeat this deep breathing pattern for several minutes, focusing solely on the rhythm of your breath. Allow each inhale to bring calmness and each exhale to release stress. Gradually, you'll feel a sense of relaxation washing over you, leaving you feeling more centered and at peace.</p>
                    </div>
                  </Box>
                ) : activeStep === 1 ? ( //Education
                <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  position: "relative",
                }}
              >
                <div className="absolute top-10 left-24 flex w-full">
                <div className="border-2 shadow-xl shadow-green-300 rounded-lg w-full">
                  <img src={breathe2} className="h-[60vh] w-[100vh] rounded-lg" />
                </div>
                <div className="flex left-16 w-full justify-center pl-10 font-semibold space-x-4 right-24 text-4xl ">
                  <p className="text-[#808000] absolute right-[34vh]">Breathing Exercise 2</p>
                </div>
                </div>
                <div className="flex absolute w-full justify-center pl-10 space-x-4 right-24 text-lg top-32">
                  <p className="text-green-800 absolute right-0 w-[62vh] text-justify ">Begin by finding a quiet and comfortable space to sit or lie down. Close your eyes and take a deep breath in through your nose, feeling your chest and belly expand. Hold for a moment, then exhale slowly through your mouth, letting go of any tension. Repeat this deep breathing pattern for several minutes, focusing solely on the rhythm of your breath. Allow each inhale to bring calmness and each exhale to release stress. Gradually, you'll feel a sense of relaxation washing over you, leaving you feeling more centered and at peace.</p>
                </div>
              </Box>
                ) : activeStep === 2 ? (                   //Experience
                    <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  position: "relative",
                }}
              >
                <div className="absolute top-10 left-24 flex w-full">
                <div className="border-2 shadow-xl shadow-green-300 rounded-lg w-full">
                  <img src={breathe3} className="h-[60vh] w-[100vh] rounded-lg" />
                </div>
                <div className="flex left-16 w-full justify-center pl-10 font-semibold space-x-4 right-24 text-4xl ">
                  <p className="text-[#808000] absolute right-[34vh]">Breathing Exercise 3</p>
                </div>
                </div>
                <div className="flex absolute w-full justify-center pl-10 space-x-4 right-24 text-lg top-32">
                  <p className="text-green-800 absolute right-0 w-[62vh] text-justify ">Begin by finding a quiet and comfortable space to sit or lie down. Close your eyes and take a deep breath in through your nose, feeling your chest and belly expand. Hold for a moment, then exhale slowly through your mouth, letting go of any tension. Repeat this deep breathing pattern for several minutes, focusing solely on the rhythm of your breath. Allow each inhale to bring calmness and each exhale to release stress. Gradually, you'll feel a sense of relaxation washing over you, leaving you feeling more centered and at peace.</p>
                </div>
              </Box>
                ) :                                     //Timer
                (
                  <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <div className="flex left-16 w-full justify-center font-semibold space-x-4 right-24 text-4xl mt-20">
                  <p className="text-[#808000] absolute right-[34vh]">Now, it's time for you to try it yourself</p>
                </div>
                <div className="flex left-16 w-full justify-center font-semibold space-x-4 right-24 text-4xl mt-32">
                  <h1 className="text-[#808000] absolute right-[84vh]">{timer}</h1>
                  <CountdownCircleTimer
                  isPlaying
                  trailStrokeWidth={}
                  duration={60}
                  trailColor="#d9d9d9"
                  onComplete={() => {
                    return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
                  }}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[60, 45, 30, 15]}
                  >
                      {({ remainingTime }) => remainingTime}
                  </CountdownCircleTimer>
    </div>
                </Box>
                )}

              <div className="w-[160vh] absolute top-[84vh] left-40 flex justify-between items-center">
                <div className="flex justify-between w-full">
                  <button color="inherit" disabled={activeStep === 0} onClick={handleBack} className="font-semibold border-2 rounded-lg hover:scale-105 duration-300 ease-in-out text-lg hover:shadow-2xl hover:shadow-violet-500 px-2">
                    Back
                  </button>
                  <button onClick={handleNext} disabled={activeStep === 3} className="font-semibold border-2 rounded-lg hover:scale-105 duration-300 ease-in-out text-lg hover:shadow-2xl hover:shadow-violet-500 px-2">
                    Next
                  </button>
              </div>
              </div>
                </div>
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
