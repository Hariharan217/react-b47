import React from 'react'

function About() {


    return (
        <div className='about' >
            <section>
                <div className="abt-row">
                    <div className="abt-det ">
                        <h2 className="hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">ABOUT ME</h2>
                        <p className="hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Welcome to my
                            portfolio! I'm a dedicated and skilled Full Stack Developer with a passion for
                            creating elegant and efficient web solutions. With a keen eye for detail and a deep understanding of both
                            front-end
                            and back-end technologies, I bring ideas to life through beautifully designed, user-friendly, and
                            high-performing applications.
                        </p>
                    </div>
                </div>
                <div className="resume ">
                    <h2 id="resume" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">Here is my resume !</h2>
                    <div className="hero-button">
                        <a href="Resume.pdf" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true"
                        > <button> RESUME</button> </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About