import React, { useState } from 'react';
import { useGeo, Geo } from '../../app/providers/GeoProvider';
import { DropdownContainer, DropdownButton, DropdownList, DropdownItem, Flag } from './GeoDropdown.styled';

// Флаги стран
const geoFlags: Record<Geo, string> = {
  EN: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  TR: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
  RU: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
};

const geoNames: Record<Geo, string> = {
  EN: 'English',
  TR: 'Turkish',
  RU: 'Русский',
};

const GeoDropdown: React.FC = () => {
  const { geo, setGeo } = useGeo();
  const [open, setOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownButton type="button" onClick={() => setOpen(prev => !prev)}>
        <Flag src={geoFlags[geo]} alt={geo} />
        {geoNames[geo]}
      </DropdownButton>

      {open && (
        <DropdownList>
          {Object.keys(geoFlags).map((key) => {
            const g = key as Geo;
            return (
              <DropdownItem
                key={g}
                onClick={() => {
                  setGeo(g);
                  setOpen(false);
                }}
              >
                <Flag src={geoFlags[g]} alt={g} />
                {geoNames[g]}
              </DropdownItem>
            );
          })}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default GeoDropdown;