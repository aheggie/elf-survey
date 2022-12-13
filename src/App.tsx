import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./App.css";
import Ground from "./Ground";
import Lights from "./Lights";
import Forest from "./Forest";

const testing = false;

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [4, 8, 20] }} shadows>
        {testing ? <Stats /> : null}
        <axesHelper args={[10]} />
        <gridHelper args={[10, 10]} />
        <OrbitControls />
        <Forest />
        <Ground color={"#15CB73"} />
        <Lights />
      </Canvas>
    </div>
  );
}

export default App;
