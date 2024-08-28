import Title from '../../components/Title';
import Project from '../../components/Project';
import * as S from './styles';
import { useState } from 'react';

const Projects = () => {
  const [projectsList] = useState([
    {
      title: 'Contact list',
      description:
        'Project developed using Create React App, Redux and Styled Components.',
      linkGithub: 'https://github.com/zmngabriela/contact-list',
      linkVercel: 'https://contact-list-orcin.vercel.app/',
      image: 'https://i.postimg.cc/XvvFrdKS/contacts-list.jpg'
    },
    {
      title: 'Arithmetic Calculator',
      description:
        'Project developed using VueJS. Isolated component for exercise purpose.',
      linkGithub: 'https://github.com/zmngabriela/arithmetic-calculator',
      linkVercel: 'https://arithmetic-calculator-delta.vercel.app/',
      image: 'https://i.postimg.cc/3wKHGMZV/arithmetic-calculator.jpg'
    },
    {
      title: 'BMI Calculator',
      description:
        'Project developed using React. Isolated component for exercise purpose.',
      linkGithub: 'https://github.com/zmngabriela/bmi-calculator',
      linkVercel: 'https://bmi-calculator-rust-eight.vercel.app/',
      image: 'https://i.postimg.cc/DzB3dCjZ/bmi-calculator.jpg'
    }
  ]);

  return (
    <section>
      <Title fontSize={16}>Projects</Title>
      <S.Projects>
        {projectsList.map((project) => (
          <li key={project.title}>
            <Project
              title={project.title}
              description={project.description}
              linkGithub={project.linkGithub}
              linkVercel={project.linkVercel}
              image={project.image}
            />
          </li>
        ))}
      </S.Projects>
    </section>
  );
};

export default Projects;
