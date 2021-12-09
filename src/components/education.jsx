import React from 'react'
export function Education() {
    return (
      <div className='education-section'>
          <div className='head'>
              <h2>Resume</h2>
              <h1>More of my credentials.</h1>
              <p>Im quite motivated to learn more technologies and skills also Im hard worker who have a lot of energy and im really exited to land my first job</p>
          </div>
          <h3 style={{color: '#FF0077',fontWeight: 600,fontSize: '1.5rem',marginTop: '50px'}}> Education</h3>
             <div className='degreetitle'>
             
                 <div className='titledeg'>
                
                   <h3 >High school degree</h3>
                    <img src='https://icon-library.com/images/graduation-icon-png/graduation-icon-png-1.jpg' width='40px' alt='graduation icon' className='image'></img>
                   <p style={{marginTop: '-17px'}}>Computer science - july 2021</p>
                   <p>In High school we actually study basic web development we studied sql a lot , making request , sql databases with phpMyadmin we also learned how to make basic website with forms than we used js to controller input finally we used php5 to save and control data in sql database.We also learned how to solve challenging algorithms</p>

                 </div>
             </div>
             <div className='degreetitle'>
             
                 <div className='titledeg'>
                 
                   <h3>Computer science student</h3>
                   <img src='https://icon-library.com/images/graduation-icon-png/graduation-icon-png-1.jpg' width='40px' alt='graduation icon' className='image'></img>
                   <p style={{marginTop: '-17px'}}>2021 - Present</p>
                   <p>Im currently studying computer science in Higher Institute of Arts and Multimedia Manouba and its my first year. I'm doing my best to do well in college in the same time I'm learning more about web devolement and I'm currently learning redux and nodeJs</p>
                   
                 </div>
             </div>
          </div>  
    );
  }
  