
import * as THREE from "https://unpkg.com/three@0.150.1/build/three.module.js";

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry (Cube)
const geometry = new THREE.BoxGeometry();

// Material (Green color)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Mesh (Cube object)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation function
function animate() {
  requestAnimationFrame(animate);

  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Start animation
animate();