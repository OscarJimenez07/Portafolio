<template>
  <section class="seccion">
    <div class="contenedor">
      <h2 class="seccion-titulo">Sobre mí</h2>

      <div class="sobre-grid">
        <div class="sobre-texto">
          <p>
            Soy <strong>Oscar Javier Jiménez Celis</strong>, Tecnólogo en Desarrollo de Sistemas
            Informáticos y estudiante de Ingeniería de Sistemas en la <strong>UTS</strong> (décimo
            semestre). Llevo más de 3 años como <strong>Desarrollador Full Stack</strong> y
            <strong>Analista TI</strong> en Ardisa S.A., donde he construido aplicaciones web,
            APIs, integraciones y he administrado la infraestructura del negocio.
          </p>

          <p>
            Mi día a día combina desarrollo frontend con <strong>Vue.js</strong> y
            <strong>React.js</strong>, backend con <strong>PHP (LAMP)</strong> y
            <strong>Python (FastAPI)</strong>, gestión de bases de datos
            (<strong>SQL Server, MySQL, SAP HANA</strong>) y administración de servidores
            <strong>Linux (CentOS)</strong> y recursos en <strong>AWS</strong>.
          </p>

          <p>
            Me gusta automatizar procesos que quitan tiempo, optimizar plataformas como
            <strong>Magento 2</strong> y dejar los sistemas mejor de lo que los encontré. Trabajo
            cómodo con metodologías ágiles y SCRUM, y me adapto rápido a nuevos stacks.
          </p>

          <div class="destacado">
            <h3>Qué estoy haciendo ahora</h3>
            <ul>
              <li>Desarrollando soluciones full stack para e-commerce y procesos internos.</li>
              <li>Optimizando Magento 2 y la infraestructura Linux + AWS.</li>
              <li>Terminando mi Ingeniería de Sistemas en la UTS.</li>
            </ul>
          </div>
        </div>

        <aside class="sobre-aside">
          <div class="tarjeta aside-tarjeta">
            <h3>Información rápida</h3>
            <dl>
              <dt>Ubicación</dt><dd>Floridablanca, Santander</dd>
              <dt>Email</dt><dd><a href="mailto:ojjc94@hotmail.com">ojjc94@hotmail.com</a></dd>
              <dt>Teléfono</dt><dd><a href="tel:+573156251656">+57 315 625 1656</a></dd>
              <dt>GitHub</dt><dd><a href="https://github.com/OscarJimenez07" target="_blank" rel="noopener">@OscarJimenez07</a></dd>
              <dt>Idiomas</dt><dd>Español (nativo) · Inglés B2</dd>
              <dt>Disponibilidad</dt><dd>Proyectos y consultoría</dd>
            </dl>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 40px;
  align-items: start;
}

.sobre-texto p {
  color: var(--color-texto-2);
  margin-bottom: 18px;
  font-size: 1rem;
  line-height: 1.75;
}

.sobre-texto strong {
  color: var(--color-texto);
  font-weight: 500;
}

.destacado {
  margin-top: 32px;
  padding: 24px;
  background: var(--color-superficie);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-left: 3px solid var(--color-acento);
  border-radius: var(--radio);
  box-shadow: var(--sombra-suave);
}

.destacado h3 {
  color: var(--color-titulo);
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.destacado ul {
  list-style: none;
  padding: 0;
}

.destacado li {
  padding: 6px 0 6px 22px;
  position: relative;
  color: var(--color-texto-2);
  font-size: 0.95rem;
}

.destacado li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-acento);
}

.aside-tarjeta h3 {
  color: var(--color-titulo);
  font-size: 1.1rem;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-borde);
}

.aside-tarjeta dl {
  display: grid;
  gap: 10px;
}

.aside-tarjeta dt {
  color: var(--color-acento);
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.aside-tarjeta dd {
  color: var(--color-texto);
  font-size: 0.95rem;
  margin-bottom: 4px;
}

@media (max-width: 768px) {
  .sobre-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
