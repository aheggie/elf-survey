import { useLoader } from "@react-three/fiber";
import { Vector3Tuple } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Matilda: React.FC<{
  height: number;
  position: Vector3Tuple;
}> = ({ height, position }) => {
  const model = useLoader(GLTFLoader, "./models/matilda.glb");

  model.scene.traverse((object) => {
    // typescript complains about isMesh without this
    // see https://discourse.threejs.org/t/gltf-scene-traverse-property-ismesh-does-not-exist-on-type-object3d/27212
    if ((object as THREE.Mesh).isMesh) {
      object.castShadow = true;
    }
  });
  return (
    <group>
      <object3D scale={[0.01, height * 0.02, 0.01]} position={position}>
        <primitive object={model.scene.clone()} />;
      </object3D>
    </group>
  );
};

export default Matilda;