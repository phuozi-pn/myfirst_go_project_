<script setup lang="ts">
import myImage from '../assets/mian.jpg';
import BlogList from '../components/BlogList.vue';
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="image-container">
        <div class="image-frame">
          <img :src="myImage" alt="主页页面" class="hero-image">
          <div class="image-overlay"></div>
        </div>
        <div class="hero-decoration">
          <div class="deco-circle circle-1"></div>
          <div class="deco-circle circle-2"></div>
          <div class="deco-circle circle-3"></div>
        </div>
      </div>
    </section>

    <!-- Floating Elements -->
    <div class="floating-elements">
      <!-- 气泡 -->
      <div class="bubble bubble-1"></div>
      <div class="bubble bubble-2"></div>
      <div class="bubble bubble-3"></div>
      <div class="bubble bubble-4"></div>
      <div class="bubble bubble-5"></div>
      
      <!-- 水滴 -->
      <div class="droplet droplet-1"></div>
      <div class="droplet droplet-2"></div>
      <div class="droplet droplet-3"></div>
      
      <!-- 小星星（闪光效果） -->
      <div class="sparkle sparkle-1"></div>
      <div class="sparkle sparkle-2"></div>
      <div class="sparkle sparkle-3"></div>
      <div class="sparkle sparkle-4"></div>
      <div class="sparkle sparkle-5"></div>
    </div>

    <!-- Blog Section -->
    <section class="blog-section">
      <div class="section-header">
        <h2 class="section-title">最近更新</h2>
        <div class="title-decoration">
          <span class="decoration-dot"></span>
          <span class="decoration-line"></span>
          <span class="decoration-dot"></span>
        </div>
      </div>
      <div class="blog-container">
        <BlogList :limit="4" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
  position: relative;
}

/* ============ Hero Section ============ */
.hero-section {
  padding: 60px 20px;
  position: relative;
}

.image-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  text-align: center;
}

.image-frame {
  position: relative;
  display: inline-block;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(179, 229, 252, 0.4),
    0 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeInScale 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-image {
  width: 100%;
  max-width: 900px;
  height: auto;
  display: block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-frame:hover .hero-image {
  transform: scale(1.03);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(179, 229, 252, 0.1) 0%,
    transparent 50%,
    rgba(225, 245, 254, 0.1) 100%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-frame:hover .image-overlay {
  opacity: 1;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, 
    rgba(179, 229, 252, 0.3) 0%,
    transparent 70%
  );
  animation: float 8s ease-in-out infinite;
}

.circle-1 {
  width: 120px;
  height: 120px;
  top: -40px;
  left: -40px;
  animation-delay: 0s;
}

.circle-2 {
  width: 80px;
  height: 80px;
  bottom: -30px;
  right: 50px;
  animation-delay: 2s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  right: -50px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(20px, -20px) scale(1.1);
    opacity: 0.5;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ============ Blog Section ============ */
.blog-section {
  padding: 80px 20px;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2.5rem;
  color: #2c5f7f;
  margin: 0 0 20px 0;
  letter-spacing: 0.1em;
  animation: fadeInDown 0.8s ease-out;
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.decoration-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, 
    rgba(179, 229, 252, 0.8) 0%,
    rgba(225, 245, 254, 0.6) 100%
  );
  animation: pulse-dot 2s ease-in-out infinite;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background: linear-gradient(to right,
    rgba(179, 229, 252, 0.3) 0%,
    rgba(179, 229, 252, 0.8) 50%,
    rgba(179, 229, 252, 0.3) 100%
  );
}

@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ============ Floating Elements ============ */
.floating-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* ============ 气泡样式 ============ */
.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(255, 255, 255, 0.9), 
    rgba(179, 229, 252, 0.4)
  );
  box-shadow: 
    inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(179, 229, 252, 0.3);
  animation: bubble-rise 15s infinite ease-in-out;
}

.bubble-1 {
  width: 60px;
  height: 60px;
  left: 10%;
  bottom: -100px;
  animation-duration: 12s;
}

.bubble-2 {
  width: 35px;
  height: 35px;
  left: 30%;
  bottom: -100px;
  animation-duration: 15s;
  animation-delay: 2s;
}

.bubble-3 {
  width: 45px;
  height: 45px;
  left: 60%;
  bottom: -100px;
  animation-duration: 13s;
  animation-delay: 4s;
}

.bubble-4 {
  width: 28px;
  height: 28px;
  left: 75%;
  bottom: -100px;
  animation-duration: 11s;
  animation-delay: 1s;
}

.bubble-5 {
  width: 40px;
  height: 40px;
  left: 85%;
  bottom: -100px;
  animation-duration: 14s;
  animation-delay: 3s;
}

@keyframes bubble-rise {
  0% {
    bottom: -100px;
    opacity: 0;
    transform: translateX(0) scale(1);
  }
  10% {
    opacity: 0.7;
  }
  50% {
    transform: translateX(50px) scale(1.1);
  }
  90% {
    opacity: 0.7;
  }
  100% {
    bottom: 110%;
    opacity: 0;
    transform: translateX(-50px) scale(0.8);
  }
}

/* ============ 水滴样式 ============ */
.droplet {
  position: absolute;
  width: 22px;
  height: 28px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.8) 0%,
    rgba(179, 229, 252, 0.5) 100%
  );
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  animation: droplet-fall 8s infinite ease-in;
}

.droplet-1 {
  left: 25%;
  top: -50px;
  animation-duration: 7s;
}

.droplet-2 {
  left: 55%;
  top: -50px;
  animation-duration: 9s;
  animation-delay: 2s;
}

.droplet-3 {
  left: 80%;
  top: -50px;
  animation-duration: 8s;
  animation-delay: 4s;
}

@keyframes droplet-fall {
  0% {
    top: -50px;
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    top: 100vh;
    opacity: 0;
  }
}

/* ============ 闪光效果 ============ */
.sparkle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
  animation: sparkle-twinkle 3s infinite ease-in-out;
}

.sparkle-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.sparkle-2 {
  top: 40%;
  left: 70%;
  animation-delay: 1s;
}

.sparkle-3 {
  top: 60%;
  left: 45%;
  animation-delay: 2s;
}

.sparkle-4 {
  top: 35%;
  left: 30%;
  animation-delay: 1.5s;
}

.sparkle-5 {
  top: 55%;
  left: 80%;
  animation-delay: 2.5s;
}

@keyframes sparkle-twinkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

/* ============ 响应式设计 ============ */
@media (max-width: 1024px) {
  .hero-section {
    padding: 40px 15px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 30px 15px;
  }
  
  .blog-section {
    padding: 60px 15px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .image-frame {
    border-radius: 20px;
  }
  
  .section-title {
    font-size: 1.5rem;
    letter-spacing: 0.05em;
  }
}
</style>