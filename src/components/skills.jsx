import React from 'react'
export function Skills() {
    return (
      <div id='about'>
       <div className='container-sk'>
          <div className='sk'>
            <p>About</p>
            <h1>Let me introduce myself.</h1>
              <div className='new'>
               <h3>Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur ea id quis eiusmod.</h3>
               <img alt='img' src='https://media.istockphoto.com/vectors/successful-young-business-man-holding-a-laptop-and-showing-victory-v-vector-id1201496048'/>
             </div>
           </div>
         </div>
         <div className='profile-skills'>
            <div className='profile'>
             <h3>PROFILE</h3>
             <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
             <h3>FULLNAME:</h3>
             <p>Mohamed Dellai</p>
             <h3>BIRTH DATE:</h3>
             <p>June 07,2002</p>
             <h3>JOB:</h3>
             <p>Full Stack Developer</p>
             <h3>WEBSITE:</h3>
             <p>NotReady.com</p>
             <h3>EMAIL:</h3>
             <p>mohameddellai6@gmail.com</p>
            </div>
            <div className='skill'>
              <h3>SKILLS</h3>
              <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
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
            <button className='hire'>Hire Me</button>
            <button className='CV'>Download CV</button>
         </div>
      </div>
    );
  }
  