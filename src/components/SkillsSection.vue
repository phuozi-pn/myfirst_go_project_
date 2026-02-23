<template>
  <div class="skills-section">
    <div class="section-container">
      <h2 class="section-title">我的技能</h2>
      
      <div class="skills-list">
        <div 
          v-for="(category, index) in categories" 
          :key="index"
          class="category-group"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="category-header">
            <span class="category-icon">{{ category.icon }}</span>
            <h3 class="category-name">{{ category.name }}</h3>
          </div>
          <div class="skills-items">
            <span 
              v-for="(skill, idx) in category.skills" 
              :key="idx"
              class="skill-item"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Category {
  name: string;
  icon: string;
  skills: string[];
}

const categories = ref<Category[]>([
  {
    name: '前端框架',
    icon: '⚡',
    skills: ['Vue.js', 'React', 'TypeScript']
  },
  {
    name: '后端开发',
    icon: '🔧',
    skills: ['Node.js', 'GraphQL', 'WebSockets']
  },
  {
    name: '工程化',
    icon: '🏗️',
    skills: ['前端架构', 'CI/CD', 'Git Workflow']
  },
  {
    name: '专业技能',
    icon: '✨',
    skills: ['数据可视化', '性能优化', 'UI/UX 思维']
  }
]);
</script>

<style scoped>
.skills-section {
  padding: 70px 20px;
  max-width: 900px;
  margin: 0 auto;
}

.section-container {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(249, 252, 255, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 50px 40px;
  box-shadow: 
    0 10px 40px rgba(179, 229, 252, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(179, 229, 252, 0.3);
}

.section-title {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2.5rem;
  color: #2c5f7f;
  margin: 0 0 45px 0;
  text-align: center;
  letter-spacing: 0.15em;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.category-group {
  animation: slideUp 0.6s ease-out both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(179, 229, 252, 0.3);
}

.category-icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,
    rgba(179, 229, 252, 0.4) 0%,
    rgba(225, 245, 254, 0.3) 100%
  );
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.category-group:hover .category-icon {
  transform: rotate(10deg) scale(1.1);
}

.category-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c5f7f;
  margin: 0;
}

.skills-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 52px;
}

.skill-item {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg,
    rgba(240, 250, 255, 0.8) 0%,
    rgba(225, 245, 254, 0.7) 100%
  );
  border: 1px solid rgba(179, 229, 252, 0.4);
  border-radius: 20px;
  font-size: 0.95rem;
  color: #3d6b85;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
}

.skill-item:hover {
  background: linear-gradient(135deg,
    rgba(179, 229, 252, 0.6) 0%,
    rgba(157, 214, 245, 0.5) 100%
  );
  border-color: rgba(179, 229, 252, 0.7);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(179, 229, 252, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .skills-section {
    padding: 60px 15px;
  }
  
  .section-container {
    padding: 40px 30px;
    border-radius: 20px;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 35px;
  }
  
  .skills-list {
    gap: 25px;
  }
  
  .category-name {
    font-size: 1.15rem;
  }
  
  .skills-items {
    padding-left: 0;
    gap: 8px;
  }
  
  .skill-item {
    padding: 7px 16px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 30px 20px;
  }
  
  .section-title {
    font-size: 1.8rem;
    letter-spacing: 0.1em;
  }
  
  .category-header {
    gap: 10px;
  }
  
  .category-icon {
    width: 35px;
    height: 35px;
    font-size: 1.3rem;
  }
  
  .category-name {
    font-size: 1.05rem;
  }
  
  .skill-item {
    padding: 6px 14px;
    font-size: 0.85rem;
  }
}
</style>