import React, { useState } from 'react';
import styled from 'styled-components';
import { translations } from '../translations/translations';
import { useGeo } from '../app/providers/GeoProvider';
import Button from './Button/Button';
import { breakpoints } from '../styles/media/media';

const Overlay = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  align-items: stretch;
  justify-content: center;
  z-index: 999;
  padding: 16px;
  box-sizing: border-box;
`;

const FrameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const CloseButton = styled.button`
  position: absolute;
  /* Базовое положение — для мобильных и маленьких экранов */
  top: 0px;
  right: 0px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;

  /* На больших экранах (>= 1200px) выносим крестик чуть за край фрейма */
  @media (min-width: ${breakpoints.desktop1200}px) {
    top: -5px;
    right: -12px;
  }
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