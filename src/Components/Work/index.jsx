import React, {Component} from "react";
import axios from 'axios'
import {WorkSection, WorkTitle, Span, WorkPart, Icon, PartTitle, Line, PartDesc} from './style'

class Work extends Component {

    state = {
        works : []
    }

    componentDidMount () {
        axios.get('../../../public/js/data.json').then( res => this.setState({ works : res.data.works }) )
    }

    render () {

        const {works} = this.state
        const worksList = works.map( workItem => {
            return (
                <WorkPart num={workItem.id} key={workItem.id}>
                        <Icon className={workItem.icon_name}></Icon>
                        <PartTitle>{workItem.title}</PartTitle>
                        <Line />
                        <PartDesc>
                            {workItem.body}
                        </PartDesc>
                    </WorkPart>
            )
        })
        return (
            <WorkSection>
                <div className="container work">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worksList}                   
                </div>
            </WorkSection>
        )
    }
}

export default Work