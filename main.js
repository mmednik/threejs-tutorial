var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color:0xff0000});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

cube.position.z = -5;

let animate = () => {
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();