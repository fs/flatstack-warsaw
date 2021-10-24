import styled from 'styled-components';

const Card = styled.div`
  padding: 2em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 1em;
`;

export default Card;
