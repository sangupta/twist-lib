/**
 * Declarations in this file should be merged in twist-react.d.ts
 * Infact, they should ideally come from the react-twist library.
 */

declare namespace JSX {
    interface IntrinsicElements {
        div: { class?:string, role?:string, style?:string, ref?:any },
        span: { class?:string },
        button: { class?:string, type?:string },
        a: { class?:string, role?:string, href?:string, tabindex?:number }
    }
}
