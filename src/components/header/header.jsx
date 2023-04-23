import React from "react";
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://github.com/aletsmc07/React-Portfolio">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_IPN.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />My Portfolio
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link" href="#about">
                            <i class="bi bi-house"></i> About
                            </a>
                            <a class="nav-link" href="#portfolio">
                                <i class="bi bi-file-earmark-code"></i>Portfolio
                            </a>
                            <a class="nav-link" href="#contact">
                                <i class="bi bi-envelope"></i>Contact
                            </a>
                            <a class="nav-link" href="#resume">
                                <i class="bi bi-file-person"></i>Resume
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header