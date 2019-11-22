import React from "react"
import Layout from "../components/layout"
import aboutStyles from "./about.module.scss"
import man from "../images/pic_about.svg"

const AboutPage = () => {
  return (
    <Layout
      pageTitle="About"
      pageDescription="A brief recap about my programming experience."
    >
      <section
        className={[aboutStyles.cdContainer, aboutStyles.cdTimeline].join(" ")}
      >
        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>My first programming experience</h2>
            <p>
              For my graduation project I collaborated with a bookkeeping
              company to design and develop a tax return manager software.
              <br />
              Utilized VB.net to create the user interfaces and SQL server to
              manage the database.
              <br />
              After delivering the project, I saw that I was able to create
              something to make some people's life easier I was like "I got
              this, bro!" Let me create more of this stuff.
              <br />
              In the meantime I was going to an internship in a web marketing
              company owned by one of my teachers.
            </p>
            <span className={aboutStyles.cdDate}>Jul 2011</span>
          </div>
        </div>
        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdPicture].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Getting started with the web development</h2>
            <p>
              During a 6 months internship, I got to work with the SEO team to
              apply changes on some existing online projects such as refactoring
              the url structure and setting up all different type of url
              forwarding. Also got to work with the lead developer to create
              optimized web interfaces using HTML, CSS and vanilla JavaScript
              and to familiarize with programming with PHP and MySQL.
            </p>
            <span className={aboutStyles.cdDate}>Aug 2011</span>
            <ul className={aboutStyles.contentSkills}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.mca-architectes.com/"
                >
                  mca-architectes.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdPicture].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Practicing more web coding</h2>
            <p>
              Joined Satoripop as a Jr. Web developer. Worked in a team of five
              web developers. During the first 6 months, I have worked on
              modifying different type of web projects built from scratch with
              PHP/MySQL, HTML, CSS and JavaScript or powered by a CMS such as
              WordPress. Then I worked on rebuilding some of these projects
              utilizing PHP MVC frameworks (CodeIgniter) and recent front-end
              features (responsive design, BEM, SCSS and jQuery). My work
              reflected to positive results in level of maximizing the page
              loading speed, improving the traffic on the websites, adding an
              easy way to manage the content and delivering valid code
              standards.
              <br />
            </p>
            <ul className={aboutStyles.contentSkills}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://www.windward-islands.net/"
                >
                  windward-islands.net
                </a>
              </li>
            </ul>
            <span className={aboutStyles.cdDate}>Jan 2012</span>
          </div>
        </div>
        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Freelancing</h2>
            <p>
              By the end of 2017, after taking an online class about Essential
              Javascript Development tools such as Node.js, I started taking
              contract work. One of the projects I have been working on remotely
              is calleridreputation.com
              <br />
              In this project I used WordPress to create the public pages and I
              developed the user's dashboard using CodeIgniter, Node.js, MySQL
              and Bootstrap.
            </p>
            <ul className={aboutStyles.contentSkills}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.calleridreputation.com/"
                >
                  calleridreputation.com
                </a>
              </li>
            </ul>
            <span className={aboutStyles.cdDate}>Jan 2018</span>
          </div>
        </div>

        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>New Experience</h2>
            <p>
              During an internship with Occuspace I got to work with an awesome
              team on rebuilding the front-end of Waitz University the mobile
              app using React Native.
            </p>
            <span className={aboutStyles.cdDate}>Aug 2019</span>
          </div>
        </div>

        <div className={aboutStyles.cdTimelineBlock}>
          <div
            className={[aboutStyles.cdTimelineImg, aboutStyles.cdMovie].join(
              " "
            )}
          ></div>

          <div className={aboutStyles.cdTimelineContent}>
            <h2>Available for hiring!</h2>
            <p>
              With the mixture of my programming knowledge and experience, I'm
              able to turn your idea to reality. Want to hire me? Need some
              contract work? Just want to chat? Contact me via email.
            </p>
            <span className={aboutStyles.cdDate}>Present</span>
          </div>
        </div>
      </section>
      <img alt="man coding" className={aboutStyles.image} src={man} />
    </Layout>
  )
}
export default AboutPage
