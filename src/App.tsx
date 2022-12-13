import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./App.css";
import Matilda from "./Matilda";

const testing = false;

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [2, 4, 10] }} shadows>
        {testing ? <Stats /> : null}
        <axesHelper args={[10]} />
        <gridHelper args={[10, 10]} />
        <OrbitControls />
        <Matilda scale={1} position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
