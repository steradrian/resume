import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

function Contact() {

    const [succesMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();
    
    const serviceID = "service_id_AdrianSter";
    const templateID = "template_id_AdrianSter";
    const userID = "user_n8EHIyIwjUyYilKOfkIqt";

     const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }




    const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Message sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact me</h1>
                <p> Plase fill out the the contact form below or use my contact info</p>
                <span className="succes-message">{succesMessage}</span>
            </div>
            
            <div class="container">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">
                        <div className="col-md-6 col-xs-12">

                            <div className="text-center">
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    type="text"
                                    id="name"
                                    ref={
                                        register({
                                            required: "Please enter your name",
                                            maxLength: {
                                                value: 30,
                                                message: "Please enter a name with fewer than 30 characters"
                                            }
                                        })
                                     }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.name && errors.name.message}</span>

                            <div className="text-center">                            
                                <input
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    type="text"
                                    id="phone"
                                    ref={
                                        register({
                                            required: "Please enter a phone number"
                                        })
                                     }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.phone && errors.phone.message}</span>


                            <div className="text-center">
                                <input
                                    className="form-control"
                                    placeholder="E-mail"
                                    name="email"
                                    type="email"
                                    id="email"
                                    ref={
                                        register({
                                            required: "Please enter your e-mail",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid Email"
                                            }
                                        })
                                    }
                                     
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.email && errors.email.message}</span>

                            <div className="text-center">
                                <input
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    type="text"
                                    id="subject"
                                    ref={
                                        register({
                                            required: "Oops, you forgot to add a subject...",
                                        })
                                     }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.subject && errors.subject.message}</span>


                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">

                                <textarea
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    placeholder="Please enter your message here..."
                                    name="message"
                                    ref={
                                        register({
                                            required: "Please enter your message",                                           
                                        })
                                    }
                                    >

                                </textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.message && errors.message.message}</span>

                            <button className="btw-main-offer contact-btn" type="submit">Contact me</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
