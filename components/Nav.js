import React from "react"
import Link from "next/link"

export default function Nav() {
    const [dropdownState, dropdownStateChange] = React.useState(true)

    function changeDropdownStateFunction(state) {
        dropdownStateChange(state)
    }

    if (typeof window !== "undefined") {
        !dropdownState ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"
    }

    return (
        <>
            <nav>
                <Link href="/#home">
                    <div className="navGroup1">
                        <img src="/reybots/logo.svg" alt="reybots logo" />
                        <p>Reybots</p>
                    </div>
                </Link>
                <div className="navGroup2">
                    <Link href="/#home">
                        <div className="navElementContainer">
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href="/#competitions">
                        <div className="navElementContainer">
                            <p>Competitions</p>
                        </div>
                    </Link>
                    <Link href="/#sponsors">
                        <div className="navElementContainer">
                            <p>Sponsors</p>
                        </div>
                    </Link>
                    <Link href="/#about">
                        <div className="navElementContainer">
                            <p>About</p>
                        </div>
                    </Link>
                    <Link href="/get-started">
                        <div className="navElementContainer">
                            <p>Sponsor Us</p>
                        </div>
                    </Link>
                </div>
                <div className="navGroup2">
                    <Link href="/#contact">
                        <div className="navElementContainer">
                            <p>Contact</p>
                        </div>
                    </Link>
                </div>
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg" class={dropdownState ? "navHamburger" : "navHamburger navHamburgerOpen"} onClick={() => changeDropdownStateFunction(!dropdownState)}>
                    <rect width="27" height="4" rx="2"></rect>
                    <rect y="18" width="27" height="4" rx="2"></rect>
                    <rect x="11" y="9" width="16" height="4" rx="2"></rect>
                </svg>
            </nav>
            <div className={dropdownState ? "dropdown dropdownClosed" : "dropdown dropdownOpen"}>
                <div className="dropdownElements">
                    <Link href="/#home" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Home</p>
                    </Link>
                    <Link href="/#competition" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Competitions</p>
                    </Link>
                    <Link href="/#sponsors" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Sponsors</p>
                    </Link>
                    <Link href="/#about" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">About</p>
                    </Link>
                    <Link href="/get-started" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Sponsor Us</p>
                    </Link>
                    <Link href="/#contact" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Contact</p>
                    </Link>
                    <div className="dropdownSocials">
                        <Link href="https://www.instagram.com/reynoldsreybots/" target="_blank" rel="noreferrer">
                            <button className="socialButton">
                                <i class="fa-brands fa-instagram"></i>
                            </button>
                        </Link>
                        <button className="socialButton">
                            <i class="fa-brands fa-youtube"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
        
    )
}