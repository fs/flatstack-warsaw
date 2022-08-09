import styled from 'styled-components';
import Container from '../../atoms/Container';

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Wrapper = styled.footer`
  padding: 3em 0;

  color: ${({ theme }) => theme.colors.paleText};
`;

const Footer = () => (
  <Wrapper dangerouslySetInnerHTML={{ __html: '' }}>
    <Container>
      <Content />
    </Container>
  </Wrapper>
);

export default Footer;
