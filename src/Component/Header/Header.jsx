import React, { Component } from 'react';

import logo from '../../Resources/logo.svg';


class Header extends Component {

    render() {
        return (
            
            <header>

                <div className="App-header"> 
                    <span title="Click me For more Information" classname="btn-btn-primary" 
                    data-toggle="modal" data-target="#exampleModalLong">
                        <img src={logo} className="App-logo" alt="logo" />
                    </span>

                </div>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" 
                                                                    aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Information</h5>
                        </div>
                        <div className="modal-body">
                            <div className="jumbotron">
                                <p className="lead">
                                    Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                                </p>
                                <hr className="my-4" />
                                <p>
                                 Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
                                </p>
                                <hr className="my-4" />
                                <p>
                                    The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 
                                </p>
                                <hr className="my-4" />
                                <p>
                                    The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
                                </p>
                                <hr className="my-4" />
                                <p>
                                  At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.
                                </p>
                                <hr className="my-4" />
                                <p>
                                    <h6>Stay informed:</h6>
                                        <ul>
                                            <li>
                                           <a alt="Link" target="_blank" rel="noopener noreferrer" 
                                           href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">
                                               Protect yourself: advice for the public</a>
                                               </li>
                                               <li>
                                            <a alt="Link" target="_blank" rel="noopener noreferrer" 
                                            href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">
                                                Myth busters</a> 
                                              </li>
                                              <li>
                                            <a alt="Link" target="_blank" rel="noopener noreferrer" 
                                            href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">
                                                Questions and answers</a>
                                            </li>
                                            <li>
                                            <a alt="Link"target="_blank" rel="noopener noreferrer"
                                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">
                                                Situation reports</a>
                                                </li>
                                                <li>
                                            <a alt="Link" target="_blank" rel="noopener noreferrer" 
                                            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                                                All information on the COVID-19 outbreak</a>
                                            </li>
                                        </ul>
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>

            </header>
        );
    }
}



export default Header;