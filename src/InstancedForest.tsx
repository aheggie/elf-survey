import * as THREE from "three";
import { useRef, useLayoutEffect } from "react";

import { TreeObj } from "./utilities/processForestString";
import randomScale from "./utilities/randomScale";

const dummyTree = new THREE.Object3D();

const InstancedForest: React.FC<{ treeMatrix: TreeObj[][] }> = ({
  treeMatrix,
}) => {
  // console.log(treeMatrix);
  // these are to center the center point at the origin
  //
  // rowOffest in particular presumes that the matrix is square and takes the first row length
  // as standard - could be calculated dynamically in the function below
  const rowOffset = 0 - (treeMatrix[0].length + 1) / 2;
  const colOffset = 0 - (treeMatrix.length + 1) / 2;
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const numTrees = treeMatrix.reduce((acc, cur) => acc + cur.length, 0);

  useLayoutEffect(() => {
    let i = 0;
    treeMatrix.forEach((row, rowIdx) =>
      row.forEach(({ height }, colIdx) => {
        const id = i++;
        dummyTree.position.set(
          randomScale(0.016, rowIdx + rowOffset),
          0,
          randomScale(0.016, colIdx + colOffset)
        );
        dummyTree.scale.set(
          randomScale(0.5, 0.004),
          randomScale(0.01, height * 0.01),
          randomScale(0.5, 0.004)
        );
        dummyTree.updateMatrix();
        meshRef.current!.setMatrixAt(id, dummyTree.matrix);
      })
    );
    meshRef.current!.instanceMatrix.needsUpdate = true;
  }, [colOffset, rowOffset, treeMatrix]);
  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, numTrees]}>
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
    </instancedMesh>
  );
};
export default InstancedForest;
