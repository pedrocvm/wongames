import * as S from './styles';
import { Container } from 'components/Container';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

export type BaseTemplateProps = {
  children: React.ReactNode | JSX.Element;
};

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Base;
