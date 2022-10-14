import { resetWarningCache } from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import {Stop} from "./boton.jsx"

const IntervalExample = (props) => {
    //------- esto es el inicio del contador
  const [seconds, setSeconds] = useState(0);
  const [conti,setConti] = useState(false)
  const interval = useRef(null)

    useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds(seconds=>seconds + 1);
    }, 1000);
    return ()=> clearInterval(interval.current);
  }, []);
  
  //----------- continuar contando
  function continuar(){
      if(conti==false){
      setConti(conti=>true)
      return interval.current = setInterval(() => {
        setSeconds(seconds=>seconds + 1);
      }, 1000);}
  }
  //------------ fin
  //----------- fin del contador

  //----------- Funcion que detiene el contador
  function clearTimer(){
    setConti(conti=>false)
    clearInterval(interval.current);
    interval.current=null;
  }

  //----------- fin de la funcion 
  function establecer(){
    let numero = prompt("introduzca el numero")
    if (!isNaN(numero)){
      setSeconds(seconds=>parseInt(numero))
    }
    else{
      alert("No has ingresado un Numero")
    }
  }
  //--------------- funcion que realiza el renderizado de los numeros
  function item(o){
     return (<div className="border border-1 border-dark col-2 bg-dark text-white m-2" style={{borderRadius:"50px"}}>{o}</div>)
    };
  let arr = Array.from(seconds.toString());
  let newArr = [item(0),item(0),item(0),item(0),item(0)]
  arr.forEach(element => {
    newArr.push(item(element));
    if (newArr.length>=5){
      newArr.shift();
    }
  });
  let contador =[item(<i className="bi bi-clock " style={{fontSize:"6rem"}}></i>)].concat(newArr);
  //--------------------fin de la funcion
  //--------------------
  function resetear(){
    setSeconds(seconds=>0)
  }
  return (
    <div className='position-relative'>
      <div className='row-col d-flex  justify-content-center'>{contador}</div>
      <div className='row-col '><Stop funcion={clearTimer} reiniciar={resetear} contin={continuar} estab={establecer}/></div>
    </div>
  );
}

export { IntervalExample };