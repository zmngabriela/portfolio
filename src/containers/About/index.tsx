import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import * as S from './styles';

const About = () => {
  return (
    <section>
      <Title fontSize={16}>About</Title>
      <Paragraph type="principal">
        Java Full Stack Development in formation on EBAC – Escola Britânica de
        Artes Criativas e Tecnologia. Enthusiastic professional with a diverse
        background in team coordination, customer service for tech companies,
        production engineering and risk verification for Stripe. With strong
        technical skills, a methodical approach to achieving results, and
        passion for continuous learning, I am excited to take on new challenges
        and contribute meaningfully to innovative projects.
      </Paragraph>
      <S.GithubSection>
        <img
          src="https://github-readme-stats.vercel.app/api?username=zmngabriela&show_icons=true&theme=default&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          className="github-images"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=zmngabriela&theme=default&layout=compact&langs_count=6"
          alt="GitHub Most Used Languages"
          className="github-images"
        />
      </S.GithubSection>
    </section>
  );
};

export default About;
