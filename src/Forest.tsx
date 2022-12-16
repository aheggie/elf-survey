import { Instances, Model } from "./Pine_tree";
import { TreeObj } from "./utilities/processForestString";

const Forest: React.FC<{ treeMatrix: TreeObj[][] }> = ({ treeMatrix }) => {
  return (
    <Instances>
      <Model position={[10, 0, 0]} />
    </Instances>
  );
};
export default Forest;
