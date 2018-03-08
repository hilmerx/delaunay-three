import * as THREE from 'three'
THREE.OrbitControls = require('three-orbit-controls')(THREE)

export default class SceneManager {
    constructor(){

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000)

        this.controls = new THREE.OrbitControls( this.camera )
        this.renderer = new THREE.WebGLRenderer({canvas: canvas1, anitalias: true})
        this.entities = []
        this.lights = []


        this.renderer.setClearColor(0xeefff999)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        this.update()
    }

    updateEntities(){
        let scene = this.scene
        this.entities.forEach(entity => {
            entity.update(scene)
        })
    }

    addLight(newLight){

        let light = newLight.type
        light.position.set(...newLight.pos)
        this.scene.add(light)
    }

    addEntity(entity){
        this.entities.push(entity)
        this.scene.add(entity.mesh)
        let ent = this.entities[this.entities.length-1]
        let entInMesh = this.scene.children[this.scene.children.length-1]
        entInMesh.position.set(ent.pos.x, ent.pos.y, ent.pos.z) 
    }

    update(){
        this.controls.update()
        this.updateEntities()
        this.renderer.render(this.scene, this.camera)
    }
}

