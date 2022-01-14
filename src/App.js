import React, { useEffect } from 'react'
import {NavBar} from './components/navbar.jsx'
import {Welcome} from './components/welcome.jsx'
import {Skills} from './components/skills.jsx'
import {Education} from './components/education.jsx'
import {Projects} from './components/project.jsx'
import {Contact} from './components/footer.jsx'
import { useState } from 'react'
import {animated,useTransition} from 'react-spring';



function App() {
  const [visible,setVisible]=useState(true);
  const [scroll,setScroll]=useState(window.pageYOffset);
  const transition=useTransition(visible,{
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config:{duration: 200}
  })
  useEffect(() => {
    
    
    var intervalId = window.setInterval(() => {
      setScroll(window.pageYOffset);
      if(scroll>250)
      setVisible(true);
    else
      setVisible(false);
    }, 10);
    return () => {
      clearInterval(intervalId)
    }
  })

   
     
    
    
 
  return (
   <div className='containe'>
     
     {transition((style,item)=>item ? <animated.div id='fixed' style={style}>
       <a href="#welcome-section"><i class="fa fa-long-arrow-up"></i> </a>
  </animated.div> : '')}
    <NavBar />
    <Welcome />
    <Skills />
    <Education />
    <Projects/>
    <Contact />
   </div>
  );
}

export default App;
