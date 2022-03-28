import type { NextPage } from 'next';
import styled from 'styled-components';

import Square from '../../components/Square';

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Transition = styled.div`
  position: relative;
`;

const Coverflow: NextPage = () => {
  return (
    <Root>
      <Transition>
        <Square color="green" />
        <Square color="yellow" />
        <Square color="red" />
      </Transition>
    </Root>
  );
};

export default Coverflow;
