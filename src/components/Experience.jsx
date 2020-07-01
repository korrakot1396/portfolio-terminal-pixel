import React from 'react';
import '../styles/experience.css';

export default class Experience extends React.Component {
    render() {
        return (
            <ul id="my-exp">
                {/* <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">Programmer Collaborator At Torneo.ca</p>
                        <p className="exp-info">
                            - Duration: May 2019 - September 2019<br />
                            - I worked for Torneo as a front end developer/designer intern, helped Torneo build mobile-responsive blog and sign-in/up pages<br />
                            - Technologies: Javascript (ES5/ES6), HTML5, CSS3, Vue, Vuex, Vue-Router,Quill.js<br />
                            - Link: <a href="https://www.torneo.ca/info/company" target="_blank" rel="noopener noreferrer">visit company</a>
                        </p>
                    </div>
                </li> */}
                <li className="exp-item">
                    <div className="nes-container is-rounded experience with-title">
                        <p className="title">"Work"</p>
                        <p className="exp-info">
                            - I'm currently studying<br />
                            {/* - Duration: July 2014 - May 2016<br /> */}
                            {/* - I worked for Ford Motor Company (China) as an engine program engineer. Worked with cross-functional teams to deliver project timing plans, DV bill of materials, localization parts list, change management, supplier sourcing and RPQs. I hosted weekly team meetings and participated in test trouble shootings<br />
                            - Skillsets: Engine design and stucture, CAD, project management, team communication, MS Powerpoint, Excel, Sharepoint<br /> */}
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}