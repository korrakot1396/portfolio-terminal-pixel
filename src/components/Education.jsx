import React from 'react';
import '../styles/education.css';

export default class Education extends React.Component {
    render() {
        return (
            <ul id="my-edu">
                <li className="school-item">
                    <div className="nes-container is-rounded education">
                        <div className="school-img-frame">
                            <img src={require("../images/uoft.png")} alt="" height="100%" />
                        </div>
                        <p className="school-info">
                            - University of Kasetsart (Bangkhen Campus)<br />
                            - Duration: 2017 - 2021<br />
                            - ฺBachelor's Degree of Computer Science (CS)<br />
                        </p>
                    </div>
                </li>
                {/* <li className="school-item">
                    <div className="nes-container is-rounded education">
                        <div className="school-img-frame">
                            <img src={require("../images/jilin.png")} alt="" height="100%" />
                        </div>
                        <p className="school-info">
                            - Jilin University, China<br />
                            - Duration: 2010 - 2014<br />
                            - Bachelor's Degree of Engineering (ME)<br />
                            - Some Courses: Mechanical Design, Machine Theory, Computer Fundamentals, Computer Network Technology, C Programming Language<br />
                        </p>
                    </div>
                </li> */}
            </ul>
        );
    }
}