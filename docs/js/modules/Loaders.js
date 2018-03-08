import CircularWeb from './CircularWeb.js'
import SceneManager from './SceneManager.js'
import * as THREE from 'three'
import Entity from './Entity.js'
import {spawnTriangle} from './Logic.js'
import {Noise} from 'noisejs'



export function loadScene(verts){

    //Make triangle calculation
    var noise = new Noise(Math.random())
    let circularWeb = new CircularWeb(verts, canvas2)


    //Init scene
    let master = new SceneManager(canvas1)
    master.camera.position.z = 2000


    //Lights
    let light1 = {
        type: new THREE.AmbientLight( 0x888888),
        pos: [50,50,50]
    }
    master.addLight(light1)

    let light2 = {
        type: new THREE.PointLight( 0xffffff, 1, 100 ),
        pos: [50,50,50]
    }
    master.addLight(light2)


    //Triangles
    let triangles = circularWeb.triangles
    triangles.forEach(tri => {
        let bufferSettings = spawnTriangle(tri, new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff}))

        let triBuffer = new Entity(bufferSettings)
        master.addEntity(triBuffer)
    })


    //Create Perlin-noise terrain

    master.entities.forEach(mesh=>{
        let tri = mesh.mesh.geometry.vertices

        let div = 200
        let height = 100

        let div2 = 500
        let height2 = 100

        tri.forEach(v=>{
            v.z = noise.perlin2(v.x / div, v.y / div) * height
            v.z = v.z + noise.perlin2(v.x / div2, v.y / div2) * height2
        })
    })

    return master
}
