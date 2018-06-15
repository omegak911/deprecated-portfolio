import React, { Component } from 'react';

import './Blog.css';

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="blog" className="topContainer">
        <h2>Blog</h2>
        <div>About Me</div>
        <div>Insert blogs with css different than Projects.  Maybe grid-areas inside a overscroll container with a max-height</div>
        
      </div>
    )
  }
}

export default About;