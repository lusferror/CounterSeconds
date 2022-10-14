import React, {useEffect,useState} from "react";
import { IntervalExample  } from "./contador.jsx";

export const Stop = (props) =>{
    return (
        <div className="d-flex justify-content-center">
        <button className="btn btn-danger btn-lg m-2" onClick={props.funcion} style={{width:"25%"}}>
			DENETER
		</button>
        <button className="btn btn-success btn-lg m-2" onClick={props.reiniciar} style={{width:"25%"}}>
			REINICIAR
		</button>
        <button className="btn btn-warning btn-lg m-2" onClick={props.contin} style={{width:"25%"}}>
			CONTINUAR
		</button>
        <button className="btn btn-primary btn-lg m-2" onClick={props.estab} style={{width:"25%"}}>
			ESTABLECER
		</button>
        </div>
        
    )
}