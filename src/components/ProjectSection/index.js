// import { Canvas } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from "three";

// import React, { useRef,Suspense } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function Ship(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/shipScene.gltf");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group
//         position={[0, -2.39, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={[0.41, 0.41, 0.41]}
//       >
//         <mesh geometry={nodes.ship_1.geometry} material={materials.Default} />
//         <mesh geometry={nodes.ship_2.geometry} material={materials.wood} />
//         <mesh geometry={nodes.ship_3.geometry} material={materials.Metal} />
//         <mesh geometry={nodes.ship_4.geometry} material={materials.Wood2} />
//         <mesh geometry={nodes.ship_5.geometry} material={materials.Window} />
//         <mesh geometry={nodes.ship_6.geometry} material={materials.Door} />
//         <mesh geometry={nodes.ship_7.geometry} material={materials.Rope} />
//         <mesh geometry={nodes.ship_8.geometry} material={materials.Kant} />
//         <mesh geometry={nodes.ship_9.geometry} material={materials.Segel} />
//         <mesh geometry={nodes.ship_10.geometry} material={materials.Ram} />
//       </group>
//     </group>
//   );
// }

//   return (
//     <>
//       <p>AAAAAAAAAAA</p>
//       <Canvas>
//         <ambientLight intensity={0.5}/>
//         <Suspense fallback={null}>
//                 <Ship/>
//         </Suspense>
//       </Canvas>
//     </>
//   );
// };

// export default Ship;
