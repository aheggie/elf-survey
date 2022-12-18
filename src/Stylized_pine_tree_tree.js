/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Batuhan13 (https://sketchfab.com/Batuhan13)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/stylized-pine-tree-tree-deadcadc915545a7b4701dbe6eb419e8
title: Stylized Pine Tree Tree
*/

import React, { useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF("./models/stylized_pine_tree_tree-transformed.glb");
  const instances = useMemo(
    () => ({
      TreelowStylizedTree: nodes.tree_low001_StylizedTree_0,
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
          <instances.TreelowStylizedTree />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/stylized_pine_tree_tree-transformed.glb");