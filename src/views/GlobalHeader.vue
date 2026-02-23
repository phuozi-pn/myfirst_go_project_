<script setup lang="ts">
import logo from '../assets/logo.png';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

watch(() => route.path, () => {
  closeMenu();
});
</script>

<template>
  <header class="global-header">
    <div class="header-container">
      <div class="brand">
        <div class="logo-wrapper">
          <img :src="logo" alt="Logo" class="logo">
          <div class="logo-glow"></div>
        </div>
        <h1 class="site-title">panta的博客</h1>
      </div>
      
      <!-- 汉堡菜单按钮 -->
      <button 
        class="menu-toggle" 
        :class="{ 'is-active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="切换菜单"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
      
      <!-- 导航菜单 -->
      <nav class="nav-menu" :class="{ 'is-open': isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">
          <span class="nav-icon">🏠</span>
          <span class="nav-text">首页</span>
        </router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">
          <span class="nav-icon">👤</span>
          <span class="nav-text">关于</span>
        </router-link>
      </nav>
      
      <!-- 移动端菜单遮罩 -->
      <div 
        v-if="isMenuOpen" 
        class="menu-overlay" 
        @click="closeMenu"
      ></div>
    </div>
  </header>
</template>

<style scoped>
.global-header {
  padding: 0;
  width: 100%;
  position: relative;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo-wrapper {
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(179, 229, 252, 0.5);
  box-shadow: 
    0 8px 30px rgba(179, 229, 252, 0.3),
    0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.logo-glow {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, 
    rgba(179, 229, 252, 0.3) 0%, 
    transparent 70%
  );
  animation: pulse 3s ease-in-out infinite;
  z-index: 1;
}

.logo-wrapper:hover .logo {
  transform: scale(1.08) rotate(5deg);
  box-shadow: 
    0 12px 40px rgba(179, 229, 252, 0.4),
    0 6px 20px rgba(0, 0, 0, 0.15);
}

.site-title {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 1.8rem;
  font-weight: 400;
  color: #2c5f7f;
  margin: 0;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 10px rgba(179, 229, 252, 0.3);
  transition: all 0.3s ease;
}

.site-title:hover {
  color: #1e4a63;
  text-shadow: 0 4px 15px rgba(179, 229, 252, 0.5);
}

.nav-menu {
  display: flex;
  gap: 10px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  color: #5a7a8f;
  font-size: 1rem;
  font-weight: 500;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.8) 0%,
    rgba(249, 252, 255, 0.6) 100%
  );
  border: 1px solid rgba(179, 229, 252, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(179, 229, 252, 0.3) 50%,
    transparent 100%
  );
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background: linear-gradient(135deg, 
    rgba(179, 229, 252, 0.3) 0%,
    rgba(225, 245, 254, 0.4) 100%
  );
  border-color: rgba(179, 229, 252, 0.6);
  color: #2c5f7f;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(179, 229, 252, 0.3);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, 
    rgba(179, 229, 252, 0.5) 0%,
    rgba(225, 245, 254, 0.6) 100%
  );
  border-color: rgba(179, 229, 252, 0.8);
  color: #1e4a63;
  box-shadow: 0 4px 15px rgba(179, 229, 252, 0.4);
}

.nav-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.nav-link:hover .nav-icon {
  transform: scale(1.2) rotate(5deg);
}

.nav-text {
  font-family: 'Noto Serif SC', serif;
  letter-spacing: 0.02em;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.8;
  }
}

/* 汉堡菜单按钮 */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%,
    rgba(249, 252, 255, 0.8) 100%
  );
  border: 1px solid rgba(179, 229, 252, 0.4);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
}

.menu-toggle:hover {
  background: linear-gradient(135deg, 
    rgba(179, 229, 252, 0.3) 0%,
    rgba(225, 245, 254, 0.4) 100%
  );
}

.hamburger-line {
  width: 22px;
  height: 2px;
  background: #2c5f7f;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-toggle.is-active .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-toggle.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* 菜单遮罩 */
.menu-overlay {
  display: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-container {
    padding: 15px 20px;
    flex-wrap: wrap;
    position: relative;
  }
  
  .brand {
    gap: 15px;
  }
  
  .logo-wrapper {
    width: 50px;
    height: 50px;
  }
  
  .logo {
    width: 50px;
    height: 50px;
  }
  
  .logo-glow {
    width: 60px;
    height: 60px;
  }
  
  .site-title {
    font-size: 1.4rem;
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -280px;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    padding: 100px 30px 30px;
    background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(249, 252, 255, 0.98) 100%
    );
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    gap: 15px;
  }
  
  .nav-menu.is-open {
    right: 0;
  }
  
  .nav-link {
    width: 100%;
    justify-content: flex-start;
    padding: 15px 25px;
    font-size: 1.1rem;
  }
  
  .nav-text {
    display: inline;
  }
  
  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}

@media (max-width: 480px) {
  .site-title {
    font-size: 1.2rem;
  }
  
  .logo-wrapper {
    width: 45px;
    height: 45px;
  }
  
  .logo {
    width: 45px;
    height: 45px;
  }
  
  .nav-menu {
    width: 260px;
    right: -260px;
  }
}
</style>