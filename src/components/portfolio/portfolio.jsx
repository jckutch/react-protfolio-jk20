import React from "react";
import { Data } from './dataPortfolio';
import './portfolio.css';

const styles = {
    card: {
        width: '300px',
        height: '375px',  
    },
    img: {
        maxHeight: '140px',
        fit: 'cover',
    }
};

const Portfolio = () => {
    return (
        <div style={styles.section}>
            <div className="d-flex flex-column align-items-center text-center text-light mt-4">
                <h2>PORTFOLIO</h2>
                <h5 className="mt-2">Some of the projects that I contribuited &#128449;</h5>
            </div>
        <ul className="d-flex flex-wrap align-items-center justify-content-center p-0 m-5">
            {Data.map(project => (
                <div class="card bg-dark text-white Cardstyle" style={styles.card}>
                <img src={project.image} className="card-img-top" alt={project.title} style={styles.img} />
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