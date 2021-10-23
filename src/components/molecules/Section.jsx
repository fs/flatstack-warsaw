import styled from 'styled-components';
import Container from '../atoms/Container';

const Wrapper = styled.section`
  margin-bottom: 2em;
  background-color: ${({ theme, grey }) => grey && theme.colors.primary};
`;

const Section = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Container>{children}</Container>
  </Wrapper>
);

Section.Title = styled.h2`
  font-size: 2em;
  margin: 0 0 1em 0;
`;

export default Section;
