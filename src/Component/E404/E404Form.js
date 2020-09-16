import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import Error404Best from '../../Resources/404/e404best.gif'

class E404Form extends Component{
      

  componentDidMount(){
    document.title = '404';
  }

  render(){
    return(

        <div>
            <section className="justify-content-center mt-5">
            
                    <div className="row-2 justify-content-center">
                        <div className="col-lg-12">
                            <div className="title-heading">
                                <h1 className="page-title text-shadow-title text-center">404 Page</h1>
                            </div>
                        </div>
                    </div>
                    {/* <!--end row--> */}
            
                {/* <!--end container--> */}
            </section>
            {/* <!--end section--> */}
            {/* <!-- End Hero --> */}

            {/* <!-- Start --> */}
            <section className="section">
            
                    <div className="row-2 justify-content-center mb-4">
                        <div className="col-lg-9">
                            <div className="section-title text-center">
                        <div className="">
                            <img src={Error404Best} className="img-fluid d-block mx-auto mb-4" alt="" />
                        </div>
                                <h4 className=" mb-4">
                                    THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.
                                </h4>
                                <p className="para-desc mx-auto text-muted">
                                    YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.
                                </p>

                                <p className="para-desc mx-auto text-muted mb-0">
                                    OR YOU NEED TO VISIT A DOCTOR.
                                    </p>
                            </div>
                        </div>
                        {/* <!--end col--> */}

                        {/* Button to home  */}

                        <div className="col-md-12">
                                        
                            <button 
                                className="Btn_button_name btn btn-primary btn-block font-weight-bold">
                                    <Link to="/">Back to Home</Link>
                            </button>
                        
                        </div>

                        {/* End Button to home  */}

                    </div>
                    {/* <!--end row--> */}
            
                {/* <!--end container--> */}
            </section>
         
        </div>

    )
  }
}

export default E404Form;