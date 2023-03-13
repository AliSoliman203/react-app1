import React, { useEffect, useState } from "react";
import axios from 'axios'
import {SocialMediaSection, Social, Icon, SocialPara, Span} from './style'

const SocialMedia = () => {

    const [social, setSocial] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then( res => setSocial(res.data.social) )
    }, [])

    const SocialList = social.map( item => {
        return (
            <Social key={item.id} val={item.value}>
                <Icon className={item.icon}></Icon>
                <SocialPara>
                    <Span>{item.title}</Span>
                    <Span info2>{item.body}</Span>
                </SocialPara>
            </Social>
        )
    })

    return (
        <SocialMediaSection>
            {SocialList}
        </SocialMediaSection>
    )
}

export default SocialMedia