import React from "react";

function Contact() {
    return (
        <div className="contact">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <h1>Contact us</h1>
                        <hr></hr>
                            <p>Please leave your information below</p>
                            <br></br>
                    </div>
                    <div class="col-lg-5">
                        <form action="/action_page.php">
                            <label htmlFor="name">Name:</label><br></br>
                            <input type="text" id="name" name="name" value=""></input><br></br><br></br>
                            <label htmlFor="email">Email:</label><br></br>
                            <input type="text" id="email" name="email" value=""></input><br></br><br></br>
                            <p>Description:</p>
                            <textarea name="message" rows="10" cols="50"></textarea><br></br><br></br>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;