import React from 'react';
// import {object} from './cube.js'
 import * as THREE from 'three';
export default class ObjectRender extends React.Component {

  createCube = () =>{
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.z += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.x += 0.01;
      // camera.position.z += 0.01;
      renderer.render( scene, camera );
    };

    animate();

  }
  componentDidMount(){
    this.createCube()
  }

  render(){
    return(
      <div>

      </div>
    )}

};
