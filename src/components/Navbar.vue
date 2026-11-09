<template>
  <header class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="contenedor navbar-inner">
      <router-link to="/" class="logo">
        <span class="logo-box">OJ</span>
        <span class="logo-texto">Oscar Jiménez</span>
      </router-link>

      <button class="menu-toggle" @click="abierto = !abierto" :aria-expanded="abierto" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>

      <nav class="nav-links" :class="{ abierto }" @click="abierto = false">
        <router-link to="/">Inicio</router-link>
        <router-link to="/sobre-mi">Sobre mí</router-link>
        <router-link to="/experiencia">Experiencia</router-link>
        <router-link to="/habilidades">Habilidades</router-link>
        <router-link to="/proyectos">Proyectos</router-link>
        <router-link to="/contacto" class="nav-cta">Contacto</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const abierto = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 100;
  transition: var(--transicion);
  border-bottom: 1px solid transparent;
}

.navbar-scrolled {
  height: 60px;
  border-bottom-color: var(--color-borde);
  box-shadow: var(--sombra-suave);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-titulo);
  font-weight: 600;
  text-decoration: none;
}

.logo-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1.5px solid var(--color-acento);
  border-radius: 8px;
  color: var(--color-acento);
  font-size: 0.9rem;
  font-weight: 700;
}

.logo-texto {
  font-size: 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  color: var(--color-texto);
  font-size: 0.92rem;
  font-weight: 400;
  text-decoration: none;
  transition: var(--transicion);
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-acento);
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-acento);
  border-radius: 2px;
}

.nav-cta {
  padding: 8px 18px;
  border: 1px solid var(--color-acento);
  border-radius: var(--radio);
  color: var(--color-acento) !important;
}

.nav-cta:hover {
  background: var(--color-acento-suave);
}

.nav-cta.router-link-active::after {
  display: none;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-acento);
  border-radius: 2px;
  transition: var(--transicion);
}

@media (max-width: 768px) {
  .logo-texto {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
  .nav-links {
    position: fixed;
    top: 60px;
    right: 0;
    width: 75%;
    max-width: 300px;
    height: calc(100vh - 60px);
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 24px;
    background: var(--color-superficie-solida);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-left: 1px solid var(--color-borde);
    box-shadow: -10px 0 30px -15px rgba(0, 0, 0, 0.5);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  .nav-links.abierto {
    transform: translateX(0);
  }
  .nav-links a {
    width: 100%;
    padding: 10px 0;
    font-size: 1rem;
  }
}
</style>
