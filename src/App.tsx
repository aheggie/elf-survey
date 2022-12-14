import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./App.css";
import Ground from "./Ground";
import Lights from "./Lights";
import Forest from "./Forest";

// starting data
import input from "./data/input.json";
import { useState } from "react";

const testing = false;

function App() {
  const [treeMatrix] = useState(input.forest);
  const groundColor = "#15CB73";
  return (
    <div className="App">
      <Canvas camera={{ position: [4, 8, 20] }} shadows>
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
