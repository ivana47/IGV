import React from 'react'
import "./Title.css"
import Reveal from '../Reveal/Reveal'

interface TitleProps {
    subTitle: string;
    title: string;
}

const Title: React.FC<TitleProps> = ({ subTitle, title }) => {
    return (
        <Reveal className='title'>
            <p>
                {subTitle}
            </p>
            <h2>{title}</h2>
        </Reveal>
    )
}

export default Title
