import * as THREE from 'three'
import './style.css'

//* Orange Cube
//! SCENE 
const scene = new THREE.Scene()

//! MESH

//* Shape
const geometry = new THREE.BoxGeometry(1, 1, 1)

//* It Looks 
const material = new THREE.MeshBasicMaterial({color: 'orange'})

//* Create and Add Mesh
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//! SIZES 
const sizes = {
    width: 800, 
    height: 600
}

//! CAMERA                                FieldOfView(degrees), AspectRatio(sizes) 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

//* Position  x = side  y = up/down  z = forward/backward
camera.position.z = 3
// camera.position.y = 2
// camera.position.x = 2

//* Rotation
//* Scale

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