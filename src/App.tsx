import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./App.css";

const testing = false;

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [2, 4, 10] }} shadows>
        {testing ? <Stats /> : null}
        <axesHelper args={[10]} />
        <gridHelper args={[10, 10]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
