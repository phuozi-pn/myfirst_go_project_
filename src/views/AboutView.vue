<script setup lang="ts">
import { ref } from 'vue';
import SkillsSection from '../components/SkillsSection.vue';

const profile = ref({
  name: 'Panta',
  title: '前端开发工程师',
  location: '📍 中国·台湾',
  bio: '热爱编程，专注于现代 Web 技术栈。相信优秀的代码不仅要高效，更要优雅。',
  avatar: 'https://via.placeholder.com/200/b3e5fc/2c5f7f?text=Panta',
  email: 'panta@example.com',
  github: 'https://github.com/panta',
});

const experiences = ref([
  {
    period: '2022 - 至今',
    title: '高级前端工程师',
    company: '某互联网公司',
    description: '负责公司核心产品的前端架构设计与开发，主导技术栈升级'
  },
  {
    period: '2020 - 2022',
    title: '前端开发工程师',
    company: '某科技公司',
    description: '参与多个项目的前端开发，积累了丰富的实战经验'
  }
]);

const hobbies = ref([
  { icon: '💻', name: '编程', description: '探索新技术' },
  { icon: '📚', name: '阅读', description: '技术与人文' },
  { icon: '🎮', name: '游戏', description: '放松娱乐' },
  { icon: '🎵', name: '音乐', description: '陶冶情操' }
]);

const stats = ref([
  { label: '文章数', value: '42' },
  { label: '项目数', value: '18' },
  { label: '代码量', value: '50K+' }
]);
</script>

<template>
  <div class="about-page">
    <!-- 个人简介卡片 -->
    <section class="profile-section">
      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar-wrapper">
            <img :src="profile.avatar" :alt="profile.name" class="avatar">
            <div class="avatar-ring"></div>
          </div>
          
          <div class="profile-info">
            <h1 class="profile-name">{{ profile.name }}</h1>
            <p class="profile-title">{{ profile.title }}</p>
            <p class="profile-location">{{ profile.location }}</p>
          </div>
        </div>
        
        <p class="profile-bio">{{ profile.bio }}</p>
        
        <div class="profile-stats">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="stat-item"
          >
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
        
        <div class="profile-actions">
          <a :href="`mailto:${profile.email}`" class="action-link">
            <span class="action-icon">✉️</span>
            <span class="action-text">邮件联系</span>
          </a>
          <a :href="profile.github" target="_blank" class="action-link">
            <span class="action-icon">🔗</span>
            <span class="action-text">GitHub</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 工作经历 -->
    <section class="experience-section">
      <h2 class="section-title">
        <span class="title-icon">💼</span>
        工作经历
      </h2>
      
      <div class="timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="timeline-item"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-period">{{ exp.period }}</div>
            <h3 class="timeline-title">{{ exp.title }}</h3>
            <p class="timeline-company">{{ exp.company }}</p>
            <p class="timeline-description">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能展示 -->
    <section class="skills-wrapper">
      <SkillsSection />
    </section>

    <!-- 兴趣爱好 -->
    <section class="hobbies-section">
      <h2 class="section-title">
        <span class="title-icon">✨</span>
        兴趣爱好
      </h2>
      
      <div class="hobbies-grid">
        <div 
          v-for="(hobby, index) in hobbies" 
          :key="index"
          class="hobby-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="hobby-icon">{{ hobby.icon }}</div>
          <h3 class="hobby-name">{{ hobby.name }}</h3>
          <p class="hobby-description">{{ hobby.description }}</p>
        </div>
      </div>
    </section>

    <!-- 联系方式 -->
    <section class="contact-section">
      <div class="contact-card">
        <h2 class="contact-title">让我们一起创造些什么</h2>
        <p class="contact-subtitle">如果你有任何想法或项目，欢迎随时联系我</p>
        <a :href="`mailto:${profile.email}`" class="contact-button">
          <span class="button-icon">📮</span>
          <span class="button-text">发送邮件</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

/* 个人简介卡片 */
.profile-section {
  margin-bottom: 60px;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-card {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(249, 252, 255, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 50px 45px;
  box-shadow: 
    0 15px 50px rgba(179, 229, 252, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(179, 229, 252, 0.3);
  text-align: center;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
}

.avatar-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 
    0 10px 30px rgba(179, 229, 252, 0.4),
    0 0 0 8px rgba(179, 229, 252, 0.2);
  transition: transform 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  border: 2px solid rgba(179, 229, 252, 0.4);
  animation: pulse-ring 3s ease-in-out infinite;
}

@keyframes pulse-ring {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.profile-info {
  text-align: center;
}

.profile-name {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2.5rem;
  color: #1e4a63;
  margin: 0 0 10px 0;
  letter-spacing: 0.05em;
}

.profile-title {
  font-size: 1.2rem;
  color: #5a7a8f;
  margin: 0 0 8px 0;
  font-weight: 500;
}

.profile-location {
  font-size: 1rem;
  color: #7a9aaf;
  margin: 0;
}

.profile-bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5a7a8f;
  margin: 0 0 35px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.profile-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 35px;
  padding: 30px 0;
  border-top: 2px solid rgba(179, 229, 252, 0.3);
  border-bottom: 2px solid rgba(179, 229, 252, 0.3);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #2c5f7f;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.95rem;
  color: #7a9aaf;
}

.profile-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.action-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg,
    rgba(240, 250, 255, 0.9) 0%,
    rgba(225, 245, 254, 0.85) 100%
  );
  border: 2px solid rgba(179, 229, 252, 0.4);
  border-radius: 25px;
  text-decoration: none;
  color: #2c5f7f;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.action-link:hover {
  background: linear-gradient(135deg,
    rgba(179, 229, 252, 0.6) 0%,
    rgba(157, 214, 245, 0.5) 100%
  );
  border-color: rgba(179, 229, 252, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(179, 229, 252, 0.35);
}

.action-icon {
  font-size: 1.1rem;
}

/* 工作经历 */
.experience-section {
  margin-bottom: 60px;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2.2rem;
  color: #2c5f7f;
  margin: 0 0 40px 0;
  letter-spacing: 0.08em;
  animation: fadeIn 0.8s ease-out;
}

.title-icon {
  font-size: 2rem;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 10px;
  bottom: 10px;
  width: 3px;
  background: linear-gradient(to bottom,
    rgba(179, 229, 252, 0.8) 0%,
    rgba(179, 229, 252, 0.3) 100%
  );
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  animation: slideIn 0.6s ease-out both;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-marker {
  position: absolute;
  left: -33px;
  top: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg,
    rgba(103, 183, 220, 0.9) 0%,
    rgba(76, 162, 205, 0.85) 100%
  );
  box-shadow: 0 0 0 4px rgba(179, 229, 252, 0.3);
  z-index: 1;
}

.timeline-content {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(249, 252, 255, 0.9) 100%
  );
  padding: 25px 30px;
  border-radius: 15px;
  border: 1px solid rgba(179, 229, 252, 0.3);
  box-shadow: 0 5px 20px rgba(179, 229, 252, 0.15);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  box-shadow: 0 8px 30px rgba(179, 229, 252, 0.25);
  transform: translateX(5px);
}

.timeline-period {
  font-size: 0.9rem;
  color: #67b7dc;
  font-weight: 600;
  margin-bottom: 10px;
}

.timeline-title {
  font-size: 1.3rem;
  color: #2c5f7f;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.timeline-company {
  font-size: 1rem;
  color: #5a7a8f;
  margin: 0 0 12px 0;
  font-weight: 500;
}

.timeline-description {
  font-size: 0.95rem;
  color: #7a9aaf;
  line-height: 1.6;
  margin: 0;
}

/* 技能展示 */
.skills-wrapper {
  margin-bottom: 60px;
}

.skills-wrapper :deep(.skills-section) {
  padding: 0;
}

/* 兴趣爱好 */
.hobbies-section {
  margin-bottom: 60px;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.hobby-card {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(249, 252, 255, 0.9) 100%
  );
  padding: 35px 25px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid rgba(179, 229, 252, 0.3);
  box-shadow: 0 8px 25px rgba(179, 229, 252, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hobby-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(179, 229, 252, 0.3);
  border-color: rgba(179, 229, 252, 0.6);
}

.hobby-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.hobby-card:hover .hobby-icon {
  transform: scale(1.2) rotate(5deg);
}

.hobby-name {
  font-size: 1.2rem;
  color: #2c5f7f;
  margin: 0 0 10px 0;
  font-weight: 600;
}

.hobby-description {
  font-size: 0.95rem;
  color: #7a9aaf;
  margin: 0;
}

/* 联系方式 */
.contact-section {
  animation: fadeIn 0.8s ease-out;
}

.contact-card {
  background: linear-gradient(135deg,
    rgba(103, 183, 220, 0.15) 0%,
    rgba(179, 229, 252, 0.12) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 60px 40px;
  text-align: center;
  border: 2px solid rgba(179, 229, 252, 0.4);
  box-shadow: 0 10px 40px rgba(179, 229, 252, 0.2);
}

.contact-title {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2rem;
  color: #2c5f7f;
  margin: 0 0 15px 0;
  letter-spacing: 0.05em;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: #5a7a8f;
  margin: 0 0 35px 0;
  line-height: 1.6;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 40px;
  background: linear-gradient(135deg,
    rgba(103, 183, 220, 0.9) 0%,
    rgba(76, 162, 205, 0.85) 100%
  );
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(103, 183, 220, 0.35);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-button:hover {
  background: linear-gradient(135deg,
    rgba(76, 162, 205, 0.95) 0%,
    rgba(61, 143, 189, 0.9) 100%
  );
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(103, 183, 220, 0.5);
}

.button-icon {
  font-size: 1.3rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-page {
    padding: 30px 15px 60px;
  }
  
  .profile-card {
    padding: 40px 30px;
    border-radius: 20px;
  }
  
  .profile-name {
    font-size: 2rem;
  }
  
  .profile-stats {
    gap: 30px;
  }
  
  .stat-value {
    font-size: 1.6rem;
  }
  
  .profile-actions {
    flex-direction: column;
  }
  
  .action-link {
    width: 100%;
    justify-content: center;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .timeline {
    padding-left: 30px;
  }
  
  .timeline::before {
    left: 12px;
  }
  
  .timeline-marker {
    left: -25px;
  }
  
  .timeline-content {
    padding: 20px 25px;
  }
  
  .hobbies-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .contact-card {
    padding: 50px 30px;
  }
}

@media (max-width: 480px) {
  .about-page {
    padding: 20px 10px 50px;
  }
  
  .profile-card {
    padding: 30px 20px;
  }
  
  .avatar-wrapper {
    width: 120px;
    height: 120px;
  }
  
  .avatar {
    width: 120px;
    height: 120px;
  }
  
  .profile-name {
    font-size: 1.8rem;
  }
  
  .profile-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .hobbies-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-title {
    font-size: 1.6rem;
  }
  
  .contact-card {
    padding: 40px 25px;
  }
}
</style>