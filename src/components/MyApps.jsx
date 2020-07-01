import React from 'react';
import '../styles/my-apps.css';

export default class MyApps extends React.Component {
    render() {
        return (
            <ul id="my-apps">
                <li className="app-item">
                    <div className="nes-container is-rounded side-app with-title">
                        <p className="title">Botanica</p>
                        <div className="app-img-frame">
                            <img src={require("../images/app-botanica.jpg")} alt="" height="100%" />
                        </div>
                        <p className="app-info">
                            - Botanica is a MERN stack game application in which the player can register account, have multiple plants in a virtual garden, harvest fruits, write diaries, go shopping, and read the latest news<br /><br />
                            - Technologies: Javascript (ES5, ES6), HTML5, CSS3, React, Redux, React-Router-Dom, Redux-Thunk, Node.js, Express.js, MongoDB, MongoDB Atlas Cluster, Axios.js<br /><br />
                            <span>
                                <a href="https://www.youtube.com/playlist?list=PLiikGnw05G2FjOXuxFUESR3bVamKbJoaa" target="_blank" rel="noopener noreferrer">Demo Video <i className="fas fa-external-link-alt"></i></a> <a href="https://github.com/glv1at118/botanica-server" target="_blank" rel="noopener noreferrer">Source <i className="fas fa-external-link-alt"></i></a>
                            </span>
                        </p>
                    </div>
                </li>
                <li className="app-item">
                    <div className="nes-container is-rounded side-app with-title">
                        <p className="title">Blog Page</p>
                        <div className="app-img-frame">
                            <img src={require("../images/app-blog.jpg")} alt="" height="100%" />
                        </div>
                        <p className="app-info">
                            - A mobile-responsive blog page that I designed<br /><br />
                            - Technologies: Javascript (ES5, ES6), HTML5, CSS3, Vue, Vuex, Vue-Router<br /><br />
                            <span>
                                <a href="https://github.com/glv1at118/blog-project" target="_blank" rel="noopener noreferrer">Source <i className="fas fa-external-link-alt"></i></a>
                            </span>
                        </p>
                    </div>
                </li>
                <li className="app-item">
                    <div className="nes-container is-rounded side-app with-title">
                        <p className="title">Avoid The Bricks</p>
                        <div className="app-img-frame">
                            <img src={require("../images/app-dodge.jpg")} alt="" height="100%" />
                        </div>
                        <p className="app-info">
                            - Avoid the bricks is a dodge game. You control Tom to help him avoid the falling bricks and try to survive and long as possible. Difficulty adjustment and theme change are supported<br /><br />
                            - Technologies: Javascript (ES5), HTML5, CSS3, jQuery, Paint.NET<br /><br />
                            <span>
                                <a href="https://glv1at118.github.io/Proj-Avoid-the-Bricks/Avoid%20the%20Bricks.html" target="_blank" rel="noopener noreferrer">Play Here <i className="fas fa-external-link-alt"></i></a> <a href="https://github.com/glv1at118/Proj-Avoid-the-Bricks" target="_blank" rel="noopener noreferrer">Source <i className="fas fa-external-link-alt"></i></a>
                            </span>
                        </p>
                    </div>
                </li>
                <li className="app-item">
                    <div className="nes-container is-rounded side-app with-title">
                        <p className="title">Student Profile Board</p>
                        <div className="app-img-frame">
                            <img src={require("../images/app-student.jpg")} alt="" height="100%" />
                        </div>
                        <p className="app-info">
                            - Student profile board is a react application that retrieves student information from a given API and do multiple criteria searches<br /><br />
                            - Technologies: Javascript (ES5, ES6), HTML5, CSS3, React, Redux, React-Redux, Redux DevTools<br /><br />
                            <span>
                                <a href="https://glv1at118.github.io/student-profile-board/" target="_blank" rel="noopener noreferrer">Demo <i className="fas fa-external-link-alt"></i></a> <a href="https://github.com/glv1at118/student-profile-board" target="_blank" rel="noopener noreferrer">Source <i className="fas fa-external-link-alt"></i></a>
                            </span>
                        </p>
                    </div>
                </li>
                <li className="app-item">
                    <div className="nes-container is-rounded side-app with-title">
                        <p className="title">Work Orders Board</p>
                        <div className="app-img-frame">
                            <img src={require("../images/app-work.jpg")} alt="" height="100%" />
                        </div>
                        <p className="app-info">
                            - Work orders board is a react application that retrieves workers information from a given API and do search and sort<br /><br />
                            - Technologies: Javascript (ES5, ES6), HTML5, CSS3, React, Redux, React-Redux, Redux DevTools<br /><br />
                            <span>
                                <a href="https://glv1at118.github.io/work-orders-board/" target="_blank" rel="noopener noreferrer">Demo <i className="fas fa-external-link-alt"></i></a> <a href="https://github.com/glv1at118/work-orders-board" target="_blank" rel="noopener noreferrer">Source <i className="fas fa-external-link-alt"></i></a>
                            </span>
                        </p>
                    </div>
                </li>
            </ul>
        );
    }
}