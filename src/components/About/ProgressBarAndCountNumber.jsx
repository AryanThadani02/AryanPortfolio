import React, { useEffect, useState } from 'react';
import './About.css';

function ProgressBarAndCountNumber() {
    const [count, setCount] = useState(0);
    const MAX = 80;

    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress');

        const run = setInterval(() => {
            setCount((prevCount) => prevCount + 1);

            progressBars.forEach((progressBar) => {
                const targetValue = parseInt(progressBar.dataset.progress, 10);

                if (count <= targetValue) {
                    const gradient = `conic-gradient(#ffb400 ${count}%, #212428 0)`;
                    progressBar.parentElement.style.background = gradient;
                    progressBar.firstElementChild.textContent = `${count}%`;
                }

                if (count >= MAX) {
                    clearInterval(run);
                }
            });
        }, 20);

        return () => clearInterval(run);

    }, [count]);

    return (
        <div className="container mt-5">
            <div className="row">
                <h3 className='mb-5 head fw-bold'>MY <span style={{ color: "gold" }} > SKILLS</span></h3>
            </div>
            <div className="row "> 
                <div className="col-12 col-sm-4 ">
                    <div className="parent-skill">
                        <div className="skill">
                            <div className="progress" data-progress="70">
                                <span className="progress-number">70%</span>
                            </div>
                        </div>
                        <div className="row my-3 justify-content-center">
                            <div className="col-6 col-sm-10">
                                <span className="title1 t_topic" style={{ color: "white" }}>HTML</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4">
                    <div className="parent-skill">
                        <div className="skill">
                            <div className="progress" data-progress="60">
                                <span className="progress-number">{count}%</span>
                            </div>
                        </div>
                        <div className="row my-3 justify-content-center">
                            <div className="col-6">
                                <span className="title1 t_topic" style={{ color: "white" }}>CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="parent-skill">
                        <div className="skill">
                            <div className="progress" data-progress="50">
                                <span className="progress-number">{count}%</span>
                            </div>
                        </div>
                        <div className="row my-3 justify-content-center">
                            <div className="col-6">
                                <span className="title1" style={{ color: "white" }}>JavaScript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-12 col-sm-4">
                    <div className="parent-skill">
                        <div className="skill">
                            <div className="progress" data-progress="25">
                                <span className="progress-number">25%</span>
                            </div>
                        </div>
                        <div className="row my-3 justify-content-center">
                            <div className="col-6">
                                <span className="title1 t_topic" style={{ color: "white" }}>ReactJS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-4">
                    <div className="parent-skill">
                        <div className="skill">
                            <div className="progress" data-progress="50">
                                <span className="progress-number">{count}%</span>
                            </div>
                        </div>
                        <div className="row my-3 justify-content-center">
                            <div className="col-6">
                                <span className="title1 t_topic" style={{ color: "white" }}>Version&nbsp;Control</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="parent-skill">
                        <div className="skill">
                            <div className="progress" data-progress="50">
                                <span className="progress-number">{count}%</span>
                            </div>
                        </div>
                        <div className="row my-3 justify-content-center">
                            <div className="col-6">
                                <span className="title1 t_topic" style={{ color: "white" }}>BootStrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBarAndCountNumber;