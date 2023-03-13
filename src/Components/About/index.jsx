import React from "react";
import {AboutSection, AboutInfo, AboutTitle, Span, AboutDir, AboutDesc, Anchor} from'./style'

const About = () => {

    return (
        <AboutSection>
            <div className="container about">
                <AboutInfo>
                    <AboutTitle><Span>This is</Span> Me</AboutTitle>
                    <AboutDir>Creative Director</AboutDir>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                    <AboutDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </AboutDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About