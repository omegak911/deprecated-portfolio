import React, { Component } from 'react';

import './Applications.css';

const redidit = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI';
const rhymeDoctor = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI';
const trackYoScore = 'https://thumbs.dreamstime.com/b/super-cool-potato-character-cartoon-style-vector-illustration-95541644.jpg';
const portfolio = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=k9tS0%2FpGWit6YI7LG%2FsrdzsNO08%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfs_eKLel8UAVLnhXjQAzfO61STXhE460eIjre9V2iJHjd5P5agYUbhl4lWdI';

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: [
        {
          code: 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile',
          description: 'Rhyme visualization tool',
          image: rhymeDoctor,
          title: 'Rhyme Doctor',
          url: 'https://rhymedoctor.fun/',
          android: 'https://play.google.com/store/apps/details?id=com.notoriousnpm.rhymedoctor',
          androidCode: 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile'
        },
        {
          code: 'https://github.com/aask4/redidit',
          description: 'Clone of Reddit',
          image: redidit,
          title: 'Redidit',
          url: 'https://aask4-redidit.herokuapp.com',
        },
        {
          code: 'https://github.com/omegak911/omegak911.github.io/tree/portfolio',
          description: 'Personal Portfolio',
          image: portfolio,
          title: 'Portfolio',
          url: 'https://omegak911.github.io/',
        }
        // {
        //   title: 'TrackYoScore',
        //   image: trackYoScore,
        //   description: 'Game score tracking system',
        // },
      ],
      showModal: false,
    }
  }

  triggerModal = (index) => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { applications, showModal } = this.state;

    return (
      <div id="applications" className="topContainer">
        <div className="midAppContainer">
          <div>
            <h2>Deployed Applications</h2>
            <div className="allAppContainer">
              {applications.map((app, index) =>
                <div key={index} className="appContainer">
                  <div 
                    className="innerAppContainer" 
                    onMouseEnter={() => this.triggerModal(index)} 
                    onMouseLeave={() => this.triggerModal(index)}
                    >
                    {showModal && 
                      <div className="modal">
                        <div className="modalInfo">
                          <div><h4>{app.title}</h4></div>
                          <div><a href={app.url}>Website</a></div>
                          <div><a href={app.code}>Codebase</a></div>
                          {app.android &&
                            <div>
                              <br/>
                              <div><a href={app.android}>Android Link</a></div>
                              <div><a href={app.androidCode}>Android Codebase</a></div>
                            </div>
                          }
                        </div>
                      </div>
                    }
                    <img src={app.image} alt="app preview"/>
                    {/* <div>{app.title}</div>
                    <div>{app.description}</div> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Applications;