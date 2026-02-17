import React, { createContext, ReactNode, useContext, useState } from 'react';

export type Geo = 'EN' | 'TR' | 'RU';

interface GeoContextProps {
  geo: Geo;
  setGeo: (geo: Geo) => void;
}

const GeoContext = createContext<GeoContextProps | undefined>(undefined);

interface Props {
  children: ReactNode;
  defaultGeo?: Geo;
}

export const GeoProvider = ({ children, defaultGeo = 'EN' }: Props) => {
  const [geo, setGeo] = useState<Geo>(defaultGeo);

  return <GeoContext.Provider value={{ geo, setGeo }}>{children}</GeoContext.Provider>;
};

// хук для удобного доступа
export const useGeo = (): GeoContextProps => {
  const context = useContext(GeoContext);
  if (!context) throw new Error('useGeo must be used within GeoProvider');
  return context;
};