import styled from 'styled-components';
import AlertIcon from '../icons/AlertIcon';

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.accentPale};
  border-radius: 0.7em;
  padding: 1em;
  gap: 1em;
  align-items: center;
`;

const StyledAlertIcon = styled(AlertIcon)`
  display: block;
  flex: none;
`;

const P = styled.p`
  margin: 0;
`;

const Alert = ({ children }) => {
  return (
    <Wrapper>
      <StyledAlertIcon />
      <P>{children}</P>
    </Wrapper>
  );
};

export default Alert;
