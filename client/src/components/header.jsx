import React from 'react';
import '../styles/header-styles.css'
import showlogin from './signin'

export default function Header() {
    return (
        <>
            <header>
                <a href="/src/index.html" className="logo">UAE LANDMARKS</a>
                <div className="page-options">
                    <a href="/BUY">BUY</a>
                    <a href="/SELL">SELL</a>
                    <a href="/RENT">RENT</a>
                    <a href="/INVEST">INVEST</a>
                </div>
                <form className="input_form" action="/search" method="post">
                    <input type="text" name="search_term" placeholder="search" />
                    <button type="submit">search</button>
                </form>
                <a href="/SIGNUP">
                    <button>SignUp</button>
                </a>
                <a>
                    <button onClick={showlogin}>SignIn</button>
                </a>
            </header>

        </>
    )
}