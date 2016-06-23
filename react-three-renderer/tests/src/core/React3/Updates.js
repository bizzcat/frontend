import React from 'react';
import ReactDOM from 'react-dom';
import chai from 'chai';
import THREE from 'three';
import sinon from 'sinon';

module.exports = type => {
  const { testDiv, React3, mockConsole } = require('../../utils/initContainer')(type);

  const { expect } = chai;

  it('can replace internal components with composites and vice versa', () => {
    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene />
    </React3>, testDiv);

    mockConsole.expectThreeLog();

    let mounted = false;

    /* eslint-disable react/no-multi-comp */

    class MyScene extends React.Component {
      componentDidMount() {
        mounted = true;
      }

      componentWillUnmount() {
        mounted = false;
      }

      render() {
        return (<scene />);
      }
    }

    const MyResources = () => (<resources />);

    const Wrapper = (props) => {
      // debugger;

      if (props.internal) {
        return (<scene />);
      }

      if (props.res) {
        return (<MyResources />);
      }

      return (<MyScene />);
    };

    Wrapper.propTypes = {
      internal: React.PropTypes.bool,
      res: React.PropTypes.bool,
    };

    /* eslint-enable */

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <Wrapper
        internal
      />
    </React3>, testDiv);

    expect(mounted).to.equal(false);

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <Wrapper internal={false} />
    </React3>, testDiv);

    expect(mounted).to.equal(true);

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <Wrapper
        internal
      />
    </React3>, testDiv);

    expect(mounted).to.equal(false);

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <Wrapper
        res
      />
    </React3>, testDiv);
  });

  it('can replace internal components with composites and vice versa ' +
    'with a previous sibling', () => {
    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <viewport x={0} y={0} width={0} height={0} cameraName="test" />
      <scene />
    </React3>, testDiv);

    mockConsole.expectThreeLog();

    let mounted = false;

    /* eslint-disable react/no-multi-comp */

    class MyScene extends React.Component {
      componentDidMount() {
        mounted = true;
      }

      componentWillUnmount() {
        mounted = false;
      }

      render() {
        return (<scene />);
      }
    }

    const MyResources = () => (<resources />);


    const Wrapper = (props) => {
      if (props.internal) {
        return (<scene />);
      }

      if (props.res) {
        return (<MyResources />);
      }

      return (<MyScene />);
    };

    Wrapper.propTypes = {
      internal: React.PropTypes.bool,
      res: React.PropTypes.bool,
    };

    /* eslint-enable */

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <viewport x={0} y={0} width={0} height={0} cameraName="test" />
      <Wrapper
        internal
      />
    </React3>, testDiv);

    expect(mounted).to.equal(false);

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <viewport x={0} y={0} width={0} height={0} cameraName="test" />
      <Wrapper internal={false} />
    </React3>, testDiv);

    expect(mounted).to.equal(true);

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <viewport x={0} y={0} width={0} height={0} cameraName="test" />
      <Wrapper
        internal
      />
    </React3>, testDiv);

    expect(mounted).to.equal(false);

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <viewport x={0} y={0} width={0} height={0} cameraName="test" />
      <Wrapper
        res
      />
    </React3>, testDiv);
  });

  it('can replace component rendered by a composite', () => {
    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene />
    </React3>, testDiv);

    mockConsole.expectThreeLog();
    /* eslint-disable react/no-multi-comp */

    let cameraReference = null;

    const cameraRef = (_cameraReference) => {
      cameraReference = _cameraReference;
    };

    let meshReference = null;

    const meshRef = (_meshReference) => {
      meshReference = _meshReference;
    };

    let boxReference = null;

    const boxRef = (_boxReference) => {
      boxReference = _boxReference;
    };

    let matReference = null;

    const matRef = (_matReference) => {
      matReference = _matReference;
    };

    let groupReference = null;

    const groupRef = (_groupReference) => {
      groupReference = _groupReference;
    };

    let objReference = null;

    const objRef = (_objReference) => {
      objReference = _objReference;
    };

    let subTestReference = null;

    const subTestRef = (_subTestReference) => {
      subTestReference = _subTestReference;
    };


    class TestComponent extends React.Component {
      static propTypes = {
        type: React.PropTypes.string.isRequired,
      };

      render() {
        switch (this.props.type) {
          case 'camera':
            return (<perspectiveCamera ref={cameraRef} />);
          case 'mesh':
            return (<mesh ref={meshRef}>
              <boxGeometry
                ref={boxRef}
                width={5}
                height={5}
                depth={5}
              />
              <meshBasicMaterial
                ref={matRef}
              />
            </mesh>);
          case 'group':
            return (<group
              ref={groupRef}
            />);
          case 'deeper':
            return (<TestComponent
              type="group"
              ref={subTestRef}
            />);
          default:
            break;
        }

        return (<object3D
          ref={objRef}
        />);
      }
    }

    /* eslint-enable */

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <TestComponent type="camera" />
      </scene>
    </React3>, testDiv);

    expect(cameraReference).not.to.be.null();
    expect(cameraReference).to.be.instanceOf(THREE.PerspectiveCamera);
    expect(meshReference).to.be.null();
    expect(boxReference).to.be.null();
    expect(matReference).to.be.null();
    expect(groupReference).to.be.null();
    expect(objReference).to.be.null();
    expect(subTestReference).to.be.null();

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <TestComponent type="mesh" />
      </scene>
    </React3>, testDiv);

    expect(cameraReference).to.be.null();

    expect(meshReference).not.to.be.null();
    expect(boxReference).not.to.be.null();
    expect(matReference).not.to.be.null();

    expect(meshReference).to.be.instanceOf(THREE.Mesh);
    expect(boxReference).to.be.instanceOf(THREE.BoxGeometry);
    expect(matReference).to.be.instanceOf(THREE.MeshBasicMaterial);

    expect(groupReference).to.be.null();
    expect(objReference).to.be.null();
    expect(subTestReference).to.be.null();

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <TestComponent type="group" />
      </scene>
    </React3>, testDiv);

    expect(cameraReference).to.be.null();
    expect(meshReference).to.be.null();
    expect(boxReference).to.be.null();
    expect(matReference).to.be.null();
    expect(groupReference).not.to.be.null();

    expect(groupReference).to.be.instanceOf(THREE.Group);

    expect(objReference).to.be.null();
    expect(subTestReference).to.be.null();

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <TestComponent type="asdf" />
      </scene>
    </React3>, testDiv);

    expect(cameraReference).to.be.null();
    expect(meshReference).to.be.null();
    expect(boxReference).to.be.null();
    expect(matReference).to.be.null();
    expect(groupReference).to.be.null();
    expect(objReference).not.to.be.null();

    expect(objReference).to.be.instanceOf(THREE.Object3D);
    expect(subTestReference).to.be.null();

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <TestComponent type="deeper" />
      </scene>
    </React3>, testDiv);

    expect(cameraReference).to.be.null();
    expect(meshReference).to.be.null();
    expect(boxReference).to.be.null();
    expect(matReference).to.be.null();
    expect(objReference).to.be.null();

    expect(subTestReference).not.to.be.null();
    expect(groupReference).not.to.be.null();

    expect(subTestReference).to.be.instanceOf(TestComponent);
    expect(groupReference).to.be.instanceOf(THREE.Group);
  });

  it('updates refs correctly when a parent component remounts', () => {
    const boxRef = sinon.spy();
    const meshRef = sinon.spy();

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <scene>
          <mesh
            onMouseEnter={() => {}}
            ref={meshRef}
          >
            <boxGeometry
              width={1}
              height={1}
              depth={1}
              ref={boxRef}
            />
            <meshBasicMaterial
              color={0x00ff00}
            />
          </mesh>
        </scene>
      </scene>
    </React3>, testDiv);

    mockConsole.expect('Warning: Foreign prop onMouseEnter found in mesh.');
    mockConsole.expectThreeLog();

    sinon.assert.calledOnce(boxRef);
    expect(boxRef.lastCall.args[0]).not.to.be.null();

    sinon.assert.calledOnce(meshRef);
    expect(meshRef.lastCall.args[0]).not.to.be.null();

    const boxRef2 = sinon.spy();

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <scene>
          <mesh
            onMouseEnter={() => {}}
            ref={meshRef}
          >
            <boxGeometry
              width={1}
              height={1}
              depth={1}
              ref={boxRef2}
            />
            <meshBasicMaterial
              color={0x00ff00}
            />
          </mesh>
        </scene>
      </scene>
    </React3>, testDiv);

    sinon.assert.calledTwice(boxRef);
    expect(boxRef.lastCall.args[0]).to.be.null();

    sinon.assert.calledOnce(boxRef2);
    expect(boxRef2.lastCall.args[0]).not.to.be.null();

    sinon.assert.calledTwice(meshRef);
    expect(meshRef.lastCall.args[0]).not.to.be.null();
    expect(meshRef.lastCall.args[0], 'It should be a different mesh').not.to.equal(
      meshRef.getCall(0).args[0]);

    mockConsole.expect('Warning: updating prop ' +
      'onMouseEnter ( function onMouseEnter() {} ) for MeshDescriptor');

    const meshRef2 = sinon.spy();

    ReactDOM.render(<React3
      width={800}
      height={600}
    >
      <scene>
        <scene>
          <mesh
            onMouseEnter={() => {}}
            ref={meshRef2}
          >
            <boxGeometry
              width={1}
              height={1}
              depth={1}
              ref={boxRef2}
            />
            <meshBasicMaterial
              color={0x00ff00}
            />
          </mesh>
        </scene>
      </scene>
    </React3>, testDiv);

    sinon.assert.calledThrice(boxRef2);
    expect(boxRef2.getCall(1).args[0]).to.be.null();
    expect(boxRef2.lastCall.args[0]).not.to.be.null();

    sinon.assert.calledThrice(meshRef);
    expect(meshRef.lastCall.args[0]).to.be.null();

    sinon.assert.calledOnce(meshRef2);
    expect(meshRef2.lastCall.args[0]).not.to.be.null();
    expect(meshRef2.lastCall.args[0], 'It should be a different mesh').not.to.equal(
      meshRef.lastCall.args[0]);

    mockConsole.expect('Warning: updating prop ' +
      'onMouseEnter ( function onMouseEnter() {} ) for MeshDescriptor');
  });
};
