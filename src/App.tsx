import React from 'react';
import { useGeo } from './app/providers/GeoProvider';
import { geoStyles } from './styles/geoStyles';
import { translations } from './translations/translations';
import styled from 'styled-components';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

const Container = styled.div<{ bg: string; color: string }>`
  background: ${props => props.bg};
  color: ${props => props.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  const { geo, setGeo } = useGeo();
  const style = geoStyles[geo];
  const t = translations[geo];

  return (
    <Container bg={style.background} color={style.color}>
      <Hero title={t.title} description={t.description}  />
      <Footer />
    </Container>
  );
};

export default App;