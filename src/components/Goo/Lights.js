import React from 'react';

const Lights = () => (
  <>
    <hemisphereLight args={['#2d80f3', '#021d44', 5]} />
    <spotLight
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      distance={20}
      angle={0.4}
      penumbra={0.7}
      castShadow
      color={'#021d44'}
      position={(-5, 0, -10)}
      intensity={0.4}
    />

    <pointLight
      distance={5}
      position={(-3, 1, -10)}
      color={'#021d44'}
      intensity={0.3}
    />
  </>
);

export default Lights;
