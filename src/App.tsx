import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import "./App.css";
import Ground from "./Ground";
import Lights from "./Lights";
import Forest from "./Forest";

// starting data
import input from "./data/input.json";
import processForestString from "./utilities/processForestString";
const processedForest = processForestString(input.forest, "\n");

const testing = false;

function App() {
  const [treeMatrix] = useState(processedForest);
  const groundColor = "#15CB73";
  return (
    <div className="App">
      <Canvas camera={{ position: [84, 48, -40] }} shadows>
        {testing ? <Stats /> : null}
        <axesHelper args={[10]} />
        <gridHelper args={[10, 10]} />
        <OrbitControls />
        <Forest treeMatrix={treeMatrix} />
        <Ground groundColor={groundColor} />
        <Lights groundColor={groundColor} />
      </Canvas>
    </div>
  );
}

export default App;
