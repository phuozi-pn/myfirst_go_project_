<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <Transition name="fade-slide">
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="返回顶部"
    >
      <span class="arrow">↑</span>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg,
    rgba(103, 183, 220, 0.95) 0%,
    rgba(76, 162, 205, 0.9) 100%
  );
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 
    0 6px 25px rgba(103, 183, 220, 0.4),
    0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 10px 35px rgba(103, 183, 220, 0.5),
    0 5px 15px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg,
    rgba(76, 162, 205, 1) 0%,
    rgba(61, 143, 189, 0.95) 100%
  );
}

.back-to-top:active {
  transform: translateY(-2px);
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.back-to-top:hover .arrow {
  transform: translateY(-3px);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
}
</style>
