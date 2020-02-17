import React, {useContext} from 'react'
import {ThemeContext} from './ThemeProvider'

const NewComponent = () => {
    const state = useContext(ThemeContext)
    console.log(state)

    return (
        <div>
            <h1>awefawfe</h1>
        </div>
    )
}

export default NewComponent