import React from 'react'


function Home() {
  return (
    <div>

      <section className='home' >
        <div className='home-content' >
          <h1>Hi, I'm Hariharan</h1>
          <h3>Full stack developer</h3>
          <p>Welcome to my
                            portfolio! I'm a dedicated and skilled Full Stack Developer with a passion for
                            creating elegant and efficient web solutions. With a keen eye for detail and a deep understanding of both
                            front-end
                            and back-end technologies, I bring ideas to life through beautifully designed, user-friendly, and
                            high-performing applications.</p>

          <div className='btn-box' >
            <a href='#'>Hire me</a>
            <a href='#'>let's talk</a>
          </div>
        </div>
        <div className='home-sci' >
          <a href='#' ><i class='bx bxl-github'></i></a>
          <a href='#' ><i class='bx bxl-linkedin'></i></a>
          <a href='#' ><i class='bx bxl-whatsapp' ></i></a>
         
        </div>




        {/* <span className='home-imgHover'></span> */}

      </section>
    </div>
  )
}

export default Home