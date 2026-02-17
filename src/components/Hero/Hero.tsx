import React from 'react';
import { Box } from '@mui/material';
import { HeroContainer, HeroImage, HeroTitle, HeroDescription } from './Hero.styled';
import heroBackground from '../../assets/images/heroBackground.png';
import { useGeo } from '../../app/providers/GeoProvider';
import GeoDropdown from '../GeoDropdown/GeoDropdown';
import GameFrame from '../GameFrame';
import CasinoSlot from '../../assets/icons/CasinoSlot.svg?url';
import CasinoRoyal from '../../assets/icons/CasinoRoyal.svg?url';

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, }) => {
  return (
    <HeroContainer $bgImage={heroBackground}>
      <Box
        sx={{
          maxWidth: 358.5,
          width: '100%',
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <img src={CasinoRoyal} width={"100%"} height={120} alt="casino royal" loading="lazy" />
        <img src={CasinoSlot} width="100%" height={200} alt="casino slot" loading="lazy" />
        <GameFrame
          gameUrl="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"
        />
      </Box>
    </HeroContainer>
  );
};

export default Hero;