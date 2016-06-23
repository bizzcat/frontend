> [Wiki](Home) » [[Internal Components]] » [[Advanced]] » **react3**

# react3

See [React3](Entry-Point). Handles renderer and canvas configuration.

Creates a [THREE.WebGLRenderer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer).

## Attributes
### context
``` one of [2d, 3d] ``` *``` required ```*: The rendering context.

Currently only '3d' is supported.

### onRecreateCanvas
``` function ``` *``` required ```*: This callback gets called every time the canvas is recreated.

This is currently internal usage only. This helps toggling of [antialias](#antialias).

### width
``` number ``` *``` required ```*: The width of the canvas and the default viewport.

### height
``` number ``` *``` required ```*: The height of the canvas and the default viewport.

### gammaInput
``` bool ```: Controls renderer gamma input.

See [THREE.WebGLRenderer#gammaInput](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.gammaInput).

### gammaOutput
``` bool ```: Controls renderer gamma output.

See [THREE.WebGLRenderer#gammaOutput](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.gammaOutput).

### sortObjects
``` bool ```: Controls renderer object sorting.

See [THREE.WebGLRenderer#sortObjects](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.sortObjects).

### mainCamera
``` string ```: The name of the camera to render into the canvas.

See [perspectiveCamera.name](perspectiveCamera#name).

If this value is not set, the scene can be rendered into the [&lt;viewport/&gt;](viewport) children of React3.

### onAnimate
``` function ```: This callback gets called before every frame.

### clearColor
``` one of types [THREE.Color, number, string] ```: The clear color of the renderer.

Is used as the first parameter for [THREE.WebGLRenderer#clearColor](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.setClearColor).

If the [`clearAlpha`](#clearalpha) and [`alpha`](#alpha) properties are set, `clearAlpha` will be used as the second parameter.

### clearAlpha
``` number ```: Used for the transparency of the canvas.

Expected range: 0 to 1, where 0 is clear and 1 is opaque.

Is used as the second parameter for [THREE.WebGLRenderer#clearColor](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.setClearColor).

If the [`clearColor`](#clearcolor) property is set, that will be passed as the first parameter.

Requires the [`alpha`](#alpha) property to be set.

### shadowMapEnabled
``` bool ```: Toggles shadowMap usage.

See [THREE.WebGLRenderer#shadowMapEnabled](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.shadowMapEnabled).

> **WARNING**: Updating this value will force all materials to refresh.

### shadowMapType
``` one of [THREE.BasicShadowMap, THREE.PCFShadowMap, THREE.PCFSoftShadowMap] ```: Controls the shadowMap type.

See [THREE.WebGLRenderer#shadowMapType](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.shadowMapType).

> **WARNING**: Updating this value will force all materials to refresh.

### shadowMapCullFace
``` one of [THREE.CullFaceNone, THREE.CullFaceBack, THREE.CullFaceFront, THREE.CullFaceFrontBack] ```: Controls shadowMap face culling.

See [THREE.WebGLRenderer#shadowMapCullFace](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.shadowMapCullFace).

> **WARNING**: Updating this value will force all materials to refresh.

### shadowMapDebug
``` bool ```: Toggles shadowMap debugging.

See [THREE.WebGLRenderer#shadowMapDebug](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.shadowMapDebug).

> **WARNING**: Updating this value will force all materials to refresh.

### pixelRatio
``` number ```: The pixel ratio of the renderer.

Preferred value: window.devicePixelRatio.

### precision
``` one of [highp, mediump, lowp] ```: Sets the precision of the renderer.

See [THREE.WebGLRenderer#precision](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.precision).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### alpha
``` bool ```: Toggles alpha setting of the renderer.

See [THREE.WebGLRenderer#alpha](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.alpha).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### premultipliedAlpha
``` bool ```: Toggles the premultipliedAlpha setting of the renderer.

See [THREE.WebGLRenderer#premultipliedAlpha](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.premultipliedAlpha).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### antialias
``` one of types [bool, number] ```: Toggles anti-aliasing of the renderer.

See [THREE.WebGLRenderer#antialias](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.antialias).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### stencil
``` bool ```: Toggles the stencil property of the renderer.

See [THREE.WebGLRenderer#stencil](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.stencil).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### preserveDrawingBuffer
``` bool ```: Toggles the preserveDrawingBuffer property of the renderer.

See [THREE.WebGLRenderer#preserveDrawingBuffer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.preserveDrawingBuffer).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### depth
``` bool ```: Toggles the depth property of the renderer.

See [THREE.WebGLRenderer#depth](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.depth).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### logarithmicDepthBuffer
``` bool ```: Toggles the logarithmicDepthBuffer property of the renderer.

See [THREE.WebGLRenderer#logarithmicDepthBuffer](http://threejs.org/docs/#Reference/Renderers/WebGLRenderer.logarithmicDepthBuffer).

> **WARNING**: Updating this value will re-create the whole canvas, which can be expensive.

### onRendererUpdated
``` function ```: This function gets called with the renderer as the first parameter.

Example callback:
```jsx
function callback(renderer) {
  if(renderer !== null) {
    console.log(renderer instanceOf THREE.WebGLRenderer); // true
  } else {
    // renderer is just destroyed or will be recreated soon
  }
}
```

The renderer gets created when:

- the react3 component is mounted
- the canvas gets recreated ( see [onRecreateCanvas](#onRecreateCanvas) )
  - this happens when you change some properties of react3.
- when the component is about to be unmounted or remounted
  - the value passed to the function will be null in this case

### forceManualRender
``` bool ```: Prevents re-rendering every frame.

You can use this to save some CPU and battery life.

Requires [onManualRenderTriggerCreated](#onmanualrendertriggercreated).

### onManualRenderTriggerCreated
``` function ```: 
This function will be called back with a 'Trigger' function in the first parameter.

Example callback:
```jsx
function callback(trigger) {
  console.log(trigger); // this is the trigger

  trigger(); // render next frame (recommended)

  trigger(true); // render immediately (advanced)
}
```

You can use this function to trigger manual renders.

See also: the [manual rendering example](https://github.com/toxicFork/react-three-renderer-example/blob/master/src/examples/ManualRendering/index.js).

This is what the trigger function looks like:

```jsx
function (renderThisFrame) {
  if (renderThisFrame) {
    // render immediately
    this._render();
  } else {
    if (this._renderRequest === null) {
      // ensure that there will be one render next frame
      this._renderRequest = requestAnimationFrame(this._render);
    }
  }
};
```

You can use this property without [forceManualRender](#forcemanualrender)
 for example to render multiple times within one frame (maybe for VR?).

Hopefully that will not be necessary; but please do let me know if
 you find a use case for it!


===

|**[View Source](../blob/master/src/lib/descriptors/React3Descriptor.js)**|
 ---|
