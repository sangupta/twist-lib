declare namespace JSX {
  interface IntrinsicElements {
    if: { condition: boolean },
    repeat: { collection: Array<T>, as: T },
  }
}

declare module '@twist/react' {
  class BaseComponent {
    scope:any;
    children:any;
  }

}
