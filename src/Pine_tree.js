/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Andriy Shekh (https://sketchfab.com/sheh5262)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pine-tree-e52769d653cd4e52a4acff3041961e65
title: Pine tree
*/

import { useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF("./models/pine_tree-transformed.glb");
  const instances = useMemo(
    () => ({
      LeavesLeavs: nodes.Leaves001_Leavs_0,
      TrankTrank: nodes.Trank001_Trank_0,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function Model(props) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <instances.LeavesLeavs />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <instances.TrankTrank />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/pine_tree-transformed.glb");