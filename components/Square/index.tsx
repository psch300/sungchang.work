import styled, { keyframes, CSSProperties } from 'styled-components';

interface SquareProps {
  width?: CSSProperties['width'];
  color?: CSSProperties['backgroundColor'];
}

const Root = styled.div<SquareProps>`
  width: ${({ width }) => width};

  :first-child {
    transform: perspective(1000px) rotateY(85deg) translate(-650px) scale(0.33);
  }
  :last-child {
    transform: perspective(1000px) rotateY(-85deg) translate(650px) scale(0.33);
  }
`;

const BaseSquare = styled.div<SquareProps>`
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-color: ${({ color }) => color};

  position: absolute;
  top: -200px;
  left: 0;
`;

const Square = ({ width = '400px', color = 'red' }: SquareProps) => {
  return (
    <Root width={width}>
      <BaseSquare color={color} />
    </Root>
  );
};

export default Square;
