import React from 'react'

function Button({ filled, children, small, active, light, ...props }) {
    let classes = ''



    if (!small) {
        classes += ' text-2xl text-primary '
    } else {
        classes += ' text-large  hover-font-bold text-background font-bold'
    }

    if (light) {
        // classes += ' text-text hover:text-shadow'
    } else {
        // classes += ' text-primary'
    }

    if (filled) {
        classes += ' border-1 rounded-full hover:bg-primary hover:text-text hover:border-primary'
    }

    if(active){
        classes += ' text-text'
    }

    return (
        <button className={`px-8 py-2 cursor-pointer transition duration-400 ${classes}`} {...props}>{children}</button>
    )
}

export default Button