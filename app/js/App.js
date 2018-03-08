import CircularWeb from './modules/CircularWeb.js'
import * as THREE from 'three'
// import OrbitControls from 'three-orbit-controls'
import {Noise} from 'noisejs'

THREE.OrbitControls = require('three-orbit-controls')(THREE)
let canvas1 = document.getElementById('canvas1')
let canvas2 = document.getElementById('canvas2')

var noise = new Noise(Math.random())
let circularWeb = new CircularWeb(25, canvas2)


class SceneManager {
    constructor(){

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000)

        this.controls = new THREE.OrbitControls( this.camera )
        this.renderer = new THREE.WebGLRenderer({canvas: canvas1, anitalias: true})

        this.update()
    }

    update(){
        // camera.position.set( 0, 20, 100 );
        this.controls.update()
        // requestAnimationFrame(this.update())
        this.renderer.render(this.scene, this.camera)
    }
}

let scene = new SceneManager()


// function makeTriangle(tri){
//     var off = -500
//     var meshMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});

//     var geom = new THREE.Geometry(); 
//     var v1 = new THREE.Vector3(tri[0].x + off,tri[0].y + off, tri[0].z);
//     var v2 = new THREE.Vector3(tri[1].x + off,tri[1].y + off, tri[1].z);
//     var v3 = new THREE.Vector3(tri[2].x + off,tri[2].y + off, tri[2].z);


//     geom.vertices.push(v1);
//     geom.vertices.push(v2);
//     geom.vertices.push(v3);


//     geom.faces.push( new THREE.Face3( 0, 1, 2 ) );


//     var object = new THREE.Mesh( geom, meshMaterial);
//     object.doubleSided = true;
//     scene.add(object);
// }


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




var light1 = new THREE.AmbientLight( 0x888888 )
scene.scene.add( light1 )

var light2 = new THREE.PointLight( 0xffffff, 1, 100 )
light2.position.set( 50, 50, 50 )
scene.scene.add( light2 )

scene.camera.position.z = 300

var geometry = new THREE.BoxGeometry(1,1,2)
var material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff})
var cube = new THREE.Mesh(geometry, material)
scene.scene.add(cube)
scene.update()
