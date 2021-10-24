import styled from 'styled-components';
import Container from '../../atoms/Container';

const Wrapper = styled.footer`
  padding: 1em 0;
  color: ${({ theme }) => theme.colors.paleText};
`;

const Footer = () => (
  <Wrapper dangerouslySetInnerHTML={{ __html: '' }}>
    <Container>
      <p>&copy; 2021 Flatstack LLC</p>
    </Container>
  </Wrapper>
);

export default Footer;
