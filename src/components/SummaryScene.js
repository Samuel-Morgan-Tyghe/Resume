import ReactDOM from "react-dom";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "../Model/CV-SUMMARY.glb";

function Model(props) {
  const gltf = useLoader(GLTFLoader, model);
  return <primitive object={gltf.scene} position={[-0.2, -1, 0]}  scale={[3,3,2]} />;
}
function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }
function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }
  
  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[1, 4, 2]}
        // rotation={[0, 180, 0]}
        lookAt={[0, 0, 0]}
        penumbra={2}


        castShadow
      />
    );
  }

export default function Summary3D() {
  return (
    <div id="summary3d">
      <Canvas>
        <ambientLight intensity={1.5} />
        {/* <KeyLight brightness={2.6} color={"#C65D57"} /> */}
        <pointLight intensity={1} position={[10, 15, 40]} />
        {/* <FillLight brightness={3.6} color={"#bdefff"} /> */}
        {/* <RimLight brightness={10.1} color={"#EEE9E9"} /> */}
        {/* <Model /> */}
        <Suspense fallback={<Box />}>{ <Model/>}</Suspense>

        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
}
