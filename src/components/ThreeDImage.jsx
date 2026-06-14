import React, { useEffect, useRef, useState } from 'react';

export default function ThreeDImage() {
  const containerRef = useRef(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if Three.js is already on window
    if (window.THREE) {
      setThreeLoaded(true);
      return;
    }

    // Check if the script has already been added by another instance
    let script = document.querySelector('script[src*="three.min.js"]');
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.async = true;
      script.onload = () => {
        setThreeLoaded(true);
      };
      document.head.appendChild(script);
    } else {
      // Script exists, wait for it to load completely and populate window.THREE
      const checkInterval = setInterval(() => {
        if (window.THREE) {
          setThreeLoaded(true);
          clearInterval(checkInterval);
        }
      }, 100);
      return () => clearInterval(checkInterval);
    }
  }, []);

  useEffect(() => {
    if (!threeLoaded) return;

    const THREE = window.THREE;
    const container = containerRef.current;
    if (!container) return;

    // Get size
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.6, 7.0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    scene.add(dirLight);

    // Neon glows
    const cyanLight = new THREE.PointLight(0x00E5FF, 2.5, 10);
    cyanLight.position.set(-3.5, -0.5, 2);
    scene.add(cyanLight);

    const greenLight = new THREE.PointLight(0x00E676, 2.5, 10);
    greenLight.position.set(3.5, -0.5, -2);
    scene.add(greenLight);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    
    // Group to hold our rotating objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Create a reflective showroom podium (the stage)
    const podiumGeometry = new THREE.CylinderGeometry(2.3, 2.5, 0.22, 64);
    const podiumMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f0f15,
      roughness: 0.18,
      metalness: 0.85,
    });
    const podium = new THREE.Mesh(podiumGeometry, podiumMaterial);
    podium.position.y = -1.7;
    mainGroup.add(podium);

    // Add a glowing neon ring around the top edge of the podium
    const ringGeometry = new THREE.RingGeometry(2.35, 2.40, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00E5FF,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.58;
    mainGroup.add(ring);

    // Load the transparent scooter texture
    let scooterMesh;
    textureLoader.load(
      '/assets/gaura_main_transparent.png',
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        
        // Aspect ratio is 2200 / 1445 = 1.52. Width 4.7, Height = 4.7 / 1.52 = 3.09
        const planeGeo = new THREE.PlaneGeometry(4.7, 3.09);
        const planeMat = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          alphaTest: 0.01,
          roughness: 0.25,
          metalness: 0.1
        });
        
        scooterMesh = new THREE.Mesh(planeGeo, planeMat);
        scooterMesh.position.y = -0.05;
        mainGroup.add(scooterMesh);

        // Add a flipped reflection of the scooter flat on the podium for realism
        const reflectionMat = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.18,
          side: THREE.DoubleSide,
          alphaTest: 0.01
        });
        const reflectionMesh = new THREE.Mesh(planeGeo, reflectionMat);
        reflectionMesh.position.y = -1.57;
        reflectionMesh.rotation.x = -Math.PI / 2;
        reflectionMesh.scale.set(1, 0.45, 1); // squish the reflection vertically
        mainGroup.add(reflectionMesh);

        setLoading(false);
      },
      undefined,
      (err) => {
        console.error('Error loading texture:', err);
        setLoading(false);
      }
    );

    // Add particle system
    const particleCount = 100;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2.2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.random() * 4 - 1.6; // y from -1.6 up to 2.4
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      speeds[i] = 0.003 + Math.random() * 0.006;
    }
    
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Draw a radial gradient circle in a canvas for the glowing particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext('2d');
    const pGrad = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    pGrad.addColorStop(0, 'rgba(0, 229, 255, 1)');
    pGrad.addColorStop(0.3, 'rgba(0, 230, 118, 0.8)');
    pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 16, 16);
    
    const pTexture = new THREE.CanvasTexture(pCanvas);
    const particlesMat = new THREE.PointsMaterial({
      size: 0.14,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    mainGroup.add(particleSystem);

    // Interaction variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationSpeed = 0.004;
    
    // Mouse Move Tilt (Parallax) variables
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / height) * 2 + 1;

      if (!isDragging) return;

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };

      // Rotate around Y-axis (spin)
      mainGroup.rotation.y += deltaMove.x * 0.008;
      // Tilt slightly on X-axis based on vertical drag
      mainGroup.rotation.x = Math.max(-0.25, Math.min(0.15, mainGroup.rotation.x + deltaMove.y * 0.004));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile devices
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1 && isDragging) {
        const deltaMove = {
          x: e.touches[0].clientX - previousMousePosition.x,
          y: e.touches[0].clientY - previousMousePosition.y
        };
        mainGroup.rotation.y += deltaMove.x * 0.01;
        mainGroup.rotation.x = Math.max(-0.25, Math.min(0.15, mainGroup.rotation.x + deltaMove.y * 0.005));
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    // Animation loop
    let animationFrameId;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation when the user is not actively dragging
      if (!isDragging) {
        mainGroup.rotation.y += rotationSpeed;
        
        // Smoothly interpolate back to default flat X tilt
        mainGroup.rotation.x += (0 - mainGroup.rotation.x) * 0.04;
      }

      // Parallax effect on the camera position based on mouse position
      if (!isDragging) {
        camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.04;
        camera.position.y += (0.6 + mouseY * 1.0 - camera.position.y) * 0.04;
        camera.lookAt(0, -0.2, 0);
      }

      // Animate the upward float of particles
      const positionsAttr = particlesGeo.attributes.position;
      if (positionsAttr) {
        for (let i = 0; i < particleCount; i++) {
          let y = positionsAttr.getY(i);
          y += speeds[i];
          if (y > 2.4) {
            y = -1.6; // loop back down to podium
          }
          positionsAttr.setY(i, y);
        }
        positionsAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup resources
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      scene.traverse((object) => {
        if (!object.isMesh && !object.isPoints) return;
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [threeLoaded]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
    >
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-sm rounded-3xl z-30">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-[rgba(0,229,255,0.1)]"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-[#00E5FF] border-r-[#00E676] animate-spin"></div>
          </div>
          <span className="text-sm font-bold text-[#00E5FF] tracking-widest uppercase mt-4 animate-pulse">
            Loading 3D Experience...
          </span>
        </div>
      )}
      
      {!loading && (
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] text-[#9E9EAF] font-bold tracking-widest uppercase flex items-center gap-1.5 pointer-events-none select-none z-20">
          <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping"></span>
          Drag to Rotate 3D
        </div>
      )}
    </div>
  );
}
