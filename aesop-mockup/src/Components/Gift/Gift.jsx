import React from 'react'
import './Gift.css'

export default function Gift() {
    return (
        <div className='container'>
            <div className="leftSide">
                <div className="leftSide_text">
                    <p>Five mythical Gift Kits</p>
                    <p>Crafted for gods, mortals, and muses alike, our new Gift Kit <br/> collection makes for inspired gift giving this festive season.</p>
                    <button>Explore seasonal Gift Kits</button>
                </div>
            </div>
            <div className="rightSide">
                <div className="rightSide_image"></div>
            </div>
        </div>
    )
}