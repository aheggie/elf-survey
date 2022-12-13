import { useHelper } from "@react-three/drei";

import { useRef } from "react";
import { DirectionalLightHelper } from "three";


const Lights: React.FC = () => {
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useHelper(lightRef, DirectionalLightHelper, 5, "red");
  return (
    <>
      <ambientLight intensity={0.05} />
      <directionalLight
        ref={lightRef}
        position={[5, 20, 20]}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-width={1000}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottm={-20}
      />
      <hemisphereLight args={["lightskyblue", "#15CB73", 0.2]} />
    </>
  );
};

export default Lights;
