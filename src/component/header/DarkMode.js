import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import imgsun from '../../assets/images/icon/sun.png'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const DarkMode = () => {
    let clickedClass = "clicked"
    const body = document.body
    const lightTheme = "is_light"
    const darkTheme = "is_dark"
    let theme

    const [is_dark, setIs_dark] = useState(false);
    if (localStorage) {
        theme = localStorage.getItem("theme")
    }
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(darkTheme)
    }
    useEffect(() => {
        if (localStorage) {
            if (localStorage.getItem('theme') === 'is_dark') {
                setIs_dark(true);
            }
        }
    }, [])

    const switchTheme = e => {
        if (is_dark) {
            setIs_dark(false);
        } else {
            setIs_dark(true);
        }

        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "is_light")
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme", "is_dark")
            theme = darkTheme
        }
    }
    return (
        <div className="mode_switcher">
            <button onClick={e => switchTheme(e)} className='justify toggle-button p0i' style={{ borderRadius: '40px' }}>
                <div className={`${is_dark ? 'toggle-icon' : 'toggle-effect'} toggle`}>
                    <BsFillSunFill />
                </div>
                <div className={`${is_dark ? 'toggle-effect' : 'toggle-icon'} toggle`}>
                    <BsFillMoonFill />
                </div>
            </button>

        </div>
    );
}

export default DarkMode;
