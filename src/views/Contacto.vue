<template>
  <section class="seccion">
    <div class="contenedor">
      <h2 class="seccion-titulo">Contacto</h2>

      <div class="grid">
        <div class="info">
          <h3>¿Hablamos?</h3>
          <p>
            ¿Tienes un proyecto, oportunidad laboral o quieres intercambiar ideas? Escríbeme por
            aquí o directo a mi correo. Suelo responder en menos de 24 horas.
          </p>

          <ul class="datos">
            <li>
              <span class="dato-icono">✉</span>
              <div>
                <span class="dato-label">Email</span>
                <a href="mailto:ojjc94@hotmail.com">ojjc94@hotmail.com</a>
              </div>
            </li>
            <li>
              <span class="dato-icono">☎</span>
              <div>
                <span class="dato-label">Teléfono</span>
                <a href="tel:+573156251656">+57 315 625 1656</a>
              </div>
            </li>
            <li>
              <span class="dato-icono">📍</span>
              <div>
                <span class="dato-label">Ubicación</span>
                <span>Floridablanca, Santander · Colombia</span>
              </div>
            </li>
            <li>
              <span class="dato-icono">⌨</span>
              <div>
                <span class="dato-label">GitHub</span>
                <a href="https://github.com/OscarJimenez07" target="_blank" rel="noopener">@OscarJimenez07</a>
              </div>
            </li>
          </ul>
        </div>

        <form class="form tarjeta" @submit.prevent="enviar">
          <!-- Honeypot anti-spam -->
          <input type="checkbox" name="botcheck" v-model="honeypot" style="display:none" tabindex="-1" autocomplete="off" />

          <div class="form-campo">
            <label for="nombre">Nombre</label>
            <input id="nombre" name="name" type="text" v-model="form.nombre" required minlength="2" maxlength="80" />
          </div>

          <div class="form-campo">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" v-model="form.email" required />
          </div>

          <div class="form-campo">
            <label for="asunto">Asunto</label>
            <input id="asunto" name="subject" type="text" v-model="form.asunto" maxlength="120" />
          </div>

          <div class="form-campo">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" name="message" v-model="form.mensaje" required minlength="5" maxlength="2000"></textarea>
          </div>

          <button type="submit" class="boton boton-primario" :disabled="enviando">
            {{ enviando ? 'Enviando...' : 'Enviar mensaje' }}
          </button>

          <p v-if="estado === 'exito'" class="form-alerta exito">
            ✓ ¡Mensaje enviado! Te respondo pronto.
          </p>
          <p v-if="estado === 'error'" class="form-alerta error">
            ✗ Algo falló. Intenta de nuevo o escríbeme directo al correo.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const ACCESS_KEY = 'eb88aa55-13f6-4cf5-ba5f-e4bd56795daf'

const form = reactive({ nombre: '', email: '', asunto: '', mensaje: '' })
const honeypot = ref(false)
const estado = ref(null)
const enviando = ref(false)

const enviar = async () => {
  if (honeypot.value) return
  enviando.value = true
  estado.value = null

  try {
    const resp = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        from_name: form.nombre,
        name: form.nombre,
        email: form.email,
        subject: form.asunto || 'Nuevo mensaje desde el portafolio',
        message: form.mensaje,
        botcheck: honeypot.value
      })
    })
    const data = await resp.json()
    if (!resp.ok || !data.success) throw new Error(data.message || 'Error ' + resp.status)
    estado.value = 'exito'
    form.nombre = ''
    form.email = ''
    form.asunto = ''
    form.mensaje = ''
  } catch (e) {
    estado.value = 'error'
  } finally {
    enviando.value = false
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: start;
}

.info h3 {
  color: var(--color-titulo);
  font-size: 1.4rem;
  margin-bottom: 14px;
}

.info > p {
  color: var(--color-texto-2);
  margin-bottom: 28px;
  line-height: 1.7;
}

.datos {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.datos li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.dato-icono {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-acento-suave);
  border: 1px solid var(--color-borde);
  border-radius: var(--radio);
  color: var(--color-acento);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.datos li > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dato-label {
  font-size: 0.75rem;
  color: var(--color-texto-2);
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

.boton:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
