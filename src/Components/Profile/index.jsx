import React, { useEffect, useState } from "react";
import axios from 'axios'
import {ProfileSkillsSection, MyProfile, Title, TitleSpan, ProfileList, ProfileItem, Span,
        Skills, SkillsDesc, Bar, BarTitle, BarPercent, BarParent, BarParentSpan} from './style'

const Profile = () => {

    const [skills, setSkills] = useState([])
    const [profileInfo, setProfileInfo] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then( res => setSkills(res.data.skills) )
        axios.get('js/data.json').then( res => setProfileInfo(res.data.profile) )
    }, [])

    const ProfileInfoList = profileInfo.map ( item => {
        return (
            <ProfileItem key={item.id}>
                <Span>{item.title}</Span>
                {item.id == 6 ? <Span web >{item.value}</Span> : item.value }
            </ProfileItem>
        )
    })

    const skillsList = skills.map( skillItem => {
        return (
            <Bar key={skillItem.id}>
                <BarTitle>{skillItem.title}</BarTitle>
                <BarPercent>{skillItem.percent}</BarPercent>
                <BarParent>
                    <BarParentSpan sp={skillItem.id}></BarParentSpan>
                </BarParent>
            </Bar>
        )
    })

    return (
        <ProfileSkillsSection>
            <div className="container profile-skills">
                <MyProfile>
                    <Title><TitleSpan>My </TitleSpan>Profile</Title>
                    <ProfileList>

                        {ProfileInfoList}

                    </ProfileList>
                </MyProfile>
                
                <Skills>
                    <Title>Some <TitleSpan>skills</TitleSpan></Title>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {skillsList}

                </Skills>
                
            </div>
        </ProfileSkillsSection>
    )
}

export default Profile