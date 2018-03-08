import {loadScene} from './modules/Loaders.js'

//mängden punkter som skapar trianglar
let vertices = 300

Promise.all([
    loadScene(vertices)
]).then(([master])=>{

    function render() {
        requestAnimationFrame(render)
        master.update()
    }
    render()
})















