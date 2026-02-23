// src/shims-vue.d.ts

// 这是针对 Vue 3 项目的声明文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // component: DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, PublicProps, P, Defaults, S>
  // 这里的 {} {} any 表示我们没有具体定义组件的 props、setup 返回值，以及其他选项的类型
  // 它告诉 TypeScript，任何 .vue 文件都会导出一个 Vue 组件，其类型是 DefineComponent
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
