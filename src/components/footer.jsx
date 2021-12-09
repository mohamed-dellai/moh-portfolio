import React from 'react'
import ft from './pngaaa.com-203174.png'
import ft2 from './pngaaa.com-1823138.png'
import ft3 from './pngaaa.com-1693437.png'
export function Contact() {
    return (
       <footer id='footer' style={{background: '#151515'}}>
           <h5>contact</h5>
           <h1>I'd Love To Hear From You.</h1>
           <form>
             <input type='text' placeholder='Name'></input>
             <input type='text' placeholder='Email'></input>
             <input type='text' placeholder='Subject'></input>
             <textarea placeholder='Message' rows='7' cols='50'></textarea>
             <button>Submit</button>
           </form>
           <div className='social'>
             <div className='location'>
               <img alt="" src={ft} style={{width: '55px',marginBottom: '10px'}}></img>
               <h3>Where to find me</h3>
               <p>TUNISIA , 9000 Béja , Béja Avenir </p>
               </div>
             <div className='email'>
             
               <img  alt='icon' src={ft2} style={{width: '55px',marginBottom: '10px'}}></img>
                <h3>Email me at </h3>
               <p>mohameddellai6@gmail.com</p>
               </div>
               <div className='phone'>
                 <img alt='icon' src={ft3} style={{width: '55px',marginBottom: '10px'}}></img>
                 <h3>Call me at </h3>
               <p>Phone: (+128) 20201133</p>
               </div>
           </div>
       </footer>
    );
  }
  