import Delaunay from './Delaunay.js'
import {Noise} from 'noisejs'
let del = new Delaunay() //varför funkar

export default class CircularWeb {
    constructor(points, canvas){
        this.vertices = new Array(points),
        this.i
        this.x
        this.y
        this.triangles1D
        this.triangles = []
        // console.log(Delaunay)

        this.createTriangles(canvas)
        this.draw(canvas)
    }

    createTriangles(canvas, Delaunay){
        for(this.i = this.vertices.length; this.i--; ) {
            do {
                this.x = Math.random() - 0.5
                this.y = Math.random() - 0.5
            } while(this.x * this.x + this.y * this.y > 0.25)

            this.x = (this.x * 0.96875 + 0.5) * canvas.width
            this.y = (this.y * 0.96875 + 0.5) * canvas.height

            this.vertices[this.i] = [this.x, this.y]
        }


        this.triangles1D = del.triangulate(this.vertices)
    }

    draw(canvas){
        console.log(canvas)
        let ctx = canvas.getContext('2d')

        for(this.i = this.triangles1D.length; this.i; ) {
            let buffer = []
            ctx.beginPath()
            --this.i; ctx.moveTo(this.vertices[this.triangles1D[this.i]][0], this.vertices[this.triangles1D[this.i]][1])
            buffer.push({
                x:this.vertices[this.triangles1D[this.i]][0],
                y:this.vertices[this.triangles1D[this.i]][1]
            })

            --this.i; ctx.lineTo(this.vertices[this.triangles1D[this.i]][0], this.vertices[this.triangles1D[this.i]][1])
            buffer.push({
                x:this.vertices[this.triangles1D[this.i]][0],
                y:this.vertices[this.triangles1D[this.i]][1]
            })

            --this.i; ctx.lineTo(this.vertices[this.triangles1D[this.i]][0], this.vertices[this.triangles1D[this.i]][1])
            buffer.push({
                x:this.vertices[this.triangles1D[this.i]][0],
                y:this.vertices[this.triangles1D[this.i]][1]
            })

            ctx.closePath()
            ctx.stroke()
            this.triangles.push(buffer)
        }
    }
}