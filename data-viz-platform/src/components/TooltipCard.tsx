import styled from "styled-components";

const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border: 1px solid #404040;
  border-radius: 8px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.15s ease-out forwards;
  opacity: 0;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4;
  max-width: 200px;
  z-index: 1000;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 12px;
    width: 8px;
    height: 8px;
    background: #1a1a1a;
    border-left: 1px solid #404040;
    border-top: 1px solid #404040;
    transform: rotate(45deg);
  }
`;

type Props = {
  content: string;
};

export function TooltipCard({ content }: Props) {
  return <Tooltip>{content}</Tooltip>;
}
