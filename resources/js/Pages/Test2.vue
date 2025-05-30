<script setup>
import * as THREE from "three";

let renderer, scene, camera;
let shape;
let controls;

init();

render();
function init() {

     scene = new THREE.Scene();
     camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);

     renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 0xff5486, });
     shape = new THREE.Mesh(geometry, material);

    shape.position.set(0,0,0)
    scene.add(shape);

    // camera.position.y = 160;
    camera.position.z = 4;
    camera.lookAt(new THREE.Vector3(0,0,0));

    // controls = new THREE.OrbitControls (camera, renderer.domElement);
    // const gridXZ = new THREE.GridHelper(100, 10);
    // gridXZ.setColors( new THREE.Color(0xff5486), new THREE.Color(0xff5486) );
    // scene.add(gridXZ);


}
 // control = new THREE.Or
function render(){
    requestAnimationFrame(render);

    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
    // shape.translateY(1).add()
    renderer.render(scene, camera);
}


</script>

<template>

</template>

<style scoped>

</style>
