/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


/* eslint-disable */
declare module '*.txt' {
  const value: string
  export default value
}