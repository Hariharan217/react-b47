import React from 'react'

function Skill() {
  return (
    <section>
      <div className='skills' id='skills'>
        <h2 className='heading' >My <span>Skills</span></h2> 
        {/* <h3 className='title' >Coding Skills</h3> */}
        <div className='skills-row'>

          <div className='skills-column'>


            <div className='skills-box'>
              <div className='skills-content'>
                <div className='progress' >
                  <h3>HTML<span>80%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress' >
                  <h3>CSS<span>70%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress' >
                  <h3>Javascript<span>85%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
              </div>
            </div>
          </div>
          <div className='skills-column'>



            <div className='skills-box'>
              <div className='skills-content'>

                <div className='progress' >
                  <h3>React<span>75%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress' >
                  <h3>NodeJs<span>80%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress' >
                  <h3>MongoDB<span>70%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill