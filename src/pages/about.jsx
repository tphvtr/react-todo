import React from 'react';
import { Helmet } from 'react-helmet';

class About extends React.Component {
  title = 'About';
  render() {
    return (
        <>
            <Helmet>
                <title>{ this.title }</title>
            </Helmet>
        about-page works!
        </>
    )
  }
};

export default About;