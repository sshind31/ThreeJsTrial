import * as THREE from "three";
import { TrackballControls } from "../build/TrackballControls.js";
import { DragControls } from "../build/DragControls.js";
init();
animate();
var scene, mycanvas, camera, renderer, light, cube, TrackBall, Drag;
var head, body, leftArm, rightArm, leftLeg, leftLeg, rightLeg, rightLeg;
function init() {
    scene = new THREE.Scene();

    mycanvas = document.getElementById("MyCanVas");
    const width = mycanvas.clientWidth;
    const height = mycanvas.clientHeight;

    camera = new THREE.PerspectiveCamera(100, width / height, 1, 10000);
    camera.position.set(0, 0, 150);
    // camera.position.z = 10;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xcaac6d);
    renderer.setSize(width, height);
    mycanvas.appendChild(renderer.domElement);

    // light = new THREE.DirectionalLight({ color: 0xe6bf10 });
    // scene.add(light);

    light = new THREE.AmbientLight(0x9b5fff);
    scene.add(light);

    light = new THREE.PointLight({ color: 0xee8d65 });
    light.position.set(50, -50, 50);
    scene.add(light);

    // TrackBall = new TrackballControls(camera, renderer.domElement);
    // TrackBall.enabled = true;

    // Drag = new DragControls(scene.children, camera, renderer.domElement);
    // Drag.addEventListener("drag", render);
    // Drag.enabled = true;

    const geometry = new THREE.CylinderGeometry(5,5);
    const material1 = new THREE.MeshPhongMaterial({
        color: 0x996633,
        // envMap: envMap, // optional environment map
        specular: 0x050505,
        shininess: 100
    })
    material1.shininess = 30;
    // const material1 = new THREE.MeshPhongMaterial({ color: 0xec2418 });
    cube = new THREE.Mesh(geometry, material1);
    // cube.position.set(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    cube.position.set(0, 0, 0);
    cube.rotateX(Math.PI/2);
    scene.add(cube);
    cube = new THREE.Mesh(geometry, material1);
    // cube.position.set(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    cube.position.set(15, 0, 0);
    cube.rotateX(Math.PI/2);
    scene.add(cube);
    cube = new THREE.Mesh(geometry, material1);
    // cube.position.set(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
    cube.position.set(-15, 0, 0);
    cube.rotateX(Math.PI/2);
    scene.add(cube);
}
function render() {
    renderer.render(scene, camera);
    // TrackBall.update();
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

document.addEventListener('mousewheel', (event) => {
    camera.position.z += event.deltaY / 100;
});
