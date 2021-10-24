import styled, { css } from 'styled-components';
import { Dialog } from '@headlessui/react';
import Button, { variants as buttonVariants } from '../atoms/Button';
import CloseIcon from '../icons/CloseIcon';

const Wrapper = styled(Dialog)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  overflow-y: auto;
`;

const WindowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  min-height: 100%;
`;

const Window = styled.div`
  border-radius: 1em;
  background-color: #ffffff;
  width: 40em;
  max-width: 100%;
  padding: 1em;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0.5em 1.5em;
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;
  opacity: 0.3;
`;

const CloseButton = styled(Button)`
  border-radius: 100%;
  width: 2em;
  height: 2em;
  position: absolute;
  top: -0.7em;
  right: -0.7em;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled(Dialog.Title)`
  font-size: 1.5em;
  margin: 0 0 1em;
`;

const Modal = ({ isOpen, onClose, title, centered, children }) => (
  <Wrapper open={isOpen} onClose={onClose}>
    <WindowWrapper>
      <Overlay />
      <Window centered={centered}>
        <CloseButton variant={buttonVariants.PRIMARY} onClick={onClose}>
          <StyledCloseIcon />
        </CloseButton>

        <Title>{title}</Title>

        {children}
      </Window>
    </WindowWrapper>
  </Wrapper>
);

export default Modal;
