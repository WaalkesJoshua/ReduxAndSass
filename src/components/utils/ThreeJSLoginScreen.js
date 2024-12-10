import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';

const LoginScreen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add some stars to the scene
    const starGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < 5000; i++) {
      let j = 0.1 * i;
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(
        Math.random() * (5 * j) - 2.5 * j,
        Math.random() * (5 * j) - 2.5 * j,
        Math.random() * (5 * j) - 2.5 * j
      );
      scene.add(star);
    }

    // Add a glowing sun to the scene
    const sunGeometry = new THREE.SphereGeometry(2, 16, 16);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, 0, -5);
    scene.add(sun);

    // Add some planets to the scene
    const planetGeometry = new THREE.SphereGeometry(1, 16, 16);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    for (let i = 0; i < 5; i++) {
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      planet.position.set(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      );
      scene.add(planet);
    }

    // Add some comets to the scene
    const cometGeometry = new THREE.ConeGeometry(0.5, 2, 16);
    const cometMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < 10; i++) {
      const comet = new THREE.Mesh(cometGeometry, cometMaterial);
      comet.position.set(
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25
      );
      comet.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      scene.add(comet);
    }

    // Add some spaceships to the scene
    const spaceshipGeometry = new THREE.BoxGeometry(1, 1, 2);
    const spaceshipMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    for (let i = 0; i < 5; i++) {
      const spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
      spaceship.position.set(
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25
      );
      spaceship.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );
      scene.add(spaceship);
    }

    // Set the camera position and rotation
    camera.position.set(0, 0, 10);
    camera.lookAt(sun.position);

    // Add some effects to make it look like the user is rotating the perspective
    let mouseX = 0;
    let mouseY = 0;
    let rotationX = 0;
    let rotationY = 0;
    canvasRef.current.addEventListener('mousemove', (event) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
      rotationX += mouseX * 0.00005;
      rotationY += mouseY * 0.00005;
    });

    // Animate the scene
    function animate() {
      requestAnimationFrame(animate);
      camera.position.x += 0.03;
      camera.position.y += 0.03;
      camera.position.z += 0.03;
      camera.rotation.x = rotationX;
      camera.rotation.y = rotationY;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <canvas style={{ width: '100%', height: '100vh' }} ref={canvasRef} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'white',
            alignItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
