import React from 'react';
import './About.css';
import ProgressBarAndCountNumber from './ProgressBarAndCountNumber';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="about">
                <div className="background" style={{ backgroundColor: "#121212", width: "100%", height: "100%" }}>
                    <div className="container outer_container pt-5 pb-1 " >
                        {/* <div className="portfolio"> */}
                            <div className='navbackground mt-2'>
                                <div className="container ">
                                    <div className="row ">
                                        <div className='backgrounddiv '>
                                            <span className="backgroundtext">resume<h1 className="about_title">
                                                about <span>me</span>
                                            </h1></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="About mt-5 pt-5">
                                <div className="container-fluid">
                                    <div className="row block_1 separator">
                                        <div className="col-8 col-sm-12 mb-3">
                                            <span className='fw-bold head' >PERSONAL <span className='head' style={{ color: "gold" }} >INFOS</span></span>
                                        </div>
                                        <div className="col-8 my-2">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 mb-3 flexClass">
                                                    <span className='left '>First Name:</span>
                                                    <span className='right'> Aryan</span>
                                                </div>
                                                <div className="col-md-6 col-sm-12 flexClass">
                                                    <span className='left'>Last Name:</span>
                                                    <span className='right'> Thadani</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 my-2">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 mb-3 flexClass">
                                                    <span className='left'>Age:</span>
                                                    <span className='right'> 21 Years</span>
                                                </div>
                                                <div className="col-md-6 col-sm-12 flexClass">
                                                    <span className='left'>Nationality:</span>
                                                    <span className='right'> Indian</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 my-2">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 mb-3 flexClass">
                                                    <span className='left'>Freelance:</span>
                                                    <span className='right' style={{ color: "green" }}> Available</span>
                                                </div>
                                                <div className="col-md-6 col-sm-12 flexClass">
                                                    <span className='left'>Address:</span>
                                                    <span className='right'> Jodhpur, Rajasthan</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8 my-2">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12 mb-3 flexClass">
                                                    <span className='left'>Phone:</span>
                                                    <span className='right'> +91 7014089510</span>
                                                </div>
                                                <div className="col-md-6 col-sm-12 flexClass">
                                                    <span className='left'>Email:</span>
                                                    <span className='right'> aryanthadani022@gmail.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ProgressBarAndCountNumber/>
                                    <div className="row my-5 my-sm-2 mb-5 pt-5">
                                        <div className="row ">
                                            <div className="col-12">
                                                <h3 className='head fw-bold mb-5'>Experience and<span style={{ color: "gold" }} > Education</span></h3>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-md-12 col-lg-6 ">
                                                <ul style={{ listStyle: "none" }}>
                                                    <li>
                                                        <span className='time mt-4'>2023 - Present</span>
                                                        <h5>Full Stack Web Development Course - <span className='fs-5 fw-light fst-italic'>Geekster</span></h5>
                                                        
                                                    </li>
                                                    <li>
                                                        <span className='time mt-4'>2023</span>
                                                        <h5>Web Development Internship - <span className='fs-5 fw-light fst-italic'>Open Innovations Lab</span></h5>
                                                        
                                                    </li>
                                                    <li>
                                                        <span className='time mt-4'>2023</span>
                                                        <h5>JavaScript & ReactJs Training - <span className='fs-5 fw-light fst-italic'>Open Innovations Lab</span></h5>
                                                        
                                                    </li>
                                                    <li>
                                                        <span className='time mt-4'>2020-2023</span>
                                                        <h5>Bachelor of Computer Application - <span className='fs-5 fw-light fst-italic'>Lachoo Memorial College</span></h5>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-6">
                                                <ul style={{ listStyle: "none" }}>
                                                <li>
                                                        <span className='time mt-4'>2021-2023</span>
                                                        <h5>Home Tutor - <span className='fs-5 fw-light fst-italic'>Personal</span></h5>
                                                        
                                                    </li>
                                                <li>
                                                        <span className='time mt-4'>2022</span>
                                                        <h5>Beginner Front-End Development Course - <span className='fs-5 fw-light fst-italic'>T4 Tech</span></h5>
                                                        
                                                    </li>
                                                <li>
                                                        <span className='time mt-4'>2020</span>
                                                        <h5>Higher Secondary School - <span className='fw-light fst-italic' style={{fontSize:'1.213rem'}}>Our Lady Of Pillar Convent School (CBSE)</span></h5>
                                                        
                                                    </li>
                                                <li>
                                                        <span className='time mt-4'>2018</span>
                                                        <h5>Secondary School - <span className='fs-5 fw-light fst-italic'>Our Lady Of Pillar Convent School (CBSE)</span></h5>
                                                        
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;