import React, {useContext} from 'react'
import {ThemeContext} from './ThemeProvider'
import './NewComponent.scss'

const NewComponent = () => {
    const state = useContext(ThemeContext)
    console.log(state)

    return (
        <>
        <div className="three-col-grid">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
        </div>
        <div className="three-col-grid">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
        </div>
        <div className="three-col-grid">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
        </div>
        <div className="three-col-grid">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
        </div>
        <div className="three-col-grid">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
        </div>
        <div className="three-col-grid">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
        </div>
        </>
    )
}

export default NewComponent