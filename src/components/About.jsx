import React from "react";
import MainFunction from "./MainFunction";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/About.css'


// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_about_page

function About() {
    return (

        <div className="about">
            <div class="container">
                <div class="row align-items-center my-8">
                    <div class="col-lg-15">
                        <br></br>
                        <center>
                            <img src="..\pic\rahber.jpeg" alt="Rahber's photo"></img>
                            <h3><b>Rahber Thariani</b></h3>
                            <p><u>Founder</u></p>
                        
                            Rahber is the founder of 
                            <a href = "https://terrawarm.com/"> TERRAWARM </a>
                            - a company focused on the natural wellness of the Earth. Some of their featured collection include warming slippers for relaxation and improved circulation. Rahber sought to oversee the instruction of a Realtime AI Voice Coach among the growing market of the virtual professional working environment.
                            <br></br>
                        </center>

                        <br></br>
                        <hr></hr>
                        <br></br><br></br>

                        <h2><u>Development Team</u></h2>
                        <br></br>
                        <div className="teamInfoContainer">
                            <div className="row">
                                <div className="card">
                                    <div class="card-horizontal">
                                        <div class="img-square-wrapper">
                                            <img class="AndrewPic" src="pic/andrewPic2.png" alt="Andrew"></img>
                                        </div>
                                        <div class="card-body">
                                            <br></br>   
                                            <h4>Andrew Roach</h4>
                                            <p className="title">Project Manager</p>
                                            <p>Andrew will be working as a Software Developer at Amazon following graduation. 
                                                He chose SeattleU because of its Army ROTC program and will commissioning as a Cyber Officer 
                                                in the US Army Reserves upon receiving his Bachelor's degree. Andrew is incredibly thankful for the 
                                                diverse opportunities afforded to him with the Jesuit education at Seattle University and looks forward to 
                                                contributing his diverse viewpoint with others in the software industry.</p>
                                            <p>Email: roacha1@seattleu.edu</p>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="card">
                                    <div class="card-horizontal">
                                        <div class="img-square-wrapper">
                                            <img class="EvelynPic" src="pic/evelynIMG.png" alt="Yinhui"></img>
                                        </div>
                                        <div class="card-body">
                                            <br></br>
                                            <h4>Yinhui Li</h4>
                                            <p className="title">Software Developer</p>
                                            <p>Yinhui is a senior student and major in Computer Science at Seattle University. 
                                                She chose Seattle University because of the high-quality education and many international 
                                                students like what she is. She enjoys the diverse environment and knows many people from different places 
                                                in the world. She will find a job after graduation from Seattle University in Summer.</p>
                                            <p>Email: yli3@seattleu.edu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="card">
                                    <div class="card-horizontal">
                                        <div class="img-square-wrapper">
                                            <img class="BenPic" src="pic/benPic.jpg" alt="Ben"></img>
                                        </div>
                                        <div class="card-body">
                                            <br></br>
                                            <h4>Benjamin Agrelius</h4>
                                            <p className="title">Software Developer</p>
                                            <p>Benjamin Agrelius is a senior who plans on entering the aerospace engineering field 
                                            as a software developer after graduation. He chose SeattleU because of the close interactions 
                                            with other students and professors in the CS program and has thoroughly enjoyed grinding away at 
                                            coding projects of the last 4 years. </p>
                                            
                                            <p>Email: agrelius@seattleu.edu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="card">
                                    <div class="card-horizontal">
                                        <div class="img-square-wrapper">
                                            <img class="MyPic" src="..\pic\MyPic2.jpg" alt="My"></img>
                                        </div>
                                        <div class="card-body">
                                            <br></br>
                                            <h4>My Tran</h4>
                                            <p className="title">Software Developer</p>
                                            <p>My is a CS senior major at Seattle University. She wants to work 
                                            in innovative projects involving Machine Learning engineering skills. 
                                            That is also one of the reasons why she chose Seattle U, where she can explore her 
                                            options of interests and join in many coding projects. My is grateful for the diverse friends, 
                                            class options that broadens her mind and knowledge.</p>
                                                
                                            <p>Email: mtran@seattleu.edu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> 
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;