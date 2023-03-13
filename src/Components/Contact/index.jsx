import React from "react";
import Footer from "../Footer";
import {ContactSection, ContactTitle, Span, Form, Input, FormInput, InputText, InputEmail, InputSub, TextArea, InputSubmit} from './style'

const Contact = () => {

    return (
        <React.Fragment>
            <ContactSection>
            <div className="container contact">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputSub type="text" className="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
            </ContactSection>
            <Footer />
        </React.Fragment>
    )
}

export default Contact