import React from 'react'
export function Education() {
    return (
      <div className='education-section'>
          <div className='head'>
              <h2>Resume</h2>
              <h1>More of my credentials.</h1>
              <p>I am really driven to acquire new technologies and abilities. I am also a hard worker with a lot of enthusiasm, and I am very excited to secure my first job or internship.</p>
          </div>
          <h3 style={{color: '#FF0077',fontWeight: 600,fontSize: '1.5rem',marginTop: '50px'}}> Education</h3>
             <div className='degreetitle'>
             
                 <div className='titledeg'>
                
                   <h3 >High school degree</h3>
                    <img src='https://icon-library.com/images/graduation-icon-png/graduation-icon-png-1.jpg' width='40px' alt='graduation icon' className='image'></img>
                   <p style={{marginTop: '-17px'}}>Computer science - july 2021</p>
                   <p>In high school, we studied sql, making requests, and creating sql databases using phpMyadmin. We also learned how to create simple websites, and lastly, we used php5 to store, get, and edit data in the sql database. We also learnt how to tackle difficult algorithms.</p>

                 </div>
             </div>
             <div className='degreetitle'>
             
                 <div className='titledeg'>
                 
                   <h3>Computer science student</h3>
                   <img src='https://icon-library.com/images/graduation-icon-png/graduation-icon-png-1.jpg' width='40px' alt='graduation icon' className='image'></img>
                   <p style={{marginTop: '-17px'}}>2021 - Present</p>
                   <p>It is my first year of studying computer science at the Higher Institute of Arts and Multimedia Manouba. I'm trying my best in college while also learning more about web development, and I'm now learning redux and nodeJs.</p>
                   
                 </div>
             </div>
          </div>  
    );
  }
  