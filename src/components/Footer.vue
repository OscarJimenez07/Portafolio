<template>
  <footer class="footer">
    <div class="contenedor footer-inner">
      <p class="copy">
        © {{ año }} Oscar Javier Jiménez Celis
      </p>
      <div class="redes">
        <a href="https://github.com/OscarJimenez07" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.12 3.05.73.8 1.17 1.83 1.17 3.08 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.22 21.37 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg>
        </a>
        <a href="mailto:ojjc94@hotmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z"/></svg>
        </a>
        <a href="tel:+573156251656" aria-label="Teléfono">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.16.39 2.4.6 3.69.6a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.3 21.04 2.96 13.7 2.96 4.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.29.21 2.53.6 3.69a1 1 0 0 1-.24 1.05l-2.24 2.55z"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const año = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  padding: 32px 0;
  border-top: 1px solid var(--color-borde);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.footer-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.redes {
  display: flex;
  gap: 18px;
}

.redes a {
  color: var(--color-texto-2);
  transition: var(--transicion);
  display: flex;
  align-items: center;
}

.redes a:hover {
  color: var(--color-acento);
  transform: translateY(-2px);
}

.copy {
  color: var(--color-texto-2);
  font-size: 0.85rem;
  text-align: left;
  margin: 0;
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
  .copy {
    text-align: center;
  }
}

.vue {
  color: var(--color-acento);
}
</style>
