import styled from "styled-components";

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 280px;
  height: 100%;
  background: #2d2d2d;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease;
  padding: 2rem;
  z-index: 100;
  color: #ffffff;
  border-left: 1px solid #404040;
`;

const Header = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #aaa;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: #404040;
    color: #ffffff;
  }
`;

const VariableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

type SlideOverProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export function SlideOver({ open, onClose, children }: SlideOverProps) {
  return (
    <Overlay open={open}>
      <Header>
        Edit Variables
        <CloseButton onClick={onClose}>✖</CloseButton>
      </Header>
      <VariableList>{children}</VariableList>
    </Overlay>
  );
}
