import React from 'react';
import { Dropdown } from 'react-bootstrap'
import { Canvas } from 'react-three-fiber';
import { OrbitControls, TorusKnot } from 'drei'

/**
 * function to create a box object on the canvas with mesh and color
 */
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="yellow" />
    </mesh>

  )
}

/**
 * exporting the canvas as a React component to be displayed
 * adds lighting and spotlight to the Mesh
 */
export default function ThreeDemo() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <TorusKnot>
        <meshLambertMaterial attach="material" color="yellow" />
      </TorusKnot>
    </Canvas>
  )
}