import React from "react";
import './about.css';
import picture from '../../Assets/images/about images/img1.jpg';
import profileImg from '../../Assets/images/about images/personalimg.jpeg';

const About = () => {
    const styles = {
        picture: {
            borderRadius: '50%',
            height: '8rem'
        },
        profileImg: {
            borderRadius: '20%',
            height: '20rem'
        }
      };

    return (
        <div className="d-flex justify-content-around">
          <div className="text-light col-md-6 py-5">
            <div className="d-flex justify-content-center">
                <img className="picture" src={picture} alt="Developer" style={styles.picture}/>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="px-3">&#128074; ABOUT ME &#128075;</h1>
                <h3>Welcome</h3>
            </div>
              <br/>
              <p className="text-center">
              Hello dear reader, my name is John Kutch, I am living in the Tampa Bay Florida area.
              Bachelor's Degree in International Affairs and Economics, I currently am learning Full-Stack Web Development at the Univesity of Central Florida.
              I consider myself to be proficient, organized,creative and a problem-solver. My strengths are leadership, multi-tasking and critical thinker.
              </p>
              <br />
              <p className="text-center">
              Experienced in: Javascript, NodeJS, ExpressJS, React, HTML & CSS, GitHub, OOP, ORM, Sequelize +
              MySQL, MongoDB, Responsive Web Design.
              </p>
          </div>
          <div className="col-md-4 p-5">
            <img className="profileImg" src={profileImg} alt="Developer" style={styles.profileImg}/>
          </div>
        </div>
    )
}

export default About