<script setup lang="ts">
import { computed } from 'vue'
import { getRecentPosts, type Post } from '../data/posts'

const props = defineProps<{
  limit?: number
}>()

const posts = computed<Post[]>(() => getRecentPosts(props.limit ?? 4))
</script>

<template>
  <div class="blog-list">
    <div class="posts-grid">
      <router-link
        v-for="post in posts"
        :key="post.id"
        :to="`/post/${post.id}`"
        class="post-card"
      >
        <div class="card-image-wrapper">
          <img :src="post.coverImage" :alt="post.title" class="card-image">
          <div class="card-overlay"></div>
          <span class="card-category">{{ post.category }}</span>
        </div>
        
        <div class="card-content">
          <div class="card-meta">
            <span class="meta-date">{{ post.date }}</span>
            <span class="meta-divider">•</span>
            <span class="meta-time">{{ post.readingTime }}</span>
          </div>
          
          <h3 class="card-title">{{ post.title }}</h3>
          <p class="card-excerpt">{{ post.excerpt }}</p>
          
          <div class="card-tags">
            <span 
              v-for="(tag, index) in post.tags.slice(0, 3)" 
              :key="index"
              class="tag"
            >
              #{{ tag }}
            </span>
          </div>
          
          <div class="card-footer">
            <span class="read-more">
              阅读全文 
              <span class="arrow">→</span>
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.blog-list {
  width: 100%;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.post-card {
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(249, 252, 255, 0.95) 100%
  );
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 
    0 10px 40px rgba(179, 229, 252, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(179, 229, 252, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease-out both;
}

.post-card:nth-child(1) { animation-delay: 0s; }
.post-card:nth-child(2) { animation-delay: 0.1s; }
.post-card:nth-child(3) { animation-delay: 0.2s; }
.post-card:nth-child(4) { animation-delay: 0.3s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.post-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 20px 60px rgba(179, 229, 252, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border-color: rgba(179, 229, 252, 0.6);
}

.card-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .card-image {
  transform: scale(1.1);
}

.card-overlay {
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

.card-category {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 16px;
  background: linear-gradient(135deg,
    rgba(103, 183, 220, 0.95) 0%,
    rgba(76, 162, 205, 0.9) 100%
  );
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(103, 183, 220, 0.4);
}

.card-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #7a9aaf;
  margin-bottom: 12px;
}

.meta-divider {
  color: rgba(179, 229, 252, 0.6);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e4a63;
  margin: 0 0 12px 0;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.post-card:hover .card-title {
  color: #2c5f7f;
}

.card-excerpt {
  font-size: 0.95rem;
  color: #5a7a8f;
  line-height: 1.6;
  margin: 0 0 15px 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  padding: 4px 12px;
  background: linear-gradient(135deg,
    rgba(240, 250, 255, 0.9) 0%,
    rgba(225, 245, 254, 0.85) 100%
  );
  color: #3d6b85;
  font-size: 0.8rem;
  border-radius: 12px;
  border: 1px solid rgba(179, 229, 252, 0.4);
}

.card-footer {
  padding-top: 15px;
  border-top: 1px solid rgba(179, 229, 252, 0.3);
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #2c5f7f;
  transition: all 0.3s ease;
}

.arrow {
  transition: transform 0.3s ease;
}

.post-card:hover .read-more {
  color: #67b7dc;
}

.post-card:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .card-image-wrapper {
    height: 180px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-title {
    font-size: 1.15rem;
  }
}

@media (max-width: 480px) {
  .card-image-wrapper {
    height: 160px;
  }
  
  .card-content {
    padding: 18px;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .card-excerpt {
    font-size: 0.9rem;
    -webkit-line-clamp: 2;
  }
}
</style>
