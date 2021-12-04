import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export const initStar = 
function () {
  'use strict'
  /* 	'To actually be able to display anything with Three.js, we need three things:
		A scene, a camera, and a renderer so we can render the scene with the camera.'

	   		- https://threejs.org/docs/#Manual/Introduction/Creating_a_scene 		*/

  var scene, camera, renderer

  /* We need this stuff too */
  var container,
    aspectRatio,
    HEIGHT,
    WIDTH,
    fieldOfView,
    nearPlane,
    farPlane,
    mouseX,
    mouseY,
    windowHalfX,
    windowHalfY,
    // stats,
    geometry,
    starStuff,
    materialOptions,
    stars

  init()
  animate()

  function init () {
    container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.top = 0
    container.style.zIndex = -2
    setTimeout(() => {
      const a = document.getElementById('home')
      if (a) {
        a.appendChild(container)
        a.style.overflow = 'hidden'
      }
    }, 2000)
    // console.log(document.getElementById("ceshi"), "ddddd");

    HEIGHT = window.innerHeight + 100
    WIDTH = window.innerWidth
    aspectRatio = WIDTH / HEIGHT
    fieldOfView = 75
    nearPlane = 1
    farPlane = 1000
    mouseX = 0
    mouseY = 0

    windowHalfX = WIDTH / 2
    windowHalfY = HEIGHT / 2

    /* 	fieldOfView — Camera frustum vertical field of view.
			aspectRatio — Camera frustum aspect ratio.
			nearPlane — Camera frustum near plane.
			farPlane — Camera frustum far plane.

			- https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera

		 	In geometry, a frustum (plural: frusta or frustums)
		 	is the portion of a solid (normally a cone or pyramid)
		 	that lies between two parallel planes cutting it. - wikipedia.		*/

    camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    )

    // Z positioning of camera

    camera.position.z = farPlane / 2

    scene = new THREE.Scene({ antialias: true })
    // scene.fog = new THREE.FogExp2(0x000000, 0.0003);
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.x = 10
    pointLight.position.y = 250
    pointLight.position.z = 130
    scene.add(pointLight)
    // The wizard's about to get busy.
    // starForge();
    makeParticles()

    // check for browser Support
    if (webGLSupport()) {
      // yeah?  Right on...
      renderer = new THREE.WebGLRenderer({ alpha: true })
    } else {
      // No?  Well that's okay.
      renderer = new THREE.CanvasRenderer()
    }

    renderer.setClearColor(0x000011, 1)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(WIDTH, HEIGHT)
    container.appendChild(renderer.domElement)

    // stats = new Stats();
    // stats.domElement.style.position = "absolute";
    // stats.domElement.style.top = "0px";
    // stats.domElement.style.right = "0px";
    // container.appendChild(stats.domElement);

    window.addEventListener('resize', onWindowResize, false)
    document.addEventListener('mousemove', onMouseMove, false)
  }

  function animate () {
    requestAnimationFrame(animate)
    render()
    // stats.update();
  }

  function render () {
    camera.position.x += (mouseX - camera.position.x) * 0.005
    camera.position.y += (-mouseY - camera.position.y) * 0.005
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }

  function webGLSupport () {
    /* 	The wizard of webGL only bestows his gifts of power
			to the worthy.  In this case, users with browsers who 'get it'.		*/

    try {
      var canvas = document.createElement('canvas')
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      )
    } catch (e) {
      // console.warn('Hey bro, for some reason we\'re not able to use webGL for this.  No biggie, we\'ll use canvas.');
      return false
    }
  }

  function onWindowResize () {
    // Everything should resize nicely if it needs to!
    var WIDTH = window.innerWidth
    var HEIGHT = window.innerHeight

    camera.aspect = aspectRatio
    camera.updateProjectionMatrix()
    renderer.setSize(WIDTH, HEIGHT)
  }

  // 建立一个粒子对象的随机函数
  function makeParticles () {
    var particleCount = 3000
    var particles = new THREE.Geometry()
    // ptexture = new THREE.TextureLoader().load("https://s18.postimg.org/e3p5gsxyh/particle_A.png"),
    var ptexture = new THREE.TextureLoader().load(
      'https://s22.postimg.cc/w7b1iilr5/particle_A.png'
    )
    var pMaterial = new THREE.PointsMaterial({
      // color: 0xFFFFFF,
      map: ptexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: true,
      size: 8
    })

    // now create the individual particles
    for (var p = 0; p < particleCount; p++) {
      // create a particle with random x position (-120, 120)
      var pX = Math.random() * 2000 - 1000
      var pY = Math.random() * 2000 - 1000
      var pZ = Math.random() * 2000 - 1000
      var particle = new THREE.Vector3(pX, pY, pZ)

      particles.vertices.push(particle)
    }
    var particleSystem = new THREE.Points(particles, pMaterial)
    particleSystem.sortParticles = true
    scene.add(particleSystem)
  }
  function onMouseMove (e) {
    mouseX = e.clientX - windowHalfX
    mouseY = e.clientY - windowHalfY
  }
}