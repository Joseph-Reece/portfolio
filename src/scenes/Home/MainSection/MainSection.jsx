import s from './MainSection.module.scss';
// import homeMainIcon from '../../../assets/home-main.svg';
// import codeThinking from '../../../assets/code_thinking.svg';
import creationProcess from '../../../assets/creation_process.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hi There! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> Joseph Ndirangu </strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Continuously Learning',
              'Laravel PHP Developer',
              'CodeIgniter Developer',
              'React Developer',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={creationProcess}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
