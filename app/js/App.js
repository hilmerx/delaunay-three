import CircularWeb from './modules/CircularWeb.js'
import SceneManager from './modules/SceneManager.js'
import Entity from './modules/Entity.js'
import * as THREE from 'three'
import {Noise} from 'noisejs'

let canvas1 = document.getElementById('canvas1')
let canvas2 = document.getElementById('canvas2')

var noise = new Noise(Math.random())
let circularWeb = new CircularWeb(25, canvas2)



let master = new SceneManager()
master.camera.position.z = 20

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





function render() {
    requestAnimationFrame(render)
    master.update()
}
render()


//first box


let entity = {
    geometry: new THREE.BoxGeometry(1,1,2),
    material: new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff})
}

let boxSpin = new Entity(entity)

boxSpin.addTrait((mesh)=>{
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.001
})

master.addEntity(boxSpin)
master.update()



//second box

let entity2 = {
    geometry: new THREE.BoxGeometry(2,1,2),
    material: new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff})
}

let boxSpin2 = new Entity(entity2)

boxSpin2.addTrait((mesh)=>{
    mesh.rotation.x += 0.02    
    mesh.rotation.y += 0.001
})
boxSpin2.set(3, 0, 0)
master.addEntity(boxSpin2)



function makeTriangle(tri){
    var off = -500
    var meshMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});

    var geom = new THREE.Geometry(); 
    var v1 = new THREE.Vector3(tri[0].x + off,tri[0].y + off, tri[0].z);
    var v2 = new THREE.Vector3(tri[1].x + off,tri[1].y + off, tri[1].z);
    var v3 = new THREE.Vector3(tri[2].x + off,tri[2].y + off, tri[2].z);


    geom.vertices.push(v1);
    geom.vertices.push(v2);
    geom.vertices.push(v3);


    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );


    var object = new THREE.Mesh( geom, meshMaterial);
    object.doubleSided = true;
    scene.add(object);


    let entityBufferSettings = {
        geometry: geom,
        material: meshMaterial
    }

    let entBuffer = new Entity(entityBufferSettings)

    master.addEntity(entBuffer)

}

//     makeTriangle(tri)

// triangles.forEach(tri => {
//     makeTriangle(tri)
//     // console.log(tri);
// })


/*
        var render = function () {
        // camera.position.set( 0, 20, 100 );
        controls.update();

        requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
        render();

*/






/*

        let vertPairs = []
        vertices.forEach(v=>{ 
            vertPairs.push({
                x:v[0],
                y:v[1],
                matches: []
            })
        })

        vertPairs.forEach(v => {
            for (var i = 0; i < triangles.length; i++) {
                for (var j = 0; j < triangles[i].length; j++) {
                    if(v.x === triangles[i][j].x && v.y === triangles[i][j].y){
                        v.matches.push([i, j])
                    }
                }
            }
        })



        function makeZ(){
            vertPairs.forEach(vert =>{
                let div, z
                div = 400
                z = noise.perlin2(vert.x / div, vert.y / div) * 100
                div = 800
                z = noise.perlin2(vert.x / div, vert.y / div) * 200 + z
                div = 150
                z = noise.perlin2(vert.x / div, vert.y / div) * 50 + z
                vert.matches.forEach(m=>{
                    triangles[m[0]][m[1]].z = z
                })
            })
        }
        // makeZ()

        triangles.forEach(tri => {
            tri.forEach(vert => {
                let div = 300
                vert.z = noise.perlin2(vert.x / div, vert.y / div) * 100
            })
        })*/




