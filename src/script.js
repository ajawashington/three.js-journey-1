import * as THREE from 'three'
import './style.css'

//! SCENE 
//* Orange Cube
const scene = new THREE.Scene()

//! OBJECTS
//* Shape
const geometry = new THREE.BoxGeometry(1, 1, 1)

//* How It Looks 
const material = new THREE.MeshBasicMaterial({color: 'orange'})

//* Create Mesh
const mesh = new THREE.Mesh(geometry, material)

//* Transform Object
// mesh.position.x = 0.7
// mesh.position.y = - 0.6
// mesh.position.z = 1
//* Another way to do it
mesh.position.set(0.7, -0.6, 1)

//* Normalize position values
// mesh.position.normalize()

//* Add Mesh to Scene
scene.add(mesh)

//* Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
//* Another way to do it
mesh.scale.set(2, 0.5, 0.5)

//* Rotation

//* How to fix a locked axis
mesh.rotation.reorder('YXZ')

mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.z = Math.PI * 0
//* Another way to do it
// mesh.scale.set(2, 0.5, 0.5)


//* Axes Helper 
//* red = x green = y blue = z
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

//! SIZES 
const sizes = {
    width: 800, 
    height: 600
}

//! CAMERA                                FieldOfView(degrees), AspectRatio(sizes) 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

//* Position  x = side  y = up/down  z = forward/backward
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3




//* Add Camera to Scene
scene.add(camera)

//! RENDERER
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


//* Resize
renderer.setSize(sizes.width, sizes.height)

//* Render
renderer.render(scene, camera)