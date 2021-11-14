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
  z-index: 1;

  overflow: hidden;
  overflow-y: auto;
`;

const WindowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 1em;
`;

const Window = styled.div`
  position: relative;

  width: 40em;
  max-width: 100%;
  padding: 1em;

  background-color: #ffffff;
  border-radius: 1em;
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
  position: absolute;
  top: -0.7em;
  right: -0.7em;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  padding: 0;

  border-radius: 100%;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const Title = styled(Dialog.Title)`
  margin: 0 0 1em;

  font-size: 1.5em;
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
