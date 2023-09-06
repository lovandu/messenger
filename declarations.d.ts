import { Canvas } from 'react-three-fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      canvas: ReactThreeFiber.Object3DNode<
        THREE.CanvasTexture,
        typeof THREE.CanvasTexture
      >;
    }
  }
  interface Window {
    innerWidth: number;
    innerHeight: number;
  }
  interface HTMLElement {
    ontouchstart?: any;
    ontouchend?: any;
  }
  interface Element {
    ontouchstart?: any;
    ontouchend?: any;
  }
  const React: any;
  const ReactDOM: any;
  const ReactTHREE: any;
  const THREE: any;
  const MeshLine: any;
}