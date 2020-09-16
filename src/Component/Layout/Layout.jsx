import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Layout extends Component {
    render() {
        const { render: rend } = this.props;
        return (
            <div>
                <Header />
                <div className="">
                    { rend() }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;