import type { NextComponentType } from 'next';
import styled from 'styled-components';

const Root = styled.div``;

const MasonryLayout: NextComponentType = ({ children }) => (
  <Root>{children}</Root>
);

export default MasonryLayout;
