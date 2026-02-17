import { Geo } from '../app/providers/GeoProvider';

interface GeoStyle {
  background: string;
  color: string;
}

export const geoStyles: Record<Geo, GeoStyle> = {
  EN: {
    background: '#ffffff',
    color: '#1976d2',
  },
  TR: {
    background: '#ffffff',
    color: '#e53935',
  },
  RU: {
    background: '#ffffff',
    color: '#ffcc00',
  },
};