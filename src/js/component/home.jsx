import React, {useState} from "react";
import PropTypes from "prop-types"
import {IntervalExample} from "./contador.jsx"
import { Stop } from "./boton.jsx";
//include images into your bundle

//create your first component

const Home = (props)=> {
	return (
		<div className="container col-9 my-auto text-center" style={{ height: "50vh" , fontSize:"10Rem", position:"relative", top:"25vh"}}>
			<IntervalExample/>
		</div> 
	);
};

export {Home};
