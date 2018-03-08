import Vec3 from './Vec3'
import * as THREE from 'three'

export default class Entity {
    constructor(entity){
        this.geometry = entity.geometry
        this.material = entity.material
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.traits = []
        this.pos = new Vec3()
        this.ID = this.mesh.uuid
    }

    addTrait(trait) {
        this.traits.push(trait)
    }

    set(x, y ,z) {
        this.pos.x = x
        this.pos.y = y
        this.pos.z = z
    }

    update(scene){
        let meshChildren = scene.children
        meshChildren.forEach(meshChild=>{
            if (this.ID === meshChild.uuid){
                this.traits.forEach(trait => {
                    trait(meshChild)
                })
                meshChild.position.set(this.pos.x, this.pos.y, this.pos.z)
            }
        })
    }
}

