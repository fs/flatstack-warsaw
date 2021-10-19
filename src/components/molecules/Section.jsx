import styled from 'styled-components';
import Container from '../atoms/Container';

const Wrapper = styled.section`
  margin-bottom: 2em;
`;

const Section = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Container>{children}</Container>
  </Wrapper>
);

export default Section;
