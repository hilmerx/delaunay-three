import {loadScene} from './modules/Loaders.js'

let canvas1 = document.getElementById('canvas1')
let canvas2 = document.getElementById('canvas2')


Promise.all([
    loadScene(74)
]).then(([master])=>{

    function render() {
        requestAnimationFrame(render)
        master.update()
    }
    render()
})















