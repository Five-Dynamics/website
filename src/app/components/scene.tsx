    'use client';
    import React, { useEffect, useRef } from 'react';
    import * as THREE from 'three';

    const Scene = () => {
      const mountRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x1e1e1e); // Set background color

        // Add to DOM
        if (mountRef.current) {
          mountRef.current.appendChild(renderer.domElement);
        }

        // Example object (cube)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
        animate();

        // Handle resizing
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
          if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
          }
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
      }, []);

      return <div ref={mountRef} />;
    };

    export default Scene;
