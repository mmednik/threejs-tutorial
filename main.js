var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusGeometry(8, 1, 5, 30);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var element = new THREE.Mesh(geometry, material);
scene.add(element);

element.position.z = -25;

let animate = () => {
  element.rotation.x += 0.01;
  camera.position.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
