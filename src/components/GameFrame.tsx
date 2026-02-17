import React, { useState } from 'react';
import styled from 'styled-components';
import { translations } from '../translations/translations';
import { useGeo } from '../app/providers/GeoProvider';
import Button from './Button/Button';

const Overlay = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const FrameContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  font-size: 1.5rem;
  cursor: pointer;
`;

interface Props {
  gameUrl: string;
}

const GameFrame: React.FC<Props> = ({ gameUrl }) => {
  const [visible, setVisible] = useState(false);
  const { geo, setGeo } = useGeo();
    const t = translations[geo];
    return (
    <>
      <Button onClick={() => setVisible(true)}>{t.playButton} </Button>

      <Overlay $visible={visible}>
        <FrameContainer>
          <CloseButton onClick={() => setVisible(false)}>✖</CloseButton>
          <iframe
            src={gameUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Game"
          ></iframe>
        </FrameContainer>
      </Overlay>
    </>
  );
};

export default GameFrame;