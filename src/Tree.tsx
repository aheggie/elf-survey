import { useLoader } from "@react-three/fiber";
import { Vector3Tuple } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const randomScale = () => Math.random() * 0.5 + 0.75;

const Tree: React.FC<{
  height: number;
  position: Vector3Tuple;
}> = ({ height, position }) => {
  const model = useLoader(GLTFLoader, "./models/pine_tree.glb");

  model.scene.traverse((object) => {
    // typescript complains about isMesh without this
    // see https://discourse.threejs.org/t/gltf-scene-traverse-property-ismesh-does-not-exist-on-type-object3d/27212
    if ((object as THREE.Mesh).isMesh) {
      object.castShadow = true;
    }
  });
  return (
    <group>
      <object3D
        scale={[randomScale() * 0.004, height * 0.01, randomScale() * 0.004]}
        position={position}
        visible={height > 0}
      >
        <primitive object={model.scene.clone()} />;
      </object3D>
    </group>
  );
};

export default Tree;
