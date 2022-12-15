import * as THREE from "three";
import { useRef, useLayoutEffect } from "react";

const o = new THREE.Object3D();

const treeMatrix2 = [
  [
    { height: 1 },
    { height: 0 },
    { height: 3 },
    { height: 2 },
    { height: 4 },
    { height: 3 },
  ],
  [
    { height: 2 },
    { height: 4 },
    { height: 3 },
    { height: 2 },
    { height: 0 },
    { height: 4 },
  ],
  [
    { height: 2 },
    { height: 0 },
    { height: 4 },
    { height: 1 },
    { height: 0 },
    { height: 3 },
  ],
  [
    { height: 2 },
    { height: 4 },
    { height: 3 },
    { height: 2 },
    { height: 0 },
    { height: 4 },
  ],
  [
    { height: 2 },
    { height: 0 },
    { height: 4 },
    { height: 1 },
    { height: 0 },
    { height: 3 },
  ],
  [
    { height: 1 },
    { height: 0 },
    { height: 3 },
    { height: 2 },
    { height: 4 },
    { height: 3 },
  ],
];

function InstancedForestJs({ treeMatrix }) {
  const ref = useRef();
  const numTrees = treeMatrix.reduce((acc, cur) => acc + cur.length, 0);
  useLayoutEffect(() => {
    let i = 0;
    treeMatrix.forEach((row, rowIdx) => {
      row.forEach(({ height }, colIdx) => {
        const id = i++;
        o.position.set(rowIdx, 0 + height / 2, colIdx);
        o.scale.set(0.15, height, 0.15);
        o.updateMatrix();
        ref.current.setMatrixAt(id, o.matrix);
      });
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [treeMatrix]);
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, numTrees]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial vertexColors={true} toneMapped={false} />
      {/* <meshStandardMaterial /> */}
    </instancedMesh>
  );
}

export default InstancedForestJs;
