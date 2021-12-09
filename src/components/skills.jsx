import React from 'react'
export function Skills() {
    return (
      <div id='about'>
       <div className='container-sk'>
          <div className='sk'>
            <p>About</p>
            <h1>introduction.</h1>
              <div className='new'>
               <h3>Firstly, Welcome to my portfolio , I hope you are having a good day and I hope you like my web site that I created with react and some bootstrap , it contain all informations you need  about me   , have fun 😊</h3>
               <img alt='img' src='https://media.istockphoto.com/vectors/successful-young-business-man-holding-a-laptop-and-showing-victory-v-vector-id1201496048'/>
             </div>
           </div>
         </div>
         <div className='profile-skills'>
            <div className='profile'>
             <h3>PROFILE</h3>
             <p> I'm Mohamed Dellai a computer science student and a web developer I'm 19 years old and I'm willing to be the best of the best 😉.</p>
             <h3>FULLNAME:</h3>
             <p>Mohamed Dellai</p>
             <h3>BIRTH DATE:</h3>
             <p>June 07,2002</p>
             <h3>JOB:</h3>
             <p>Front End Devolopper(for now)</p>
             <h3>WEBSITE:</h3>
             <p>moh-portfolio.netlify.app</p>
             <h3>EMAIL:</h3>
             <p>mohameddellai6@gmail.com</p>
            </div>
            <div className='skill'>
              <h3>SKILLS</h3>
              <p>I'm conftable using react , css and javascript I built some projects to demonstrate my knwoldge , check them out </p>
              <h4>HTML5</h4>
              <div className="progress">
                 <div className="progress-bar" role="progressbar" style={{width: '80%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">80%</div>
               </div>
               <h4>JS</h4>
               <div className="progress">
                 <div className="progress-bar" role="progressbar" style={{width: '80%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">80%</div>
               </div>
               <h4>CSS</h4>
               <div className="progress">
                 <div className="progress-bar" role="progressbar" style={{width: '70%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">70%</div>
               </div>
               <h4>React Js</h4>
               <div className="progress">
                 <div className="progress-bar" role="progressbar" style={{width: '70%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">70%</div>
               </div>
               <h4>Bootstrap 4</h4>
               <div className="progress">
                 <div className="progress-bar" role="progressbar" style={{width: '65%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">65%</div>
               </div>
               <h4>Jquery</h4>
               <div className="progress">
                 <div className="progress-bar" role="progressbar" style={{width: '50%'}} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">50%</div>
               </div>
            </div>
         </div>
         <div className='skills-button'>
            <a clasName='hire' href='#footer'><button className='hire' >Hire Me</button></a>
            <button className='CV' >Download CV</button>
         </div>
      </div>
    );
  }
  