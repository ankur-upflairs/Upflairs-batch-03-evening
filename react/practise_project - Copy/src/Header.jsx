import React from 'react'

function Header() {
    return (
        <div id="page">
            <header id="header">
                <div id="header-inner">
                    <div id="logo">
                        <h1><a href="#">Cool<span>Logo</span></a></h1>
                    </div>
                    <div id="top-nav">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                    <div className="clr"></div>
                </div>
            </header>
            <div className="feature">
                <div className="feature-inner">
                    <h1>Heading</h1>
                </div>
            </div>
        </div>
        )
}

export default Header
