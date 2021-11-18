//import * as THREE from 'https://cdn.skypack.dev/three@v0.134.0';
const scene = new THREE.Scene();
// import { OrbitControls } from 'https://cdn.skypack.dev/three@v0.134.0-dfARp6tVCbGvQehLfkdx/examples/jsm/controls/OrbitControls.js';
// const controls = new OrbitControls();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg")
});
render.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
renderer.render( scene, camera);
// document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// three/examples/jsm/controls/OrbitControls.js

// 'https://cdn.skypack.dev/pin/three@v0.134.0-dfARp6tVCbGvQehLfkdx/mode=imports/unoptimized/examples/jsm/controls/OrbitControls.js';
