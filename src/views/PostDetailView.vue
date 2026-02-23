<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, type Post } from '../data/posts';

const route = useRoute();
const router = useRouter();

const post = computed<Post | undefined>(() => {
  const id = Number(route.params.id);
  return getPostById(id);
});

const notFound = computed(() => !post.value);

watch(notFound, (isNotFound) => {
  if (isNotFound) {
    router.push('/');
  }
});

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <article v-if="post" class="post-detail">
    <!-- 文章头部 -->
    <header class="post-header">
      <div class="header-container">
        <div class="post-meta">
          <span class="meta-item">
            <span class="meta-icon">📅</span>
            {{ post.date }}
          </span>
          <span class="meta-divider">•</span>
          <span class="meta-item">
            <span class="meta-icon">👤</span>
            {{ post.author }}
          </span>
          <span class="meta-divider">•</span>
          <span class="meta-item">
            <span class="meta-icon">⏱️</span>
            {{ post.readingTime }}
          </span>
        </div>
        
        <h1 class="post-title">{{ post.title }}</h1>
        
        <div class="post-tags">
          <span class="category-tag">{{ post.category }}</span>
          <span 
            v-for="(tag, index) in post.tags" 
            :key="index"
            class="tag"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
      
      <div class="cover-image-wrapper">
        <img :src="post.coverImage" :alt="post.title" class="cover-image">
        <div class="image-overlay"></div>
      </div>
    </header>

    <!-- 文章内容 -->
    <div class="post-content-wrapper">
      <div class="post-content" v-html="post.content"></div>
    </div>

    <!-- 文章底部 -->
    <footer class="post-footer">
      <div class="footer-divider"></div>
      
      <div class="post-actions">
        <button class="action-button like-button">
          <span class="action-icon">❤️</span>
          <span class="action-text">喜欢</span>
        </button>
        <button class="action-button share-button">
          <span class="action-icon">🔗</span>
          <span class="action-text">分享</span>
        </button>
      </div>

      <div class="post-navigation">
        <router-link to="/" class="nav-button">
          <span class="nav-icon">←</span>
          <span class="nav-text">返回首页</span>
        </router-link>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.post-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 80px;
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

/* 文章头部 */
.post-header {
  margin-bottom: 60px;
}

.header-container {
  text-align: center;
  margin-bottom: 40px;
}

.post-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;
  font-size: 0.95rem;
  color: #5a7a8f;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.meta-icon {
  font-size: 1rem;
}

.meta-divider {
  color: rgba(179, 229, 252, 0.6);
}

.post-title {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2.8rem;
  color: #1e4a63;
  margin: 0 0 30px 0;
  line-height: 1.3;
  letter-spacing: 0.02em;
  animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.post-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.category-tag {
  padding: 8px 20px;
  background: linear-gradient(135deg, 
    rgba(103, 183, 220, 0.9) 0%,
    rgba(76, 162, 205, 0.85) 100%
  );
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(103, 183, 220, 0.3);
}

.tag {
  padding: 8px 18px;
  background: linear-gradient(135deg,
    rgba(240, 250, 255, 0.9) 0%,
    rgba(225, 245, 254, 0.85) 100%
  );
  color: #3d6b85;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(179, 229, 252, 0.5);
  transition: all 0.3s ease;
}

.tag:hover {
  background: linear-gradient(135deg,
    rgba(179, 229, 252, 0.7) 0%,
    rgba(157, 214, 245, 0.6) 100%
  );
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(179, 229, 252, 0.3);
}

.cover-image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 15px 50px rgba(179, 229, 252, 0.3),
    0 5px 20px rgba(0, 0, 0, 0.1);
  animation: scaleIn 1s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.cover-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.cover-image-wrapper:hover .cover-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
}

/* 文章内容 */
.post-content-wrapper {
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(249, 252, 255, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 50px 45px;
  box-shadow: 
    0 10px 40px rgba(179, 229, 252, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(179, 229, 252, 0.3);
  margin-bottom: 50px;
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #3d4852;
}

.post-content :deep(h2) {
  font-size: 1.8rem;
  color: #2c5f7f;
  margin: 40px 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 3px solid rgba(179, 229, 252, 0.4);
  font-weight: 600;
}

.post-content :deep(h3) {
  font-size: 1.4rem;
  color: #3d6b85;
  margin: 30px 0 15px 0;
  font-weight: 600;
}

.post-content :deep(p) {
  margin: 20px 0;
  text-align: justify;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin: 20px 0;
  padding-left: 30px;
}

.post-content :deep(li) {
  margin: 12px 0;
  line-height: 1.8;
}

.post-content :deep(code) {
  background: rgba(179, 229, 252, 0.2);
  padding: 3px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
  color: #2c5f7f;
}

.post-content :deep(pre) {
  background: linear-gradient(135deg,
    rgba(44, 95, 127, 0.95) 0%,
    rgba(30, 74, 99, 0.98) 100%
  );
  padding: 25px;
  border-radius: 12px;
  overflow-x: auto;
  margin: 25px 0;
  box-shadow: 0 8px 25px rgba(44, 95, 127, 0.3);
}

.post-content :deep(pre code) {
  background: none;
  padding: 0;
  color: #e1f5fe;
  font-size: 0.9em;
  line-height: 1.6;
}

/* 文章底部 */
.post-footer {
  padding-top: 40px;
}

.footer-divider {
  height: 2px;
  background: linear-gradient(to right,
    transparent 0%,
    rgba(179, 229, 252, 0.5) 50%,
    transparent 100%
  );
  margin-bottom: 35px;
}

.post-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 35px;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background: linear-gradient(135deg,
    rgba(240, 250, 255, 0.9) 0%,
    rgba(225, 245, 254, 0.85) 100%
  );
  border: 2px solid rgba(179, 229, 252, 0.4);
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  color: #2c5f7f;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.action-button:hover {
  background: linear-gradient(135deg,
    rgba(179, 229, 252, 0.6) 0%,
    rgba(157, 214, 245, 0.5) 100%
  );
  border-color: rgba(179, 229, 252, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(179, 229, 252, 0.35);
}

.action-icon {
  font-size: 1.2rem;
}

.post-navigation {
  text-align: center;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  background: linear-gradient(135deg,
    rgba(103, 183, 220, 0.9) 0%,
    rgba(76, 162, 205, 0.85) 100%
  );
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(103, 183, 220, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button:hover {
  background: linear-gradient(135deg,
    rgba(76, 162, 205, 0.95) 0%,
    rgba(61, 143, 189, 0.9) 100%
  );
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(103, 183, 220, 0.45);
}

.nav-icon {
  font-size: 1.2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .post-detail {
    padding: 30px 15px 60px;
  }
  
  .post-title {
    font-size: 2rem;
  }
  
  .post-meta {
    flex-direction: column;
    gap: 8px;
  }
  
  .meta-divider {
    display: none;
  }
  
  .post-content-wrapper {
    padding: 35px 25px;
    border-radius: 15px;
  }
  
  .post-content {
    font-size: 1rem;
  }
  
  .post-content :deep(h2) {
    font-size: 1.5rem;
  }
  
  .post-content :deep(h3) {
    font-size: 1.2rem;
  }
  
  .post-actions {
    flex-direction: column;
    gap: 15px;
  }
  
  .action-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .post-detail {
    padding: 20px 10px 50px;
  }
  
  .post-title {
    font-size: 1.6rem;
  }
  
  .post-content-wrapper {
    padding: 25px 20px;
  }
  
  .post-content {
    font-size: 0.95rem;
  }
  
  .cover-image-wrapper {
    border-radius: 15px;
  }
}
</style>