declare namespace JSX {
    interface IntrinsicElements {
        div: { class?:string, role?:string, style?:string, ref?:any },
        span: { class?:string },
        button: { class?:string, type?:string },
        a: { class?:string, role?:string, href?:string, tabindex?:number}
    }
}
