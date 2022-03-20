import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub} from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            Computers have always fascinated me since I was a child.
            </p>
            <p>
            I fell in love with web development and decided to pursue <br /> a career in software engineering.
            </p>
            <p>
            </p>

            <p>
            Building new <i>
                <b className={s.purple}>
                  {' '}
                  business solutions and Products
                </b>
              </i> are among my areas of interest.
              
            </p>
            <p> A passionate Full Stack Software Developer 🚀 <br />
              I've built{' '} <i>
                <b className={s.purple}>Web and Mobile</b>
              </i>{' '}
              applications using <br/> <i>
                <b className={s.purple}>
                Laravel PHP, JavaScript, Reactjs, Nodejs, GraphQL, MongoDB,
                </b>
              </i>,<br />
              {' '} and a few other cool libraries.
            </p>
            
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/Joseph-Reece"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://twitter.com/kariuki_joseph3"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTwitter />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/josephndirangu"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
