import React from "react";
import {HomeSection, HomeInfo, HomeTitle, HomeInformation, HomeDesc, HomeBtn} from './style'

const Home = () => {

    return (
        <HomeSection>
            <div className="container home">
                <HomeInfo>
                    <HomeTitle>Ali Soliman</HomeTitle>
                    <HomeInformation>Creative Director</HomeInformation>
                    <HomeDesc>
                        Iam a professional <span style={{color: '#000'}}>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInfo>
            </div>
        </HomeSection>
    )
}

export default Home