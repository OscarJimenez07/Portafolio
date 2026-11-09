<template>
  <section class="seccion">
    <div class="contenedor">
      <h2 class="seccion-titulo">Habilidades</h2>
      <p class="intro">
        Stack técnico que uso día a día. Cómodo trabajando full stack, desde la capa de datos
        hasta el frontend, pasando por infraestructura y despliegue.
      </p>

      <div class="grid">
        <article v-for="grupo in habilidades" :key="grupo.categoria" class="tarjeta skill-card">
          <h3>{{ grupo.categoria }}</h3>
          <div class="items">
            <span v-for="item in grupo.items" :key="item" class="chip">{{ item }}</span>
          </div>
        </article>
      </div>

      <div class="formacion">
        <h3 class="sub-titulo">Formación académica</h3>
        <div class="edu-grid">
          <article v-for="edu in educacion" :key="edu.titulo" class="tarjeta edu-card">
            <div class="edu-estado" :class="{ 'en-curso': edu.estado === 'En curso' }">
              {{ edu.estado }}
            </div>
            <h4>{{ edu.titulo }}</h4>
            <p class="institucion">{{ edu.institucion }}</p>
            <p class="periodo-edu">{{ edu.periodo }}</p>
          </article>
        </div>

        <h3 class="sub-titulo sub-titulo-2">Formación complementaria</h3>
        <div class="edu-grid">
          <article v-for="c in complementaria" :key="c.titulo" class="tarjeta edu-card">
            <h4>{{ c.titulo }}</h4>
            <p class="institucion">{{ c.institucion }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { habilidades } from '../data/habilidades.js'
import { educacion, complementaria } from '../data/educacion.js'
</script>

<style scoped>
.intro {
  color: var(--color-texto-2);
  margin-bottom: 32px;
  max-width: 720px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 48px;
}

.skill-card h3 {
  color: var(--color-titulo);
  font-size: 1.05rem;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-borde);
}

.skill-card .items {
  display: flex;
  flex-wrap: wrap;
}

.sub-titulo {
  color: var(--color-titulo);
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.sub-titulo-2 {
  margin-top: 36px;
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.edu-card {
  padding: 20px;
  position: relative;
}

.edu-estado {
  display: inline-block;
  font-size: 0.72rem;
  color: var(--color-texto-2);
  background: var(--color-superficie);
  border: 1px solid var(--color-borde);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.edu-estado.en-curso {
  color: var(--color-acento);
  background: var(--color-acento-suave);
  border: 1px solid var(--color-acento);
}

.edu-card h4 {
  color: var(--color-titulo);
  font-size: 1rem;
  margin-bottom: 8px;
  line-height: 1.3;
}

.institucion {
  color: var(--color-acento);
  font-size: 0.88rem;
  margin-bottom: 4px;
}

.periodo-edu {
  color: var(--color-texto-2);
  font-size: 0.85rem;
}
</style>
