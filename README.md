# Portafolio · Oscar Javier Jiménez Celis

Portafolio personal construido con **Vue 3 + Vite**. Despliegue continuo en Netlify.

## Requisitos
- Node.js 18+
- npm

## Desarrollo
```bash
npm install
npm run dev
```
Abre http://localhost:5173

## Build de producción
```bash
npm run build
npm run preview
```

## Despliegue en Netlify
El repo está conectado a Netlify. Cada push a `main` dispara un nuevo deploy.
Configuración en `netlify.toml`:
- Build command: `npm run build`
- Publish dir: `dist`

## Formulario de contacto
Usa **Netlify Forms**. Los envíos aparecen en el panel de Netlify → Forms → `contacto`.
Para recibir avisos por correo: Site settings → Forms → Form notifications.

## Actualizar datos
Todos los datos vivien en `src/data/`:
- `experiencia.js` — empleos
- `proyectos.js` — proyectos destacados
- `habilidades.js` — stack técnico
- `educacion.js` — formación académica

Para cambiar la foto: reemplaza `src/assets/foto-oscar.jpg`.
