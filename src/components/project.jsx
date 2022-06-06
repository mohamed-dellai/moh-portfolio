import React from 'react'
import drumMachine from './drumMachine.png'
import calc from './calc.png'
import quote from './quote.png';
import cap from './cap.png';
import { useState } from 'react';
import {animated,useTransition} from 'react-spring';
export function Projects() {

    var x=window.pageYOffset;
    const [proj,setProj]=useState(()=>false);
    const [proj2,setProj2]=useState(()=>false);
    const [proj3,setProj3]=useState(()=>false);
    const [proj4,setProj4]=useState(()=>false);
    
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
      const transition4 = useTransition(proj4, {
        from:{top:x , opacity: 0 , left: -1000},
        enter:{top:x , opacity: 1 , left: 0},
        leave:{top:x , opacity: 0 , left: -1000},
        config:{duration:500},
      });
    const onclick2= 
    
    <div className='sub-section'>
    <img src={drumMachine} alt='test'></img>
    <h3>Drum Machine</h3>
    <p>Created from scratch utilizing reactJs, Bootstrap, CSS, and Js. It includes volume control and the note you produced. I constructed this project to learn how to utilize the usestae hook, combining useEffect with an event listener and utilizing javascript to modify audio files.</p>
    <button onClick={()=>{document.getElementById("drum").click()}}>Visit</button>
    <button onClick={()=>{setProj2(!proj2); }}>Close</button>
    </div>


const onclick1= 
    
    <div className='sub-section'>
    <img src={calc} alt='test'></img>
    <h3>Messenger App</h3>
    <p>Created using reactJs, CSS, and Js, you may login with testing for your name and test123 for your password, messages are kept in local storage, and user information is saved in another file.</p>
    <button onClick={()=>{document.getElementById("messenger").click()}}>Visit</button>
    <button onClick={()=>{setProj(!proj); }}>Close</button>
    </div>

const onclick4= 
    
<div className='sub-section'>
<img src={cap} alt='test'></img>
<h3>Messenger App</h3>
<p>Created using reactJs, CSS, and Js, you may login with testing for your name and test123 for your password, messages are kept in local storage, and user information is saved in another file.</p>
<button onClick={()=>{document.getElementById("gestionnaire").click()}}>Visit</button>
<button onClick={()=>{setProj(!proj4); }}>Close</button>
</div>


const onclick3=
    
    <div className='sub-section'>
    <img src={quote} alt='test'></img>
    <h3>Ranndom quote machine</h3>
    <p>ReactJs, Bootstrap, and CSS were used to create this page. made to learn how to make various  animations using the react-spring library</p>
    <button onClick={()=>{document.getElementById("random").click()}}>Visit</button>
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
      {transition4((style,item)=> item ? <animated.div className='section' style={style}>{onclick4}</animated.div> : ''
      )} 



             <a id='random' rel='noreferrer' target='_blank' style={{position: 'absolute' , opacity : '0'}} href="https://randomquotemachine123.netlify.app/">a</a>
             <a id='drum' rel='noreferrer' target='_blank' style={{position: 'absolute' , opacity : '0'}} href="https://drum-machine-1.netlify.app/">a</a>
             <a id='messenger' rel='noreferrer' target='_blank' style={{position: 'absolute' , opacity : '0'}} href="https://stoic-poitras-1977c9.netlify.app/">a</a>
             <a id='gestionnaire' rel='noreferrer' target='_blank' style={{position: 'absolute' , opacity : '0'}} href="https://dazzling-cuchufli-75e184.netlify.app/">a</a>



            <h2>Projects</h2>
            <h1>Check Out Some of My Works.</h1>
        <div className='projects2'>
          <div className="photos">
              <img src={calc} alt='project 1'/>
            <p>Messenger App .</p>
            <button className='CV test' style={{height: "40px"}} onClick={()=>{setProj(!proj); }}>See More</button>
          </div>
          <div className="photos">
            <img src={drumMachine} alt="project 2"/>
            <p>Drum Machine.</p>
            <button className='CV test' style={{height: "40px"}}   onClick={()=>{setProj2(!proj2); }}>See More</button>
          </div>
          <div className="photos">
            <img src={quote} alt='project 3'/>
            <p>Random qutote Machine.</p>
            <button className='CV test' style={{height: "40px"}} onClick={()=>{setProj3(!proj3); }}>See More</button>
          </div>
          <div className="photos">
            <img src={cap} alt='project 4'/>
            <p>Random qutote Machine.</p>
            <button className='CV test' style={{height: "40px"}} onClick={()=>{setProj4(!proj4); }}>See More</button>
          </div>
        </div>
        </div>
    );
  }
  