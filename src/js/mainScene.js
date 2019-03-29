const placegroundScenePipelineModule = () => {

    let clock = new THREE.Clock();
    let imageLoader = new THREE.ImageLoader();
    let modelLoader = new THREE.FBXLoader;

    const raycaster = new THREE.Raycaster();
    const tapPosition = new THREE.Vector2();

    let surface, mixer, cubeCamera;

    const initXrScene = ({scene, camera, renderer}) => {
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
        surface.receiveShadow = true;
        surface.rotateX(-Math.PI / 2);
        surface.position.set(0, 0, 0);

        scene.add(surface);
        scene.add(new THREE.AmbientLight(0x404040, 5));

        cubeCamera = new THREE.CubeCamera(1, 1000, 128);

        camera.position.set(0, 0, 0);
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
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                    child.material.map = catTexture;
                    child.material.needsUpdate = true;
                }
            });

            model.rotation.y = Math.PI;
            model.position.set(pointX, 0.0, pointZ + 1);
            model.scale.setScalar(0.015);

            mixer = new THREE.AnimationMixer(model);
            let action = mixer.clipAction(model.animations[0]);
            action.play();
            XR.Threejs.xrScene().scene.add(model);
        });

    }

    function loadBottle(pointX, pointZ) {
        let bottleStickerTexture = new THREE.Texture();
        imageLoader.load('textures/BottleSticker.png', (image) => {
            bottleStickerTexture.image = image;
            bottleStickerTexture.needsUpdate = true;
        });

        let bottleGlassMaterialTexture = new THREE.Texture();
        imageLoader.load('textures/999999-1.png', (image) => {
            bottleStickerTexture.image = image;
            bottleStickerTexture.needsUpdate = true;
        });

        let bottleGlassMaterial = new THREE.MeshStandardMaterial({
            //c color: 0xffffff,
            envMap: cubeCamera.renderTarget.texture,
            //map: bottleGlassMaterialTexture,
            //alphaMap: bottleGlassMaterialTexture,
            metalness: 0.5,
            roughness: 0.2,
            opacity: 0.8,
            transparent: true,
            //premultipliedAlpha: true,
        });

        modelLoader.load('models/Bottle.fbx', (model) => {
            model.traverse((child) => {
                    if (child.isMesh) {
                        child.name === 'StickerNew' ? child.material.map = bottleStickerTexture : child.material = bottleGlassMaterial;
                        child.castShadow = true;
                        child.recieveShadow = true;
                        child.material.needsUpdate = true;
                    }
                }
            );

            model.rotation.y = Math.PI;
            model.position.set(pointX, 0.0, pointZ);
            model.scale.setScalar(0.1);

            cubeCamera.position.set(pointX, 15, pointZ);
            model.add(cubeCamera);

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

        tapPosition.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        tapPosition.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(tapPosition, camera);

        const intersects = raycaster.intersectObject(surface);

        if (intersects.length == 1 && intersects[0].object == surface) {
            placeObjects(intersects[0].point.x, intersects[0].point.z)
        }
    };
    return {
        // Pipeline modules need a name. It can be whatever you want but must be unique within your app.
        name: 'mezcalport',
        // onStart is called once when the camera feed begins. In this case, we need to wait for the
        // XR.Threejs scene to be ready before we can access it to add content. It was created in
        // XR.Threejs.pipelineModule()'s onStart method.
        onStart: ({canvas, canvasWidth, canvasHeight}) => {
            const {scene, camera, renderer} = XR.Threejs.xrScene();  // Get the 3js scene from xr3js.

            initXrScene({scene, camera, renderer}); // Add objects to the scene and set starting camera position.

            canvas.addEventListener('touchstart', placeObjectTouchHandler, true);  // Add touch listener.


            animate();

            function animate() {
                requestAnimationFrame(animate);
                let delta = clock.getDelta();
                if (mixer) mixer.update(delta);
             //   cubeCamera.update(renderer, scene);
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
        placegroundScenePipelineModule(),
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

