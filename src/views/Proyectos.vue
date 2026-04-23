<template>
  <section class="seccion">
    <div class="contenedor">
      <h2 class="seccion-titulo">Proyectos</h2>
      <p class="intro">
        Selección de proyectos en los que he trabajado. Algunos son corporativos y su código es
        propiedad del cliente; los repositorios públicos están enlazados cuando aplica.
      </p>

      <div class="grid">
        <article
          v-for="p in proyectos"
          :key="p.titulo"
          class="tarjeta proyecto"
          :class="{ destacado: p.destacado }"
        >
          <header class="proyecto-header">
            <div class="icono">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <a v-if="p.enlace" :href="p.enlace" target="_blank" rel="noopener" class="ext" aria-label="Ver repositorio">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </header>

          <h3>{{ p.titulo }}</h3>
          <p class="descripcion">{{ p.descripcion }}</p>

          <p v-if="p.nota" class="nota">🔒 {{ p.nota }}</p>

          <div class="stack">
            <span v-for="tech in p.stack" :key="tech" class="chip">{{ tech }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { proyectos } from '../data/proyectos.js'
</script>

<style scoped>
.intro {
  color: var(--color-texto-2);
  margin-bottom: 32px;
  max-width: 720px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 22px;
}

.proyecto {
  display: flex;
  flex-direction: column;
}

.proyecto.destacado::before {
  content: '★';
  position: absolute;
  top: 16px;
  right: 16px;
  color: var(--color-acento);
  font-size: 0.9rem;
}

.proyecto-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.icono {
  color: var(--color-acento);
}

.ext {
  color: var(--color-texto-2);
  transition: var(--transicion);
}

.ext:hover {
  color: var(--color-acento);
  transform: translate(2px, -2px);
}

.proyecto h3 {
  color: var(--color-titulo);
  font-size: 1.15rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.descripcion {
  color: var(--color-texto-2);
  font-size: 0.93rem;
  line-height: 1.65;
  margin-bottom: 14px;
  flex: 1;
}

.nota {
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio);
  color: var(--color-texto-2);
  font-size: 0.82rem;
  margin-bottom: 14px;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
}
</style>
