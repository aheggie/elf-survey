import Tree from "./Tree";
import { TreeObj } from "./utilities/processForestString";
import randomScale from "./utilities/randomScale";

const mergeKeys = (key1: number, key2: number): string =>
  `${key1.toString()}${key2.toString()}`;

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
  console.log(rowOffset, colOffset);
  return (
    <>
      {treeMatrix.map((row, rowIdx) =>
        row.map(({ height }, colIdx) => (
          <Tree
            height={height}
            position={[
              randomScale(0.016, rowIdx + rowOffset),
              0,
              randomScale(0.016, colIdx + colOffset),
            ]}
            key={mergeKeys(rowIdx, colIdx)}
          />
        ))
      )}
    </>
  );
};
export default InstancedForest;
