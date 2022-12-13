import { Canvas } from "@react-three/fiber";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [2, 4, 10] }} shadows>
        <axesHelper args={[10]} />
        <gridHelper args={[10, 10]} />
      </Canvas>
    </div>
  );
}

export default App;
