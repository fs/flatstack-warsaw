import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled.header``;

const Logo = styled.img``;

const Header = () => (
  <Wrapper>
    <Container>
      <Logo src="/logo.svg" />
    </Container>
  </Wrapper>
);

export default Header;
