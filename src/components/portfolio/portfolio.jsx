import React from "react";
import { Data } from './dataPortfolio';
import './portfolio.css';

const styles = {
    section: {
        minHeight: '85vh',
    },
    card: {
        width: '350px',
        height: '480px',
    },
    img: {
        maxHeight: '255px',
        fit: 'cover',
    },
    linkButton: {
        position: 'absolute',
        bottom: '20px',
    },
    githubButton: {
        position: 'absolute',
        height: '41px',
        bottom: '20px',
        right: '20px',
    }
};

const Portfolio = () => {
    return (
        <div style={styles.section}>
        <ul className="d-flex flex-wrap align-items-center justify-content-center p-0 m-5">
            {Data.map(project => (
                <div class="card bg-dark text-white Cardstyle">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div class="card-body">
                    <h5 class="card-title text-center">{project.title}</h5>
                    <p class="card-text text-center">{project.desc}</p>
                    <div>
                        <a href={project.url} class="btn btn-dark">
                            <i class="bi bi-browser-chrome "> Website</i>
                        </a>
                        <a href={project.GithubRep} class="btn btn-dark position-absolute end-0">
                            <i class="bi bi-github"> Github</i>
                        </a>
                    </div>
                </div>
              </div>
            ))}
        </ul>
    </div>
    )
}

export default Portfolio