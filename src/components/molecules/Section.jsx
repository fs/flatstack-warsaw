import styled from 'styled-components';
import Container from '../atoms/Container';

const Wrapper = styled.section`
  margin-bottom: 2em;
`;

const Section = ({ title, children, ...props }) => (
  <Wrapper {...props}>
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  </Wrapper>
);

export default Section;
