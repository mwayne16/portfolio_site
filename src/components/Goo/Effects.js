import React, { useMemo, Suspense, forwardRef } from 'react';
import { EffectComposer, Noise, HueSaturation } from 'react-postprocessing';
import { BlendFunction, KernelSize, GodRaysEffect } from 'postprocessing';
import * as THREE from 'three';
import { useResource, useThree, useFrame } from 'react-three-fiber';

// const DepthEffect = forwardRef((props, ref) => {
//   const { camera } = useThree();
//   const effect = useMemo(
//     () =>
//       new DepthOfFieldEffect(camera, {
//         width: 400,
//         height: 400,
//         bokehScale: 20,
//         focusDistance: 0.05,
//         focalLength: 0.1,
//       }),
//     [camera]
//   );
//   return <primitive ref={ref} object={effect} />;
// });

//Okay so maybe try and figure out a way to rotate the spotlight on the sunMesh
// Then crank up the reflectiveness of it

//ADD HEMISPHERE LIGHTING/AMBIENT
const GodRay = forwardRef(({ sun }, ref) => {
  const { camera } = useThree();
  const effect = useMemo(
    () =>
      new GodRaysEffect(camera, sun.current, {
        blendFunction: BlendFunction.LIGHTEN,
        resolutionScale: 1,
        samples: 100, // The number of samples per pixel.
        density: 1.1, // The density of the light rays.
        decay: 0.97, // An illumination decay factor.
        weight: 0.45, // A light ray weight factor.
        exposure: 0.42, // A constant attenuation coefficient.
        clampMax: 1, // An upper bound for the saturation of the overall effect.
        kernelSize: KernelSize.SMALL, // The blur kernel size. Has no effect if blur is disabled.
        blur: true,
      }),
    [sun]
  );
  return <primitive ref={ref} object={effect} dispose={null} />;
});
const Sun = forwardRef((props, forwardRef) => (
  <>
    <arrowHelper args={[4, 4, 'black']} />
    <mesh castShadow ref={forwardRef} position={[-10.5, 0, -10]}>
      <circleBufferGeometry args={[5.75, 30]} attach='geometry' />
      <meshBasicMaterial attach='material' color={'#ff3e55'} />
    </mesh>
  </>
));
const Effects = () => {
  // const sunGeo = useMemo(() => new THREE.CircleGeometry(2.8, 30), []);
  // const sunMat = useMemo(
  //   () =>
  //     new THREE.MeshBasicMaterial({
  //       color: '#ff3e55',
  //     }),
  //   []
  // );
  // const sunMesh = useMemo(() => new THREE.Mesh(sunGeo, sunMat), [
  //   sunGeo,
  //   sunMat,
  // ]);
  // console.log(sunMesh);
  const [ref, sun] = useResource(); // Okay so this hook simply clones the two values so this was you can conditionally run components that rely on each other
  // This is helpful for when two or more components rely on each others properties

  return (
    <Suspense fallback={null}>
      <Sun ref={ref} />
      {sun && (
        <EffectComposer>
          <Noise opacity={0.3} premultiply blendFunction={BlendFunction.ADD} />
          <HueSaturation hue={3.11} saturation={2.25} />
          <GodRay sun={ref} />
        </EffectComposer>
      )}
    </Suspense>
  );
};
export default Effects;
{
  /* <DepthEffect ref={ref} /> */
}
{
  /* <GodRays
   blendFunction={BlendFunction.ADD}
   sun={sunMesh}
   width={700}
   height={700}
   samples={75} // The number of samples per pixel.
   density={0.85} // The density of the light rays.
   decay={0.96} // An illumination decay factor.
   weight={0.22} // A light ray weight factor.
   exposure={0.33} // A constant attenuation coefficient.
   clampMax={1} // An upper bound for the saturation of the overall effect.
   kernelSize={KernelSize.SMALL} // The blur kernel size. Has no effect if blur is disabled.
   blur={true} // Whether the god rays should be blurred to reduce artifacts.
 /> */
}
