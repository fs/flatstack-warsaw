import React from 'react';
import styled from 'styled-components';
import Container from '../atoms/Container';

const Wrapper = styled.section`
  margin-bottom: 4em;
  background-color: ${({ theme, grey }) => grey && theme.colors.primary};
  padding: ${({ grey }) => (grey ? '2em' : '0')} 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Section = React.forwardRef(({ children, ...props }, ref) => (
  <Wrapper {...props} ref={ref}>
    <Container>{children}</Container>
  </Wrapper>
));

Section.Title = styled.h2`
  font-size: 2em;
  margin: 0 0 1em 0;
`;

export default Section;
