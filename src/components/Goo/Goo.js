import React, { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from 'react-three-fiber';
import Effects from './Effects';
import Lights from './Lights';
import fragmentShader from '../../shaders/fragmentShader';
import vertexShader from '../../shaders/vertexShader';
import { BlendFunction } from 'postprocessing';

const GooMesh = () => {
  const meshRef = useRef();
  const shaderRef = useRef();
  const uniforms = useMemo(
    () => ({
      time: {
        value: 0.1,
      },
      pointscale: {
        value: 0.2,
      },
      decay: {
        value: 1.2,
      },
      size: {
        value: 0.65,
      },
      displace: {
        value: 0.6,
      },
      complex: {
        value: 0.7,
      },
      waves: {
        value: 0.3,
      },
      eqcolor: {
        value: 17,
      },
      rcolor: {
        value: 0,
      },
      gcolor: {
        value: 0,
      },
      bcolor: {
        value: 0.5,
      },
    }),
    []
  );
  const pointGeo = useMemo(() => new THREE.SphereBufferGeometry(1.8, 10), []);
  const pointsMat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      }),
    []
  );
  useFrame(({ clock, mouse }) => {
    let speed =
      (uniforms.time.value / 3000) * clock.elapsedTime - clock.startTime;
    uniforms.time.value = speed / 2;
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouse.x * Math.PI,
      0.0025
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mouse.y * Math.PI,
      0.0025
    );
    meshRef.current.rotation.z = clock.getElapsedTime() / 8;
  });
  return (
    <mesh position={[-5, 0, 0]} ref={meshRef}>
      <icosahedronBufferGeometry args={[1.4, 8]} attach='geometry' />
      <shaderMaterial
        ref={shaderRef}
        attach='material'
        args={[
          {
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          },
        ]}
      />
      <points
        scale={[1.1, 1.1, 1.1]}
        material={pointsMat}
        geometry={pointGeo}
      />
    </mesh>
  );
};

const Goo = () => {
  return (
    <Canvas
      shadowMap
      gl={{
        powerPreference: 'high-performance',
        antialias: true,
        alpha: false,
      }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
      camera={{ near: 0.1, far: 1000, fov: 70, position: [0, 0, 10] }}
    >
      <Lights />
      <Effects />
      <GooMesh />
    </Canvas>
  );
};
export default Goo;
