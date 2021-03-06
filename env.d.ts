/// <reference types="vite/client" />
interface window {
    event: { keyCode: number }
}

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}
