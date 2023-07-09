// import React from 'react'
// import "../../Styles/checkoutSteps.scss" // css at 10:55:09
// import { Typography } from "@material-ui/core";
// import Stepper from '@material-ui/core/Stepper/Stepper';
// import Step from '@material-ui/core/Step/Step';
// import { LiaShippingFastSolid } from "react-icons/lia"
// import { GiConfirmed } from "react-icons/gi"
// import { BsBank } from "react-icons/bs"
// import {StepLabel} from '@material-ui/core';

// const CheckoutSteps = ({activeStep}) => {

//     const steps = [
//         {
//             label:<Typography>Shipping Details</Typography>,
//             icon:<LiaShippingFastSolid/>
//         },
//         {
//             label:<Typography>Confirm Order</Typography>,
//             icon:<GiConfirmed/>
//         },
//         {
//             label:<Typography>Payment</Typography>,
//             icon:<BsBank/>
//         },
//     ];

//     const stepStyles = {
//         boxSizing: "border-box",
//     }

//   return (
//     <>
//         <Stepper alternativeLabel activeStep={activeStep} stepStyles={stepStyles}>
//             {
//                 steps.map((item,index) =>(
//                     <Step key={index} active={activeStep===index ?true:false } completed={activeStep>=index ? true:false} >
//                         <StepLabel style={{color:activeStep>=index ? "tomato":"rgba(0,0,0,0.5)"}} icon = {item.icon}> {item.label} </StepLabel>
//                     </Step>
//                 ))
//             }
//         </Stepper>
//     </>
//   )
// }

// export default CheckoutSteps


import React from 'react';
import { Typography } from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper/Stepper';
import Step from '@material-ui/core/Step/Step';
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiConfirmed } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { StepLabel } from '@material-ui/core';

const CheckoutSteps = ({ activeStep }) => {

  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <LiaShippingFastSolid />
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <GiConfirmed />
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <BsBank />
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  const inlineStyles = `
    .MuiStepConnector-line {
      display: none !important;
    }
  
    .MuiStepConnector-root {
      height: 1px;
      background-color: rgba(0, 0, 0, 0.349);
    }
  
    .MuiStepConnector-active,
    .MuiStepConnector-completed {
      background-color: tomato;
    }
  `;

  return (
    <>
      <style>{inlineStyles}</style>
      <Stepper style={{backgroundColor:"#c7f9cc"}} alternativeLabel activeStep={activeStep} stepStyles={stepStyles}>
        {
          steps.map((item, index) => (
            <Step key={index} active={activeStep === index ? true : false} completed={activeStep >= index ? true : false}>
              <StepLabel style={{ color: activeStep >= index ? "tomato" : "rgba(0,0,0,0.5)" }} icon={item.icon}> {item.label} </StepLabel>
            </Step>
          ))
        }
      </Stepper>
    </>
  )
}

export default CheckoutSteps;
