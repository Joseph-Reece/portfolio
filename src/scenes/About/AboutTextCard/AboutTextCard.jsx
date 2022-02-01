import {useState, useEffect} from 'react';
import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';
import { getRandomJoke, getTwoPartJoke } from '../../../apis/JokeAPI';

const AboutTextCard = () => {
  const [setUp, setSetUp] = useState('');
  const [delivery, setDelivery] = useState('');

  useEffect(() => {
    getTwoPartJoke().then(res => {
      console.log(res)
      setSetUp(res.data.setup);
      setDelivery(res.data.delivery);
    });
  }, []);


  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hello, everyone! I'm{' '}
        <span className={s.purple}>Joseph Ndirangu </span>
        a MERN Stack, Mobile and Laravel PHP developer
        from <span className={s.purple}> Nairobi, Kenya</span>
        <br />
        <br />
        I graduated from Murang' a University of Technology in Muranga with a bachelor's degree in software engineering.
        <br />
        <br />
        Aside from coding, here are some other things I enjoy doing!
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
        {`"${setUp}"`}{' '}
      </p>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        {`"${delivery}"`}{' '}
      </p>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
          fontSize: '0.8rem',
        }}
      >
         Powered by <a href="https://v2.jokeapi.dev/" target="_blank" rel="noreferrer" >Jokes API </a> 
      </p>
    </div>
  );
};

export default AboutTextCard;
