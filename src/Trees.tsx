import Tree from "./Tree";

const dummyTreeMap = [
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

const Trees = () => {
  return (
    <>
      {dummyTreeMap.map((row, rowIdx) =>
        row.map(({ height }, colIdx) => (
          <Tree
            height={height}
            position={[rowIdx, 0, colIdx]}
            key={mergeKeys(rowIdx, colIdx)}
          />
        ))
      )}
    </>
  );
};
export default Trees;
