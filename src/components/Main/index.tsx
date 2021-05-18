import * as S from './styles';

const Main = ({
  title = 'React Boilerplate',
  description = 'Typescript, ReactJS, NextJS e Styled Components',
  color = 'white'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="logo react" />
    <S.Title>{title}</S.Title>
    <S.Description style={{ color }}>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor olhando para tela do pc"
    />
  </S.Wrapper>
);

export default Main;
