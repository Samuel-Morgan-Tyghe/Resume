import ReactDOM from "react-dom";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "../Model/laptop.glb";
// import { Html } from "@react-three/drei"
import {
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
  Html,
} from "@react-three/drei";

function Model(props) {
  console.log("🚀 ~ file: SummaryScene.js ~ line 10 ~ Model ~ props", props);
  const gltf = useLoader(GLTFLoader, model);
  useFrame(() => {
    //  console.log(gltf.scene.children[0].rotation.x = gltf.scene.children[0].rotation.y += 0.01 )
    // gltf.scene.current.rotation.x = gltf.scene.current.rotation.y += 0.01;
    // gltf.scene.children[0].rotation.x = gltf.scene.children[0].rotation.x += 0.01;
  });
  return (
    <primitive
      {...props}
      object={gltf.scene}
      position={[0, props.rotationNum / 450, -5]}
      scale={[8, 8, 8]}
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

export default function Summary3D({ rotateNumber }) {
  return (
    <div>
      <h1 className="sticky-inner">
        {/* Project &amp;
        <br /> work experience */}
        <Canvas>
          <ambientLight intensity={1.5} />
          <pointLight intensity={1.01} position={[10, 15, 40]} />
          <Suspense fallback={<Box />}>
            {<Model rotationNum={rotateNumber} />}
          </Suspense>
          <Html
            position={[0.5, -0.1, -1]}
            distanceFactor={1}
            center={true}
            fullscreen={true}
          >
            <p
              style={{
                width: "100%",
                backgroundBlendMode: "overlay",
                color: "white",
                position: "initial",
                textAlign: "right",
                fontSize: "3em",
                right: "0",
              }}
            >
              Project &amp; work experience
            </p>
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
