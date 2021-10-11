import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Joseph Ndirangu </span>
        from <span className={s.purple}> Nairobi, Kenya</span>
        <br />
        Skilled MERN Stack and Laravel PHP Developer.
        <br /> Bachelor in Software Engineering from
        <br />
        Murang' a University of Technology, Muranga.
        <br />
        <br />
        Apart from coding, some other activities that I enjoy doing!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Video Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Guitar
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door."{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
