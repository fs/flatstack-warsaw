import styled from 'styled-components';
import { lighten } from 'polished';
import Link from '../../atoms/Link';
import Container from '../../atoms/Container';

const Wrapper = styled.footer`
  padding: 1em 0;
  color: ${({ theme }) => lighten(0.2, theme.colors.text)};

  ${Link} {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <p>&copy; 2020 Flatstack LLC</p>
    </Container>
  </Wrapper>
);

export default Footer;
