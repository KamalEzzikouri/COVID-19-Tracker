import React, { Component } from 'react';


class Footer extends Component {

    render() {

        return (
            
            <div>
               {/* <!-- Start --> */}
                <footer className="bg-light py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center">
                                    <p className="mb-0">© 2020 Covid-19 Tracker.
                                    Design with  <span aria-hidden="true" role="img">💕</span>
                                      <span></span> <i className="mdi mdi-heart text-danger"></i>
                                        <i className="mdi mdi-heart text-danger">
                                        </i> by 
                                        <a href="https://kamalezzikouri.herokuapp.com/" 
                                        alt="Kamal Ezzikouri" target="_blank" rel="noopener noreferrer" 
                                         className="text-reset kamalezzikouri"> Kamal Ezzikouri</a>.
                                    </p>
                                </div>
                            </div>
                            {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                    </div>
                    {/* <!--end container--> */}
                </footer>
            {/* <!--end footer--> */}
            {/* <!-- End --> */}
            {/* <!-- Back to top --> */}
     
            </div>

        );
    }
}



export default Footer;