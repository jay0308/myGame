const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(10,125,2);
const material = new THREE.MeshBasicMaterial( { color: 0x3b474e,gradientMap:"threeTone" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometryPlayer = new THREE.BoxGeometry(1,1,1);
const materialPlayer = new THREE.MeshBasicMaterial( { color: 0x049ef4,gradientMap:"threeTone" } );
const playerCube = new THREE.Mesh( geometryPlayer, materialPlayer );
playerCube.position.z = 2;
playerCube.position.y = -25;
scene.add( playerCube );


const controls = new window.OrbitControls( camera, renderer.domElement );

camera.position.z = 5;

let move = false

let setCameraBtn = document.getElementById("setCameraBtn");
setCameraBtn.addEventListener("click",function(event){
	controls.enabled = false;
	move = true
})

function animate() {
	requestAnimationFrame( animate );
	
	if(move && playerCube.position.y < 125){
		camera.position.y += 0.1
		playerCube.position.y += 0.1

	}
	
	controls.update();
	renderer.render( scene, camera );
}
animate();