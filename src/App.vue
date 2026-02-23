<script setup lang="ts">
import GlobalHeader from './views/GlobalHeader.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <div id="app">
    <div class="header">
      <GlobalHeader />
    </div>
    <main class="main">
      <router-view/>
    </main>
    <BackToTop />
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-quote">总有人间一两风，填我十万八千梦。</p>
        <div class="footer-decoration"></div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;600;700&family=Ma+Shan+Zheng&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Serif SC', serif;
  overflow-x: hidden;
}
</style>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: 
    radial-gradient(circle at 20% 30%, rgba(179, 229, 252, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(225, 245, 254, 0.4) 0%, transparent 50%),
    linear-gradient(to bottom,
      #e3f4fd 0%,
      #f0f9ff 30%,
      #ffffff 70%,
      #fafbfc 100%
    );
  position: relative;
}

#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 2px 2px, rgba(179, 229, 252, 0.15) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}

.header {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%,
    rgba(249, 252, 255, 0.98) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(179, 229, 252, 0.3);
  box-shadow: 
    0 4px 20px rgba(179, 229, 252, 0.15),
    0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.main {
  flex: 1;
  position: relative;
  z-index: 1;
}

.footer {
  background: linear-gradient(to top,
    rgba(240, 247, 255, 0.95) 0%,
    rgba(248, 251, 255, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(179, 229, 252, 0.3);
  padding: 40px 20px 30px;
  text-align: center;
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(to right,
    transparent 0%,
    rgba(179, 229, 252, 0.6) 50%,
    transparent 100%
  );
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.footer-quote {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 1.3rem;
  color: #5a7a8f;
  letter-spacing: 0.1em;
  line-height: 1.8;
  margin: 0;
  text-shadow: 0 2px 10px rgba(179, 229, 252, 0.3);
  animation: fadeInUp 1s ease-out;
}

.footer-decoration {
  margin-top: 20px;
  height: 30px;
  background: 
    radial-gradient(circle, rgba(179, 229, 252, 0.4) 2px, transparent 2px);
  background-size: 15px 15px;
  background-position: center;
  opacity: 0.5;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-quote {
    font-size: 1.1rem;
    letter-spacing: 0.05em;
  }
  
  .footer {
    padding: 30px 15px 20px;
  }
}
</style>