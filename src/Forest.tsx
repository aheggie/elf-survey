import { Instances, Model } from "./Pine_tree";
import { TreeObj } from "./utilities/processForestString";
import randomScale from "./utilities/randomScale";

const mergeKeys = (key1: number, key2: number): string =>
  `${key1.toString()}${key2.toString()}`;

const SubForest: React.FC<{
  treeSubMatrix: TreeObj[][];
  rowOffset: number;
  colOffset: number;
}> = ({ treeSubMatrix, rowOffset, colOffset }) => {
  return (
    <Instances>
      {treeSubMatrix.map((row) =>
        row.map(({ height, position }) => {
          const [rowIdx, colIdx] = position;
          console.log(rowIdx, colIdx);
          return (
            <Model
              rotation={[0, Math.random() * 2 * Math.PI, 0]}
              scale={[
                randomScale(0.5, 0.004),
                randomScale(0.01, height * 0.01),
                randomScale(0.5, 0.004),
              ]}
              position={[
                randomScale(0.016, rowIdx + rowOffset),
                0,
                randomScale(0.016, colIdx + colOffset),
              ]}
              key={mergeKeys(rowIdx, colIdx)}
            />
          );
        })
      )}
    </Instances>
  );
};

const Forest: React.FC<{ treeMatrix: TreeObj[][] }> = ({ treeMatrix }) => {
  const rowOffset = 0 - (treeMatrix[0].length + 1) / 2;
  const colOffset = 0 - (treeMatrix.length + 1) / 2;
  const trees1 = treeMatrix.slice(0, 10);
  const trees2 = treeMatrix.slice(10, 20);
  const trees3 = treeMatrix.slice(20, 30);
  const trees4 = treeMatrix.slice(30, 40);
  const trees5 = treeMatrix.slice(40, 50);
  const trees6 = treeMatrix.slice(50, 60);
  const trees7 = treeMatrix.slice(60, 70);
  const trees8 = treeMatrix.slice(70, 80);
  const trees9 = treeMatrix.slice(80, 90);
  const trees10 = treeMatrix.slice(90);

  return (
    <>
      <SubForest
        treeSubMatrix={trees1}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees2}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees3}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees4}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees5}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees6}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees7}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees8}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees9}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
      <SubForest
        treeSubMatrix={trees10}
        rowOffset={rowOffset}
        colOffset={colOffset}
      />
    </>
  );
};
export default Forest;
