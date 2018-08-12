import React, { Component } from 'react';

import './Applications.css';

const redidit = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI';
const rhymeDoctor = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI';
const trackYoScore = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=qx92U8a%2B1Jf0HHV0LzE%2ByWOdCD8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4KpaMfrqjo0BALnoGjQBheOi1ETfhRI69LILrKdly2MPjJsL5agYUbhl4lWdI';
const portfolio = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=k9tS0%2FpGWit6YI7LG%2FsrdzsNO08%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfs_eKLel8UAVLnhXjQAzfO61STXhE460eIjre9V2iJHjd5P5agYUbhl4lWdI';
const gottaVueEmAll = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=w0RtPCnAA3V1E5uy7imL2ZdDTT8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvL87afran8kBCcH8CjQBhLOq1STblRI65KonofI5x2p_tdZD5agYUbhl4lWdI';
const unconventionalABCs = 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=AnN2gu9FfhsEorqPxF0Q5nSq4uQ%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi9f5TbfLL390BEeHpSjQAyee21EWOwQI68Kd7uedtwgsLsLJT5agYUbhl4lWdI';

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
          special: [
            ['Android Link', 'https://play.google.com/store/apps/details?id=com.notoriousnpm.rhymedoctor'],
            ['Android Codebase', 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile']
          ],
          techStack: 'React | Redux | MySQL | Socket.io | Express | Passport | Cloudinary API | Words API | Expo',
        },
        {
          code: 'https://github.com/aask4/redidit',
          description: 'Clone of Reddit',
          image: redidit,
          title: 'Redidit',
          url: 'https://aask4-redidit.herokuapp.com',
          techStack: 'React | Redux | Express | Firebase | PostgreSQL',
        },
        {
          code: 'https://github.com/omegak911/TrackYoScore',
          description: 'TrackYoScore',
          image: trackYoScore,
          title: 'TrackYoScore',
          techStack: 'React | Redux | PostgreSQL | Express | Passport | Cloudinary API',
        },
        {
          code: 'https://github.com/omegak911/omegak911.github.io/tree/portfolio',
          description: 'Personal Portfolio',
          image: portfolio,
          title: 'Portfolio',
          url: 'https://omegak911.github.io/',
          special: [
            ['Heroku Website', 'https://personalportfolio-v2.herokuapp.com/'],
            ['Next.js Codebase', 'https://github.com/omegak911/portfolio-v2/tree/deployment']
          ],
          techStack: 'React | HTML | CSS',
        },
        {
          code: 'https://github.com/omegak911/Gotta_Vue_em_All/tree/deployment',
          description: 'View/Catch/Create Pokemon',
          image: gottaVueEmAll,
          title: 'Gotta Vue Em All',
          url: 'https://gotta-vue-em-all.herokuapp.com/',
          techStack: 'Vue | Nuxt | Vuex | MongoDB',
        },
        {
          code: 'https://github.com/omegak911/Unconventional-ABCs',
          description: 'ABC learning game',
          image: unconventionalABCs,
          title: 'Unconventional ABCs',
          url: 'https://unconventional-abcs.herokuapp.com/',
          techStack: 'AngularJS | HTML | CSS | Express',
        }
      ],
      showModal: null,
    }
  }

  displayModal = (index) => {
    this.setState({ showModal: index})
  }

  removeModal = () => {
    this.setState({ showModal: null})
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
                    onMouseEnter={() => this.displayModal(index)} 
                    onMouseLeave={this.removeModal}
                    >
                    {showModal === index && 
                      <div className="modal">
                        <div className="modalInfo">
                          <div className="appTechStack">{app.techStack}</div>
                          <div><h3>{app.title}</h3></div>
                          {app.url && <div><a href={app.url} target="_blank">Website</a></div>}
                          <div><a href={app.code} target="_blank">Codebase</a></div>
                          {app.special &&
                            <div>
                              <br/>
                              <div><a href={app.special[0][1]} target="_blank">{app.special[0][0]}</a></div>
                              <div><a href={app.special[1][1]} target="_blank">{app.special[1][0]}</a></div>
                            </div>
                          }
                        </div>
                      </div>
                    }
                    <img src={app.image} alt="app preview"/>
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