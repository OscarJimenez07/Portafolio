<template>
  <section class="seccion">
    <div class="contenedor">
      <h2 class="seccion-titulo">Experiencia</h2>

      <div class="timeline">
        <article v-for="(item, i) in experiencia" :key="i" class="timeline-item tarjeta">
          <div class="timeline-cabecera">
            <div>
              <h3>{{ item.cargo }}</h3>
              <p class="empresa">
                <span>{{ item.empresa }}</span>
                <span class="separador">·</span>
                <span>{{ item.ubicacion }}</span>
              </p>
            </div>
            <span class="periodo" :class="{ actual: item.actual }">
              {{ item.periodo }}
            </span>
          </div>

          <ul class="responsabilidades">
            <li v-for="(r, j) in item.responsabilidades" :key="j">{{ r }}</li>
          </ul>

          <p v-if="item.logro" class="logro">
            <strong>Logro:</strong> {{ item.logro }}
          </p>

          <div class="stack">
            <span v-for="tech in item.stack" :key="tech" class="chip">{{ tech }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiencia } from '../data/experiencia.js'
</script>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.timeline-item h3 {
  color: var(--color-titulo);
  font-size: 1.2rem;
  font-weight: 600;
}

.empresa {
  color: var(--color-acento);
  font-size: 0.95rem;
  margin-top: 4px;
}

.separador {
  margin: 0 8px;
  color: var(--color-texto-2);
}

.timeline-cabecera {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.periodo {
  font-size: 0.85rem;
  color: var(--color-texto-2);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--color-borde);
  padding: 6px 14px;
  border-radius: 999px;
  white-space: nowrap;
}

.periodo.actual {
  color: var(--color-acento);
  border: 1px solid var(--color-acento);
  background: var(--color-acento-suave);
}

.responsabilidades {
  list-style: none;
  padding: 0;
  margin-bottom: 18px;
}

.responsabilidades li {
  padding: 6px 0 6px 22px;
  position: relative;
  color: var(--color-texto-2);
  font-size: 0.95rem;
}

.responsabilidades li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-acento);
}

.logro {
  padding: 12px 16px;
  background: var(--color-acento-suave);
  border-left: 3px solid var(--color-acento);
  border-radius: var(--radio);
  color: var(--color-texto);
  font-size: 0.92rem;
  margin-bottom: 18px;
}

.logro strong {
  color: var(--color-acento);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin-top: 8px;
}
</style>
