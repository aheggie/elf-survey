interface Tree {
  height: number;
  position: [number, number];
  onLeftEdge: boolean;
  onRightEdge: boolean;
  onTopEdge: boolean;
  onBottomEdge: boolean;
  visibleFromLeft: "unprocessed" | boolean;
  visibleFromRight: "unprocessed" | boolean;
  visibleFromTop: "unprocessed" | boolean;
  visibleFromBottom: "unprocessed" | boolean;
}

const processLine =
  (from: "Left" | "Right" | "Top" | "Bottom") => (treeLine: Tree[]) => {
    const { outputTreeLine } = treeLine.reduce(
      (
        {
          currentHighest,
          outputTreeLine,
        }: { currentHighest: Number; outputTreeLine: Tree[] },
        cur: Tree
      ) => {
        const isHeighest = cur.height > currentHighest;
        const newHighest = isHeighest ? cur.height : currentHighest;
        const visKey = `visibleFrom${from}`;
        // this explicit type signature is because we dynamically generate this key and then
        // use it in cur[edgeKey] below
        const edgeKey:
          | "onLeftEdge"
          | "onRightEdge"
          | "onTopEdge"
          | "onBottomEdge" = `on${from}Edge`;
        const newTree = {
          ...cur,
          [visKey]: cur[edgeKey] || isHeighest,
        };
        const newTreeLine = outputTreeLine.concat(newTree);
        return { currentHighest: newHighest, outputTreeLine: newTreeLine };
      },
      {
        currentHighest: 0,
        outputTreeLine: [],
      } as { currentHighest: Number; outputTreeLine: Tree[] }
    );

    return outputTreeLine;
  };

const processForestString = (forestStr: string, separator: "\r\n" | "\n") => {
  const forestData = forestStr
    .trim()
    // this is because the test data, which is copy-pasted from the problem, saves with a different newline convention
    // than the generated problem data
    .split(separator)
    .map((line, lineIdx, linesArr): Tree[] => {
      const isFirstLine = lineIdx === 0;
      const isLastLine = lineIdx === linesArr.length - 1;
      return line
        .trim()
        .split("")
        .map((treeHeight, treeIdx, treesArr): Tree => {
          const isFirstColumn = treeIdx === 0;
          const isLastColumn = treeIdx === treesArr.length - 1;
          return {
            height: parseInt(treeHeight, 10),
            position: [lineIdx, treeIdx],
            //   this is sort of derived state but it simplifies data processing later
            onLeftEdge: isFirstColumn,
            onRightEdge: isLastColumn,
            onTopEdge: isFirstLine,
            onBottomEdge: isLastLine,
            visibleFromLeft: isFirstColumn ? true : "unprocessed",
            visibleFromRight: isLastColumn ? true : "unprocessed",
            visibleFromTop: isFirstLine ? true : "unprocessed",
            visibleFromBottom: isLastLine ? true : "unprocessed",
          };
        });
    });

  const rowsProcessed = forestData.map((line: Tree[]): Tree[] => {
    const leftProcessed = processLine("Left")(line);
    return processLine("Right")(leftProcessed.reverse()).reverse();
  });

  const flipSquareMatrix = (matrix: any[][]): any[][] =>
    matrix.reduce((acc, cur) => {
      cur.forEach((item, idx) => {
        if (acc[idx]) {
          return (acc[idx] = acc[idx].concat(item));
        } else {
          return (acc[idx] = [item]);
        }
      });
      return acc;
    }, []);

  const forestFlipped = flipSquareMatrix(rowsProcessed);

  const columnsProcessed = forestFlipped.map((line: Tree[]): Tree[] => {
    const topProcessed = processLine("Top")(line);
    return processLine("Bottom")(topProcessed.reverse()).reverse();
  });

  const processedForest = flipSquareMatrix(columnsProcessed);

  return processedForest;
};

export default processForestString;
