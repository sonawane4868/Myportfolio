import React from 'react'
import './Mymain.css'
import { useRef } from 'react';

import { Canvas, useFrame } from 'react-three-fiber';
import { Circle, softShadows, Sphere } from "@react-three/drei"
import { MeshWobbleMaterial } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';

export default function Mymain() {
    function Sphere({position , args ,color ,speed ,mapName}){
        const map = new THREE.TextureLoader().load(mapName);


        const mesh =useRef(null);
        useFrame(()=>{mesh.current.rotation.x =mesh.current.rotation.y += 0.01});
      
        
        return(
        <mesh  castShadow position={position} ref={mesh}>
        <sphereGeometry attach="geometry" args={args}/>
        <meshStandardMaterial attach="material" color={color} map={map} speed={speed} factor={0.6}/> 
        </mesh>
        );
        

    }
  return (
    <div className='main mx-0 container-fluid pb-4' >
      <div className='row w-90 mx-auto'>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 ' >
        <h1 className='heading text-white' ><span className="span">A</span>B<span className='span'>O</span>U<span className='span'>T</span>  <span className='span'>M</span>E</h1>
        <p className='skillw w-100 mt-4'>
        Hello, I'm Aditya Arun Sonawane, a 2022 graduate in Electronics and Telecommunication Engineering from Mumbai University. I've honed my web development and design skills through various platforms, specializing in frontend development and React.js framework. I've successfully completed multiple projects, integrating Bootstrap and animation tools. Currently, I freelance as a web developer, continuously learning and enhancing my skills. Passionate about crafting exceptional web experiences, I thrive on challenges and client satisfaction, consistently delivering high-quality work.
          </p>
          <div>
          <a href="https://github.com/sonawane4868" target="_blank" rel="noreferrer"><img src='./github.png' className='mainimg mt-4 '  /></a>
          <a href='https://in.linkedin.com/in/adityasonawaneee?trk=people-guest_people_search-card' target="_blank" rel="noreferrer"><img src='./linkedin.png' className='mainimg mt-4 ms-3' /></a>
          <a href="https://www.instagram.com/sonawane4868" target="_blank" rel="noreferrer"><img src='./insta.png' className='mainimg mt-4 ms-3' /></a>
          <a href="https://www.facebook.com/addi.sonawane.7" target="_blank" rel="noreferrer"><img src='./face.png' className='mainimg mt-4 ms-3' /></a>
          </div>
          
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-0S' >
            <div className='  text-center sm-d-block  h-100 canvas' >
        <Canvas shadows camera={{position:[-5,2,10] ,fav:[60] }}   >
    
    <ambientLight intensity={0.3}/>
    
   
   <group>
    
    <Sphere position={[0,1,0]} args={[5]} mapName="./gol.jpg" class="gol" speed={2}/>
    
   </group>
   
    
    <OrbitControls/>
   </Canvas>
   </div> 
   </div>
   </div>
        
      
    </div>
  )
}
