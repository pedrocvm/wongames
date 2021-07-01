import * as S from './styles';
import { Container } from 'components/Container';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

export type BaseTemplateProps = {
  children: React.ReactNode | JSX.Element;
};

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
);

export default Base;
