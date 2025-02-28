import { useEffect, useState } from 'react';
import data from '../../data.json';

import Tile from './Tile';

interface Building {
  name: string;
  rooms_available: number;
  building_picture: string;
}

const BodyMain = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);

  useEffect(() => {
    setBuildings(data);
  }, []);

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      <>
        {buildings.map((building: Building, index: number) => (
          <Tile key={index} img={building.building_picture} name={building.name} num={building.rooms_available} />
        ))}
      </>
    </div>
  );
}

export default BodyMain;