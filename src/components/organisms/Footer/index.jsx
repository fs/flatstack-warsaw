import styled from 'styled-components';
import Link from '../../atoms/Link';
import Container from '../../atoms/Container';

const Wrapper = styled.footer`
  padding: 1em 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  ${Link} {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <p>&copy; 2020 Flatstack LLC</p>
      </Container>
    </Wrapper>
  );
};

export default Footer;
