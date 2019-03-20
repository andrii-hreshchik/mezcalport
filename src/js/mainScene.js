const placeGroundScenePipelineModule = () => {

    let clock = new THREE.Clock();
    let imageLoader = new THREE.ImageLoader();
    let modelLoader = new THREE.FBXLoader();

    const raycaster = new THREE.Raycaster();
    const tapPosition = new THREE.Vector2();

    let surface, mixer;

    const initXrScene = ({scene, camera}) => {
        console.log('initXrScene');
        surface = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0xffff00,
                transparent: true,
                opacity: 0.0,
                side: THREE.DoubleSide
            })
        );

        surface.rotateX(-Math.PI / 2);
        surface.position.set(0, 0, 0);
        scene.add(surface);

        scene.add(new THREE.AmbientLight(0x404040, 5));
        camera.position.set(0, 3, 0)
    };

    const placeObjects = (pointX, pointZ) => {
        loadCat(pointX, pointZ);
        loadBottle(pointX, pointZ);
    };

    function loadCat(pointX, pointZ) {
        let catTexture = new THREE.Texture();
        imageLoader.load('textures/Joven_AlbedoTransparency.png', (image) => {
            catTexture.image = image;
            catTexture.needsUpdate = true;
        });

        modelLoader.load('models/Joven_Animations.fbx', (model) => {
            let scaleVector = new THREE.Vector3(0.10, 0.10, 0.10);
            let scale = Object.assign({}, scaleVector);

            model.rotation.set(0.0, Math.random() * 360, 0.0);
            model.position.set(pointX, 0.0, pointZ);
            model.scale.set(scale.x, scale.y, scale.z);
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                    child.material.map = catTexture;
                    child.material.needsUpdate = true;
                }
            });

            mixer = new THREE.AnimationMixer(model);
            let action = mixer.clipAction(model.animations[0]);
            action.play();
            XR.Threejs.xrScene().scene.add(model);

        });
    }

    function loadBottle(pointX, pointZ) {
        let bottleTexture = new THREE.Texture();
        imageLoader.load('textures/BottleSticker.png', (image) => {
            bottleTexture.image = image;
            bottleTexture.needsUpdate = true;
        });

        modelLoader.load('models/Bottle.fbx', (model) => {
            let scaleVector = new THREE.Vector3(0.30, 0.30, 0.30);
            let scale = Object.assign({}, scaleVector);

            model.rotation.set(0.0, Math.random() * 360, 0.0);
            model.position.set(pointX, 0.0, pointZ);
            model.scale.set(scale.x, scale.y, scale.z);
            model.traverse((child) => {
                    if (child.isMesh) {
                        if (child.name === 'StickerNew') {
                            child.material.map = bottleTexture;
                        }
                        child.castShadow = true;
                        child.recieveShadow = true;
                        child.material.needsUpdate = true;
                    }
                }
            );
            XR.Threejs.xrScene().scene.add(model);
        });

    }

    const placeObjectTouchHandler = (e) => {
        console.log('placeObjectTouchHandler');
        if (e.touches.length == 2) {
            XR.XrController.recenter()
        }

        if (e.touches.length > 2) {
            return
        }
        const {scene, camera} = XR.Threejs.xrScene();

        // calculate tap position in normalized device coordinates (-1 to +1) for both components.
        tapPosition.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        tapPosition.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;

        // Update the picking ray with the camera and tap position.
        raycaster.setFromCamera(tapPosition, camera);

        // Raycast against the "surface" object.
        const intersects = raycaster.intersectObject(surface);

        if (intersects.length == 1 && intersects[0].object == surface) {
            placeObjects(intersects[0].point.x, intersects[0].point.z)
        }
    };
    return {
        // Pipeline modules need a name. It can be whatever you want but must be unique within your app.
        name: 'mezcal',
        // onStart is called once when the camera feed begins. In this case, we need to wait for the
        // XR.Threejs scene to be ready before we can access it to add content. It was created in
        // XR.Threejs.pipelineModule()'s onStart method.
        onStart: ({canvas, canvasWidth, canvasHeight}) => {
            const {scene, camera} = XR.Threejs.xrScene();  // Get the 3js sceen from xr3js.

            initXrScene({scene, camera}); // Add objects to the scene and set starting camera position.

            canvas.addEventListener('touchstart', placeObjectTouchHandler, true);  // Add touch listener.

            animate();

            function animate() {
                requestAnimationFrame(animate);
                let delta = clock.getDelta();
                if (mixer) mixer.update(delta);
            }

            // Sync the xr controller's 6DoF position and camera paremeters with our scene.
            XR.XrController.updateCameraProjectionMatrix({
                origin: camera.position,
                facing: camera.quaternion,
            })
        },
    }
};

const onxrloaded = () => {
    XR.addCameraPipelineModules([  // Add camera pipeline modules.
        // Existing pipeline modules.
        XR.GlTextureRenderer.pipelineModule(),       // Draws the camera feed.
        XR.Threejs.pipelineModule(),                 // Creates a ThreeJS AR Scene.
        XR.XrController.pipelineModule(),            // Enables SLAM tracking.
        XRExtras.AlmostThere.pipelineModule(),       // Detects unsupported browsers and gives hints.
        XRExtras.FullWindowCanvas.pipelineModule(),  // Modifies the canvas to fill the window.
        XRExtras.Loading.pipelineModule(),           // Manages the loading screen on startup.
        XRExtras.RuntimeError.pipelineModule(),      // Shows an error image on runtime error.
        // Custom pipeline modules.
        placeGroundScenePipelineModule(),
    ]);

    // Open the camera and start running the camera run loop.
    XR.run({canvas: document.getElementById('camerafeed')})
};

// Show loading screen before the full XR library has been loaded.
const load = () => {
    XRExtras.Loading.showLoading({onxrloaded})
};

window.onload = () => {
    window.XRExtras ? load() : window.addEventListener('xrextrasloaded', load)
};

