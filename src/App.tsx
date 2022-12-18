import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import "./App.css";
import Ground from "./Ground";
import Lights from "./Lights";

// starting data
import input from "./data/input.json";
import processForestString from "./utilities/processForestString";
import Forest from "./Forest";
const processedForest = processForestString(input.forest, "\n");

const testing = false;

function App() {
  const [treeMatrix] = useState(processedForest);
  const groundColor = "#15CB73";
  return (
    <div className="App">
      <Canvas
        dpr={window.devicePixelRatio * 0.52}
        frameloop="demand"
        camera={{ position: [84, 48, -40] }}
        shadows
      >
        {testing ? <Stats /> : null}
        <axesHelper args={[10]} />
        <gridHelper position={[-0.5, 0, -0.5]} args={[100, 100]} />
        <OrbitControls />
        {/* <InstancedForestJs treeMatrix={treeMatrix} /> */}
        <Forest treeMatrix={treeMatrix} />
        <Ground groundColor={groundColor} />
        <Lights groundColor={groundColor} />
        {/* cant tell if this works????? */}
        {/* <fog /> */}
      </Canvas>
    </div>
  );
}

export default App;
