import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const Star = ({ position }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z += 0.01;
      if (ref.current.position.z > 1) {
        ref.current.position.z = -1;
      }
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.002, 8, 8]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
};

const Stars = ({ count = 2000 }) => {
  const stars = useRef([]);
  const { viewport } = useThree();

  useEffect(() => {
    stars.current = Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).multiplyScalar(1),
    }));
  }, [count]);

  return (
    <>
      {stars.current.map((star, i) => (
        <Star key={i} position={star.position} />
      ))}
    </>
  );
};

const SpaceBackground = () => {
  const containerRef = useRef();
  const nebulaRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / maxScroll;
      
      if (containerRef.current) {
        containerRef.current.style.transform = `scale(${1 + scrollPercentage * 0.5})`;
      }
      if (nebulaRef.current) {
        nebulaRef.current.style.opacity = Math.max(0, 1 - scrollPercentage * 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="space-background">
      <div 
        ref={nebulaRef} 
        className="nebula-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
          transition: 'opacity 0.5s ease-out',
        }}
      />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;