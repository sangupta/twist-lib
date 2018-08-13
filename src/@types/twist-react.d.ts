/**
 * These declarations should ideally come from Adobe
 * React-Twist library.
 */

declare namespace JSX {
  interface IntrinsicElements {
    if: { condition: boolean },
    repeat: { collection: Array<any>, as: any },
  }
}

declare module '@twist/react' {
  export class BaseComponent {
    scope:any;
    children:any;
    trigger:Function;
  }
  
  export function Component(componentClass);
  export function Attribute(property, arg2);
  export function Bind(method, arg2);
}
