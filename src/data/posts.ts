export interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  readingTime: string
}

export const posts: Post[] = [
  {
    id: 1,
    title: '探索 Vue 3 Composition API 的魅力',
    excerpt: 'Vue 3 的 Composition API 为我们提供了一种全新的组织组件逻辑的方式，在代码复用和类型推导方面都有显著优势。',
    content: `
      <h2>前言</h2>
      <p>Vue 3 的 Composition API 为我们提供了一种全新的组织组件逻辑的方式。相比于 Options API，它在代码复用、类型推导和逻辑组织方面都有显著的优势。</p>
      
      <h2>什么是 Composition API？</h2>
      <p>Composition API 是 Vue 3 中引入的一组低侵入式的、函数式的 API，使得我们可以更灵活地组织和复用组件逻辑。它主要包括以下几个核心函数：</p>
      
      <ul>
        <li><code>ref</code> 和 <code>reactive</code>：创建响应式数据</li>
        <li><code>computed</code>：创建计算属性</li>
        <li><code>watch</code> 和 <code>watchEffect</code>：监听数据变化</li>
        <li><code>onMounted</code>、<code>onUpdated</code> 等生命周期钩子</li>
      </ul>
      
      <h2>实际应用示例</h2>
      <p>让我们通过一个简单的计数器示例来理解 Composition API 的使用：</p>
      
      <pre><code>import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    const increment = () => {
      count.value++
    }
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}</code></pre>
      
      <h2>总结</h2>
      <p>Composition API 为 Vue 开发带来了更好的代码组织方式和类型支持。虽然学习曲线略有提升，但掌握后能大大提升开发效率和代码质量。</p>
    `,
    date: '2024年1月15日',
    author: 'Panta',
    category: '前端开发',
    tags: ['Vue.js', 'TypeScript', 'Web开发'],
    coverImage: 'https://via.placeholder.com/600x300/b3e5fc/2c5f7f?text=Vue+3',
    readingTime: '5 分钟'
  },
  {
    id: 2,
    title: 'TypeScript 高级类型技巧',
    excerpt: '深入了解 TypeScript 的高级类型系统，包括条件类型、映射类型和模板字面量类型。',
    content: `
      <h2>引言</h2>
      <p>TypeScript 的类型系统非常强大，掌握高级类型可以让你写出更安全、更易维护的代码。</p>
      
      <h2>条件类型</h2>
      <p>条件类型允许我们根据条件表达式来选择类型：</p>
      <pre><code>type IsString<T> = T extends string ? true : false;
type Result = IsString<"hello">; // true</code></pre>
      
      <h2>映射类型</h2>
      <p>映射类型可以基于已有类型创建新类型：</p>
      <pre><code>type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};</code></pre>
      
      <h2>总结</h2>
      <p>高级类型是 TypeScript 的精髓所在，熟练运用可以大大提升代码质量。</p>
    `,
    date: '2024年1月10日',
    author: 'Panta',
    category: '前端开发',
    tags: ['TypeScript', '类型系统'],
    coverImage: 'https://via.placeholder.com/600x300/e1f5fe/2c5f7f?text=TypeScript',
    readingTime: '8 分钟'
  },
  {
    id: 3,
    title: '现代 CSS 布局技巧：Grid 与 Flexbox',
    excerpt: '掌握 CSS Grid 和 Flexbox 的使用方法，轻松实现各种复杂的页面布局。',
    content: `
      <h2>Flexbox 基础</h2>
      <p>Flexbox 是一种一维布局方式，非常适合处理单行或单列的元素排列。</p>
      
      <h2>CSS Grid 基础</h2>
      <p>CSS Grid 是一种二维布局方式，可以同时控制行和列。</p>
      
      <h2>何时使用哪种布局？</h2>
      <ul>
        <li>单维布局（行或列）：使用 Flexbox</li>
        <li>二维布局（行和列）：使用 Grid</li>
        <li>复杂页面布局：两者结合使用</li>
      </ul>
      
      <h2>总结</h2>
      <p>熟练掌握这两种布局方式，可以让你的 CSS 代码更简洁、更易维护。</p>
    `,
    date: '2024年1月5日',
    author: 'Panta',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox', '布局'],
    coverImage: 'https://via.placeholder.com/600x300/81d4fa/2c5f7f?text=CSS+Layout',
    readingTime: '6 分钟'
  },
  {
    id: 4,
    title: 'Git 工作流最佳实践',
    excerpt: '介绍团队协作中常用的 Git 工作流程，包括分支策略和代码审查流程。',
    content: `
      <h2>Git Flow</h2>
      <p>Git Flow 是一种经典的分支管理策略，适合有计划发布周期的项目。</p>
      
      <h2>GitHub Flow</h2>
      <p>GitHub Flow 更加简洁，适合持续部署的项目。</p>
      
      <h2>代码审查</h2>
      <p>良好的代码审查流程可以提高代码质量，促进团队知识共享。</p>
      
      <h2>总结</h2>
      <p>选择适合团队的工作流程，持续优化协作效率。</p>
    `,
    date: '2024年1月1日',
    author: 'Panta',
    category: '工程化',
    tags: ['Git', '工作流', '团队协作'],
    coverImage: 'https://via.placeholder.com/600x300/4fc3f7/2c5f7f?text=Git+Flow',
    readingTime: '7 分钟'
  }
]

export function getPostById(id: number): Post | undefined {
  return posts.find(post => post.id === id)
}

export function getRecentPosts(count: number = 4): Post[] {
  return posts.slice(0, count)
}
