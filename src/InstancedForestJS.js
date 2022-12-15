import * as THREE from "three";
import { useRef, useLayoutEffect } from "react";
import randomScale from "./utilities/randomScale";

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
    // these are to center the center point at the origin
    //
    // rowOffest in particular presumes that the matrix is square and takes the first row length
    // as standard - could be calculated dynamically in the function below
    const rowOffset = 0 - (treeMatrix[0].length + 1) / 2;
    const colOffset = 0 - (treeMatrix.length + 1) / 2;
    treeMatrix.forEach((row, rowIdx) => {
      row.forEach(({ height }, colIdx) => {
        const id = i++;
        o.position.set(
          randomScale(0.016, rowIdx + rowOffset),
          0 + height / 2,
          randomScale(0.016, colIdx + colOffset)
        );
        o.scale.set(0.15, height, 0.15);
        o.rotation.set(0, Math.random() * 2 * Math.PI, 0);
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
