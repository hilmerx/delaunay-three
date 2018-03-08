import * as THREE from 'three'

export function spawnTriangle(tri, mat){
    let off = -500
    let material = mat

    let geom = new THREE.Geometry() 
    let v1 = new THREE.Vector3(tri[0].x + off,tri[0].y + off, tri[0].z)
    let v2 = new THREE.Vector3(tri[1].x + off,tri[1].y + off, tri[1].z)
    let v3 = new THREE.Vector3(tri[2].x + off,tri[2].y + off, tri[2].z)

    geom.vertices.push(v1)
    geom.vertices.push(v2)
    geom.vertices.push(v3)

    geom.faces.push( new THREE.Face3( 0, 1, 2 ) )


    return {
        geometry: geom,
        material: material
    }
}


// find common edges

// let vertPairs = []
// vertices.forEach(v=>{ 
//     vertPairs.push({
//         x:v[0],
//         y:v[1],
//         matches: []
//     })
// })

// vertPairs.forEach(v => {
//     for (var i = 0; i < triangles.length; i++) {
//         for (var j = 0; j < triangles[i].length; j++) {
//             if(v.x === triangles[i][j].x && v.y === triangles[i][j].y){
//                 v.matches.push([i, j])
//             }
//         }
//     }
// })

