import React from 'react'
import './Contact.css'
// import Navbar from '../Navbar/Navbar'
import { useEffect } from 'react';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="background" style={{ backgroundColor: "#121212", width: "100%", height: "100%" }}>
                <div className="container outer_container pt-5 pb-1 ">
                    <div className="container mb-5 contact">
                        <div className='navbackground mt-2'>
                            <div className="container ">
                                <div className="row ">
                                    <div className='backgrounddiv '>
                                        <span className="backgroundtext">contact<h1 className="contact_title text-light" id='lamp' style={{fontWeight:"900"}} >
                                            get in <span style={{color:"gold"}}>touch</span>
                                        </h1></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-light mt-3">
                            <div className="col-lg-4 col-12 text-start" >
                                <h4 className='fw-bold mb-3'>
                                    DON'T BE SHY !
                                </h4>
                                <p>
                                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>
                                <p className='address d-flex my-4' >
                                    <i class="fa-solid fa-map me-3" ></i>
                                    <div>
                                        <span>ADDRESS POINT</span>
                                        <div>Jodhpur , Rajasthan , India , 342008.</div>
                                    </div>
                                </p>
                                <p className='mail d-flex mb-4' >
                                    <i class="fa-solid fa-envelope-open me-4" ></i>
                                    <div><span>MAIL ME</span>
                                        <div>aryanthadani022@gmail.com</div></div>
                                </p>
                                <p className='call d-flex mt-3'>
                                    <i class="fa-solid fa-phone-square me-4" ></i>
                                    <div><span>CALL ME</span>
                                        <div> +91 7014089510</div></div>
                                </p>
                                <div className='row'>
                                    <a class="btn facebook " href="https://www.facebook.com/profile.php?id=100006233594859" target="_blank" role="button"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a class="btn facebook mx-3" href="https://www.linkedin.com/in/aryan-thadani-6a0895195/" target="_blank" role="button"><i class="fa-brands fa-linkedin"></i></a>
                                    <a class="btn facebook " href="https://www.instagram.com/aryan_thadani_02/" role="button" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                    <a class="btn facebook ms-3 " href="https://github.com/AryanThadani02?tab=repositories" target="_blank" role="button"><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-8  col-12 mb-4 form_col ">
                                <form  action="https://formsubmit.co/465bfdcb057973342b8ba90ef8b01471" target="_blank" method="POST"  className='form'>
                                    <div className="row">
                                        <div className="col-6 my-4" > <input type="text" className='name text-light' name='name' placeholder='YOUR NAME' required autoComplete='off' /></div>
                                        <div className="col-6 my-4"> <input type="email" className='email text-light' name='email' placeholder='YOUR EMAIL' required autoComplete='off' /></div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <input type="text" className='subject text-light ' required autoComplete='off' name='subject' placeholder='YOUR SUBJECT'/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <textarea rows="7" cols="5" className='message text-light' name='message' placeholder='YOUR MESSAGE'></textarea>
                                        </div>
                                    </div>
                                <div className='ms-1 mt-4'>
                                    <button type="submit" class="fw-bold btn send_message text-light py-2 px-4">Send Message</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact