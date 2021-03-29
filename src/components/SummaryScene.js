import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader  } from "three/examples/jsm/loaders/GLTFLoader";

import model from "../Model/laptop7.glb";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";

function Model(props) {


  const gltf = useLoader(GLTFLoader, model);
  useFrame(() => {});
  return (
    <primitive
      {...props}
      object={gltf.scene}
      position={[0, props.rotationNum / 450, -5]}
      // scale={[8, 8, 8]}
      scale={[4, 4, 4]}
      rotation={[-props.rotationNum / 500 + 0.3, 0, 0]}
    />
  );
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead

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

export default function Summary3D({ rotateNumber }) {
  return (
    <div>
      <h1 className="sticky-inner">
        {/* Project &amp;
        <br /> work experience */}
        <Canvas>
          {/* <ambientLight intensity={3} /> */}
          <ambientLight intensity={1.5} />
          {/* <pointLight intensity={1.01} position={[10, 15, 40]} /> */}
          <Suspense fallback={<Box />}>
            {<Model rotationNum={rotateNumber} />}
          </Suspense>
          <Html
            position={[0.5, -0.1, -1]}
            distanceFactor={1}
            center={true}
            fullscreen={true}
            style={{
              color: "white",
              textAlign: "right",
              fontSize: "3em",
              right: "0",
            }}
          >
            Project &amp; work experience
            {/* <p
              // style={{
              //   color: "white",
              //   textAlign: "right",
              //   fontSize: "3em",
              //   right: "0",
                
              // }}
            >
              Project &amp; work experience
            </p> */}
          </Html>
          {/* <OrthographicCamera  makeDefault={true} position={[0, 0, 1]} /> */}

          <PerspectiveCamera makeDefault={true} position={[0.1, 0, 2]} />
          <OrbitControls
            enableZoom={false}
            screenSpacePanning
            dampingFactor={0.1}
            rotateSpeed={0.1}
          />
          {/* <PointerLockControls /> */}
        </Canvas>
      </h1>
    </div>
  );
}
