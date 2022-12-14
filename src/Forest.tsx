import Tree from "./Tree";
import { TreeObj } from "./utilities/processForestString";

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

const mergeKeys = (key1: number, key2: number): string =>
  `${key1.toString()}${key2.toString()}`;

const Forest: React.FC<{ treeMatrix: TreeObj[][] }> = ({ treeMatrix }) => {
  // console.log(treeMatrix);
  // these are to center the center point at the origin
  //
  // rowOffest in particular presumes that the matrix is square and takes the first row length
  // as standard - could be calculated dynamically in the function below
  const rowOffset = 0 - (treeMatrix2[0].length + 1) / 2;
  const colOffset = 0 - (treeMatrix2.length + 1) / 2;
  console.log(rowOffset, colOffset);
  return (
    <>
      {treeMatrix2.map((row, rowIdx) =>
        row.map(({ height }, colIdx) => (
          <Tree
            height={height}
            position={[rowIdx + rowOffset, 0, colIdx + colOffset]}
            key={mergeKeys(rowIdx, colIdx)}
          />
        ))
      )}
    </>
  );
};
export default Forest;
