import React from 'react';
import THREE from 'three';

function generateRandomColor() {
  const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  return randomColor;
}

class PointCloud extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.pointCloudVertices = [];

    for (let i = 0; i < 100000; i++) {
      const vertex = new THREE.Vector3();

      vertex.x = THREE.Math.randFloatSpread(2000);
      vertex.y = THREE.Math.randFloatSpread(2000);
      vertex.z = THREE.Math.randFloatSpread(2000);


      this.pointCloudVertices.push(vertex);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (<points>
      <geometry vertices={this.pointCloudVertices} />
      <pointsMaterial
        color={generateRandomColor()}
      />
    </points>);
  }
}

export default PointCloud;
