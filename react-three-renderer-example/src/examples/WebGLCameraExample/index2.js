import React from 'react';
import ReactDOM from 'react-dom';

import THREE from 'three';
import ExampleBase from './../ExampleBase';

import React3 from 'react-three-renderer';

import Info from './Info';

import PointCloud from './PointCloud2';

import TrackballControls from '../../ref/trackball2';

const perspectiveCameraName = 'perspectiveCamera';
const orthographicCameraName = 'orthographicCamera';
const mainCameraName = 'mainCamera';

const perspectiveCameraRotation = new THREE.Euler(0, Math.PI, 0);
const orthographicCameraRotation = new THREE.Euler(0, Math.PI, 0);

const spherePosition = new THREE.Vector3(10 + 10, 10 + 90, 200);
const sphere2Position = new THREE.Vector3(10 + 10, 5 + 90, 200);
const sphere3Position = new THREE.Vector3(10 + 10, 0 + 90, 200);
const sphere4Position = new THREE.Vector3(10 + 10, -5 + 90, 200);
const sphere5Position = new THREE.Vector3(10 + 10, -10 + 90, 200);

const sphere6Position = new THREE.Vector3(5.5 + 10, 100, 200);
const sphere7Position = new THREE.Vector3(7 + 10, 95, 200);
const sphere8Position = new THREE.Vector3(8.5 + 10, 90, 200);
const sphere9Position = new THREE.Vector3(7 + 10, 85, 200);
const sphere10Position = new THREE.Vector3(5.5 + 10, 80, 200);

const letterKPosition = new THREE.Vector3(17, 90, 200);

// const sphere11Position = new THREE.Vector3(0, 0, 150);
// const sphere12Position = new THREE.Vector3(0, 0, 150);
// const sphere13Position = new THREE.Vector3(0, 0, 150);
// const sphere14Position = new THREE.Vector3(0, 0, 150);
// const sphere15Position = new THREE.Vector3(0, 0, 150);
// const sphere16Position = new THREE.Vector3(0, 0, 150);

class WebGLCameraExample extends ExampleBase {
  constructor(props, context) {
    super(props, context);

    const r = Date.now() * 0.0005;

    this.state = {
      ... this.state,
      meshPosition: new THREE.Vector3(Math.cos(r), Math.sin(r), Math.sin(r)).multiplyScalar(700),
      childPosition: new THREE.Vector3(70 * Math.cos(2 * r), 150, 70 * Math.sin(r)),
      child2Position: new THREE.Vector3(70 * Math.cos(2 * r), 150, 70 * Math.sin(r)),
      activeCameraName: perspectiveCameraName,
      paused: false,
      mainCameraPosition: new THREE.Vector3(0, 0, 2500),
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown, false);

    const controls = new TrackballControls(this.refs.mainCamera,
      ReactDOM.findDOMNode(this.refs.react3));

    controls.rotateSpeed = 0.3;
    controls.zoomSpeed = 1.8;
    controls.panSpeed = 2.8;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    controls.addEventListener('change', () => {
      this.setState({
        mainCameraPosition: this.refs.mainCamera.position,
      });
    });

    this.controls = controls;
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown, false);

    this.controls.dispose();
    delete this.controls;
  }

  _onKeyDown = (event) => {
    switch (event.keyCode) {
      default:
        break;
      case 79: // O
        this.setState({
          activeCameraName: orthographicCameraName,
        });
        break;
      case 80: // P
        this.setState({
          activeCameraName: perspectiveCameraName,
        });

        break;
    }
  };

  _onAnimate = () => {
    this.controls.update();

    if (this.state.paused) {
      return;
    }

    const r = Date.now() * 0.0005;

    this.setState({
      r,
      meshPosition: new THREE.Vector3(Math.cos(r), Math.sin(r), Math.sin(r)).multiplyScalar(700),
      childPosition: new THREE.Vector3(70 * Math.cos(2 * r), 0, 70 * Math.sin(r)),
      child2Position: new THREE.Vector3(70 * Math.cos(4 * r), 150, 70 * Math.sin(r)),
    });
  };

  _pause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };

  _frame = () => {
    this.setState({
      paused: false,
    }, () => {
      this._onAnimate();
      this.setState({
        paused: true,
      });
    });
  };

  render() {
    const {
      width,
      height,
    } = this.props;

    const {
      meshPosition,
      childPosition,
      child2Position,
      r,
    } = this.state;

    const aspectRatio = 0.85;

    return (<div>
      <Info
        pause={this._pause}
        frame={this._frame}
      />
      <React3
        ref="react3"
        width={width}
        height={height}
        antialias
        onAnimate={this._onAnimate}
      >
        <viewport // ***** K-EDIT
          x={0}
          y={0}
          width={width}
          height={height / 2}
          cameraName={this.state.activeCameraName}
        />
        <viewport // ***** K-EDIT
          x={0}
          y={height / 2}
          width={width}
          height={height / 2}
          cameraName={mainCameraName}
        />
        <scene>
          <perspectiveCamera
            ref="mainCamera"
            name={mainCameraName}
            fov={50}
            aspect={aspectRatio}
            near={1}
            far={10000}
            position={this.state.mainCameraPosition}
          />
          <object3D
            lookAt={meshPosition}
          >
            <perspectiveCamera
              name={perspectiveCameraName}
              fov={85 + 30 * Math.sin(0.5 * r)}
              aspect={aspectRatio}
              near={150}
              far={meshPosition.length() * 2}
              rotation={perspectiveCameraRotation}
            />
            <orthographicCamera
              name={orthographicCameraName}
              left={0.5 * width / -2}
              right={0.5 * width / 2}
              top={height / 2}
              bottom={height / -2}
              near={150}
              far={meshPosition.length() * 2}
              rotation={orthographicCameraRotation}
            />

            <mesh
              position={spherePosition}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere2Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere3Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere4Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere5Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere6Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere7Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere8Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere9Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

            <mesh
              position={sphere10Position}
            >
              <sphereGeometry
                radius={1}
                widthSegments={16 * 2}
                heightSegments={8 * 2}
              />
              <meshBasicMaterial
                color={0xFFFF00}
                wireframe
                wireframeLinewidth={1} // ***** K-EDIT
                // wireframeLinejoin={"bevel"} // ***** K-EDIT
              />
            </mesh>

          </object3D>
          <cameraHelper
            cameraName={this.state.activeCameraName}
          />
          <object3D
            position={meshPosition}
          >
            <mesh>
              <sphereGeometry
                radius={300}
                widthSegments={6}
                heightSegments={1}
              />
              <meshBasicMaterial
                color={0xFFCCCC}
                wireframe
                wireframeLinewidth={2}
              />
            </mesh>
            <mesh>
              <sphereGeometry
                radius={230}
                widthSegments={6}
                heightSegments={2}
              />
              <meshBasicMaterial
                color={0xFFCCCC}
                refractionRatio={0.22}
                morphTargets="True"
                wireframe
                wireframeLinewidth={1.5}
              />
            </mesh>
            <mesh>
              <sphereGeometry
                radius={170}
                widthSegments={10}
                heightSegments={3}
              />
              <meshBasicMaterial
                color={0xFF6666}
                refractionRatio={0.22}
                morphTargets="True"
                wireframe
                wireframeLinewidth={1.2}
              />
            </mesh>
            <mesh>
              <sphereGeometry
                radius={120}
                widthSegments={16}
                heightSegments={4}
              />
              <meshBasicMaterial
                color={0x990000}
                refractionRatio={0.22}
                morphTargets="True"
                wireframe
                wireframeLinewidth={1.1}
              />
            </mesh>
            <mesh>
              <sphereGeometry
                radius={75}
                widthSegments={16 * 2}
                heightSegments={6}
              />
              <meshBasicMaterial
                color={0x9933FF}
                refractionRatio={0.22}
                morphTargets="True"
                wireframe
              />
            </mesh>
            <mesh>
              <sphereGeometry
                radius={50}
                widthSegments={16 * 3}
                heightSegments={9}
              />
              <meshBasicMaterial
                color={0x99CCFF}
                refractionRatio={0.22}
                morphTargets="True"
                wireframe
              />
            </mesh>
            <mesh>
              <sphereGeometry
                radius={25}
                widthSegments={16 * 4}
                heightSegments={12}
              />
              <meshBasicMaterial
                color={0x99FFFF}
                refractionRatio={0.22}
                morphTargets="True"
                wireframe
              />
            </mesh>
            <mesh>
              <sphereGeometry
                radius={15}
                widthSegments={16 * 5}
                heightSegments={15}
              />
              <meshBasicMaterial
                color={0x00FF00}
                refractionRatio={0.22}
                morphTargets="True"
                wireframe
              />
            </mesh>
            <mesh
              position={childPosition}
            >
              <sphereGeometry
                radius={25}
                widthSegments={16 * 6}
                heightSegments={2}
              />
              <meshBasicMaterial
                color={0x000000}
                // wireframe  // ***** K-EDIT
              />
            </mesh>
            <mesh
              position={child2Position}
            >
              <sphereGeometry
                radius={5}
                widthSegments={16 * 3}
                heightSegments={8 * 3}
              />
              <meshBasicMaterial
                color={0xCCCCCC}
                // wireframe  // ***** K-EDIT
              />
            </mesh>
          </object3D>
          {
            <PointCloud />
          }
        </scene>
      </React3>
    </div>);
  }
}

export default WebGLCameraExample;
