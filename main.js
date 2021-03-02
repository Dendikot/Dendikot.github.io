const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = async function() {
    var scene = new BABYLON.Scene(engine);

    var box = BABYLON.MeshBuilder.CreateBox("box", {});
    var box2 = box.clone(box);
    box2.position.x = 20;
    box2.position.y = 20;
    scene.createDefaultCameraOrLight(true, true, true);
    //scene.createDefaultEnvironment();

    const xr = await scene.createDefaultXRExperienceAsync({
        // ask for an ar-session
        uiOptions: {
            sessionMode: "immersive-ar",
        },
    });

    return scene;
};


// Add your code here matching the playground format
const scene = createScene(); //Call the createScene function
/*scene.then(()=>{
    engine.runRenderLoop(function () {
        if (scene) {
            scene.render();
        }
    });
})*/

// Register a render loop to repeatedly render the scene
/*engine.runRenderLoop(function () {
    scene.render();

});*/
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
