import { Instances, Model } from "./Pine_tree";
import { TreeObj } from "./utilities/processForestString";
import randomScale from "./utilities/randomScale";

const mergeKeys = (key1: number, key2: number): string =>
  `${key1.toString()}${key2.toString()}`;

const Forest: React.FC<{ treeMatrix: TreeObj[][] }> = ({ treeMatrix }) => {
  //   const rowOffset = 0 - (treeMatrix[0].length + 1) / 2;
  //   const colOffset = 0 - (treeMatrix.length + 1) / 2;
  //   console.log(treeMatrix.reduce((acc, curr) => acc + curr.length, 0));
  //   let trees = [];
  //   for (let r = 0; r < 99; r++) {
  //     for (let c = 0; c < 99; c++) {
  //       trees.push(
  //         <Model
  //           position={[r, 0, c]}
  //           scale={[0.004, treeMatrix[r][c].height * 0.01, 0.004]}
  //         />
  //       );
  //     }
  //   }
  const trees1 = treeMatrix.slice(0, 10);
  const trees2 = treeMatrix.slice(10, 20);
  return (
    <>
      <Instances>
        {trees1.map((row) =>
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
                position={[rowIdx, 0, colIdx]}
                key={mergeKeys(rowIdx, colIdx)}
              />
            );
          })
        )}
        {/* {trees} */}
      </Instances>
      <Instances>
        {trees2.map((row) =>
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
                position={[rowIdx, 0, colIdx]}
                key={mergeKeys(rowIdx, colIdx)}
              />
            );
          })
        )}
        {/* {trees} */}
      </Instances>
    </>
  );
};
export default Forest;
