import { useLoader } from "@react-three/fiber";
import { Vector3Tuple } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const randBetween = (lower: number, upper: number): number =>
  lower + Math.random() * (upper - lower);

const randPosition = (
  lowerX: number,
  lowerZ: number,
  upperX: number,
  upperZ: number
): Vector3Tuple => [
  randBetween(lowerX, upperX),
  0,
  randBetween(lowerZ, upperZ),
];

const Matilda: React.FC<{
  scale: number;
  position: Vector3Tuple;
}> = ({ scale, position }) => {
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
      <object3D scale={scale} position={position}>
        <primitive object={model.scene.clone()} />;
      </object3D>
      <object3D
        scale={Math.random() * 0.01 + 0.01}
        position={randPosition(-2, -0.5, 3, 4)}
      >
        <primitive object={model.scene.clone()} />;
      </object3D>
      <object3D
        scale={Math.random() * 0.01 + 0.01}
        position={randPosition(-2, -0.5, 3, 4)}
      >
        <primitive object={model.scene.clone()} />;
      </object3D>
    </group>
  );
};

export default Matilda;
