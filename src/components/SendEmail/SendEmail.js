import React from 'react';
import emailjs from 'emailjs-com';
import './SendEmail.css'

// import './ContactUs.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio_myself', e.target, 'user_Cx63s1sNDk1zIOi4qUTO6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="mt-5">
            <form className="no-border" onSubmit={sendEmail}>
                <h2 className="text-center" style={{color:'crimson'}}><b>Contact with me</b></h2>
                <div className="row pt-5 mx-auto">
    
                    <div className="col-md-8 form-control mx-auto no-border">
                        <input type="text" className="form-control" placeholder="Your Name" name="name" />
                    </div>
                
                    <div className="col-8 form-control  mx-auto no-border">
                        <input type="email" className="form-control" placeholder="Your Email" name="email" />
                    </div>
                    
                    <div className="col-8 form-control pt-2 mx-auto no-border">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    
                    <div className="col-8 form-control pt-2 mx-auto no-border">
                        <textarea className="form-control" cols="30" rows="8" placeholder="Your message"></textarea>
                    </div>
                    <div className="col-8 form-control pt-3 mx-auto button no-border">
                        <input type="submit" className="btn btn-success " value="Send" />
                    </div>
                </div>
            </form>

        </div>
    );
}