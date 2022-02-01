import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Joseph Ndirangu</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} Ndirangu</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/Joseph-Reece"
                target="_blank"
                rel="noreferrer"
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
            <li>
              <a
                href="https://www.linkedin.com/in/josephndirangu"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
