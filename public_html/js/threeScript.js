// import { OBJLoader } from 'https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/OBJLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth / 2, window.innerHeight / 2 );
document.body.appendChild( renderer.domElement );


const loader = new THREE.ObjectLoader();
const geometry = loader.load("./obj/M8/M8.obj");
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });//"./obj/M8/M8.mtl";
//material.side = THREE.DoubleSide
const m8 = new THREE.Mesh( geometry, material );
document.canvas = scene.add( m8 );

camera.position.z = 5;

//const loader = new THREE.ObjectLoader();

// loader.load(
//     // resource URL
//     "./obj/M8/M8.obj",

//     // onLoad callback
//     // Here the loaded data is assumed to be an object
//     function ( obj ) {
//         // Add the loaded object to the scene
//         scene.add( obj );
//     },
//
//     // onProgress callback
//     function ( xhr ) {
//         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
//     },
//
//     // onError callback
//     function ( err ) {
//         console.error( 'An error happened' );
//     }
// );


// Alternatively, to parse a previously loaded JSON structure
// const object = loader.parse( a_json_object );

// scene.add( object );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

// three/examples/jsm/controls/OrbitControls.js

// 'https://cdn.skypack.dev/pin/three@v0.134.0-dfARp6tVCbGvQehLfkdx/mode=imports/unoptimized/examples/jsm/controls/OrbitControls.js';

// https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/OBJLoader.js

// https://github.com/mrdoob/three.js/blob/3f1dce330f9a872ad164e10e481ab1bb6aeffa30/examples/jsm/loaders/OBJLoader.js