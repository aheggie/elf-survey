// these imports serve the direction helper
// import { useHelper } from "@react-three/drei";
// import { useRef } from "react";
// import { DirectionalLightHelper } from "three";

const Lights: React.FC<{ groundColor: string }> = ({ groundColor }) => {
  // this is to look at the light source direction
  // const lightRef = useRef<THREE.DirectionalLight>(null);

  // useHelper(lightRef, DirectionalLightHelper, 5, "red");
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        // ref={lightRef}
        position={[5, 20, 20]}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-width={1000}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottm={-20}
      />
      <hemisphereLight args={["lightskyblue", groundColor, 0.2]} />
    </>
  );
};

export default Lights;
