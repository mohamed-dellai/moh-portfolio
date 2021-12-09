import React from 'react'
import drumMachine from './drumMachine.png'
import calc from './calc.png'
import quote from './quote.png';
import { useState } from 'react';
import {animated,useTransition} from 'react-spring';
export function Projects() {

    var x=window.pageYOffset;
    const [proj,setProj]=useState(()=>false);
    const [proj2,setProj2]=useState(()=>false);
    const [proj3,setProj3]=useState(()=>false);
    
    const transition = useTransition(proj, {
        from:{top:x , opacity: 0 , left: -1000},
        enter:{top:x , opacity: 1 , left: 0},
        leave:{top:x , opacity: 0 , left: -1000},
        config:{duration:500},
      });
      const transition2 = useTransition(proj2, {
        from:{top:x , opacity: 0 , left: -1000},
        enter:{top:x , opacity: 1 , left: 0},
        leave:{top:x , opacity: 0 , left: -1000},
        config:{duration:500},
      });
      const transition3 = useTransition(proj3, {
        from:{top:x , opacity: 0 , left: -1000},
        enter:{top:x , opacity: 1 , left: 0},
        leave:{top:x , opacity: 0 , left: -1000},
        config:{duration:500},
      });

    const onclick2= 
    
    <div className='sub-section'>
    <img src={drumMachine} alt='test'></img>
    <h3>Drum Machine</h3>
    <p>Created with reactJs , Bootstrap , CSS , Js from scratch. It contain volume control and the note that ypu made </p>
    <button>Visit</button>
    <button onClick={()=>{setProj2(!proj2); }}>Close</button>
    </div>


const onclick1= 
    
    <div className='sub-section'>
    <img src={calc} alt='test'></img>
    <h3>Simple calculator</h3>
    <p>Created with reactJs , Bootstrap , CSS , Js from scratch. It contain volume control and the note that ypu made </p>
    <button>Visit</button>
    <button onClick={()=>{setProj(!proj); }}>Close</button>
    </div>


const onclick3= 
    
    <div className='sub-section'>
    <img src={quote} alt='test'></img>
    <h3>Ranndom quote machine</h3>
    <p>Created with reactJs , Bootstrap , CSS , Js from scratch. It contain volume control and the note that ypu made </p>
    <button>Visit</button>
    <button onClick={()=>{setProj3(!proj3); }}>Close</button>
    </div>


    return (
        <div className='projects' id='work'>
            {transition((style,item)=> item ? <animated.div className='section' style={style}>{onclick1}</animated.div> : ''
      )}
       {transition2((style,item)=> item ? <animated.div className='section' style={style}>{onclick2}</animated.div> : ''
      )}
           {transition3((style,item)=> item ? <animated.div className='section' style={style}>{onclick3}</animated.div> : ''
      )} 
          
            <h2>Projects</h2>
            <h1>Check Out Some of My Works.</h1>
        <div className='projects2'>
          <div className="photos">
              <img src={calc} alt='project 1'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='CV test' style={{height: "40px"}} onClick={()=>{setProj(!proj); }}>See More</button>
          </div>
          <div className="photos">
            <img src={drumMachine} alt="project 2"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='CV test' style={{height: "40px"}}   onClick={()=>{setProj2(!proj2); }}>See More</button>
          </div>
          <div className="photos">
            <img src={quote} alt='project 3'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='CV test' style={{height: "40px"}} onClick={()=>{setProj3(!proj3); }}>See More</button>
          </div>
        </div>
        </div>
    );
  }
  