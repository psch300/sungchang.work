import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ContainerProps {}

const Root = styled.div`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    max-width: ${({ theme }) => theme.screens.sm};
  }
  @media (min-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.screens.md};
  }
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    max-width: ${({ theme }) => theme.screens.lg};
  }
  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    max-width: ${({ theme }) => theme.screens.xl};
  }
  @media (min-width: ${({ theme }) => theme.screens['2xl']}) {
    max-width: ${({ theme }) => theme.screens['2xl']};
  }
`;

const Container = ({ children }: PropsWithChildren<ContainerProps>) => {
  return <Root>{children}</Root>;
};

export default Container;
