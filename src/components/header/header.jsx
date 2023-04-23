import React from "react";
import './header.css'

const Header = ({currentPage, handlePage}) => {
    return (
        <header className="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#About" onClick={() => handlePage('About')}>
                    <h4>John Kutch</h4>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a className= {currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#About" onClick={() => handlePage('About')}>
                                <i class="bi bi-house navlink"></i> About
                            </a>
                            <a className= {currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#Portfolio" onClick={() => handlePage('Portfolio')}>
                                <i class="bi bi-file-earmark-code navlink"></i>Portfolio
                            </a>
                            <a className= {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={ () => handlePage('Contact')}>
                                <i class="bi bi-envelope navlink"></i>Contact
                            </a>
                            <a className= {currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume" onClick={ () => handlePage('Resume')}>
                                <i class="bi bi-file-person navlink"></i>Resume
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header