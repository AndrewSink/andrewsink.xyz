// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const container = document.getElementById('threejs-container');
const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x000000, 0); // the default
container.appendChild(renderer.domElement);

// Load the STL model
const loader = new THREE.STLLoader();
let head;
let isHeadLoaded = false;
loader.load('/models/scan30.stl', function (geometry) {
    const material = new THREE.MeshNormalMaterial();
    head = new THREE.Mesh(geometry, material);
    head.scale.set(.1, 0.1, 0.1); // Adjust the scale as needed
    head.rotation.x = -Math.PI / 2; // Rotate -90 degrees around the X axis
    scene.add(head);
    isHeadLoaded = true;

    if (isHeadLoaded == true) {
        console.log('loaded')
    }

});

// Set camera position
camera.position.z = 10;

// Handle mouse movement
document.addEventListener('mousemove', onMouseMove, false);
let mouseX = 0;
let mouseY = 0;
function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Adjust canvas size on window resize
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    if (isHeadLoaded) {
        head.rotation.y = mouseX * 0.5; // Adjust the sensitivity
        head.rotation.x = mouseY * -0.5; // Adjust the sensitivity
    }
    renderer.render(scene, camera);
}
animate();