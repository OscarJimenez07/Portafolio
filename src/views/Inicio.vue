<template>
  <section class="seccion hero">
    <div class="contenedor hero-inner">
      <div class="hero-texto">
        <p class="saludo">Hola, soy</p>
        <h1 class="nombre">
          <span class="nombre-linea">Oscar Javier</span>
          <span class="nombre-linea">Jiménez Celis.</span>
        </h1>
        <h2 class="titulo">Tecnólogo en desarrollo de sistemas informáticos y estudiante de ingenieria de Sistemas</h2>
        <p class="bio">
          <strong>Analista TI</strong> y <strong>Desarrollador Full Stack</strong> con más de 3 años
          de experiencia desarrollando aplicaciones web con Vue.js, React.js, PHP y Python (FastAPI),
          administrando servidores Linux y optimizando plataformas e-commerce sobre Magento 2.
        </p>

        <div class="hero-cta">
          <router-link to="/proyectos" class="boton boton-primario">Ver proyectos</router-link>
          <router-link to="/contacto" class="boton">Contáctame</router-link>
        </div>

        <ul class="hero-info">
          <li><span>📍</span> Floridablanca, Santander</li>
        </ul>
      </div>

      <div class="hero-foto">
        <div class="foto-wrap">
          <img src="../assets/foto-oscar.jpg" alt="Foto de Oscar Javier Jiménez Celis" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: center;
}

.saludo {
  color: var(--color-acento);
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.nombre {
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  color: var(--color-titulo);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #F5F5F5 0%, #4FD1BE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nombre-linea {
  display: block;
}

.titulo {
  font-size: clamp(1rem, 2vw, 1.35rem);
  color: var(--color-titulo);
  font-weight: 500;
  line-height: 1.35;
  margin-bottom: 28px;
}

.bio {
  color: var(--color-texto-2);
  font-size: 1.12rem;
  max-width: 620px;
  margin-bottom: 36px;
  line-height: 1.75;
}

.bio strong {
  color: var(--color-titulo);
  font-weight: 600;
}

.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.hero-info {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-info li {
  color: var(--color-texto-2);
  font-size: 0.92rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-info span {
  color: var(--color-acento);
}

.hero-foto {
  display: flex;
  justify-content: center;
}

.foto-wrap {
  position: relative;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  background: #D7C9C2;
  box-shadow: 0 0 0 6px rgba(79, 209, 190, 0.18),
              0 0 40px 8px rgba(79, 209, 190, 0.35),
              0 25px 50px -12px rgba(45, 184, 160, 0.4);
  animation: flotar 6s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

.foto-wrap::before {
  content: none;
}

.foto-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 25%;
  transform: scale(1.15);
  transform-origin: 50% 18%;
  transition: transform 0.5s ease;
}

.foto-wrap:hover img {
  transform: scale(1.19);
}

@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  .hero-cta,
  .hero-info {
    justify-content: center;
    align-items: center;
  }
  .foto-wrap {
    width: 260px;
    height: 260px;
  }
}
</style>
