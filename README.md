# Metalúrgica Galli S.R.L. - Web Institucional Corporativa

Una plataforma "One-Page" corporativa desarrollada a medida para una PYME del sector metalúrgico industrial. El objetivo del proyecto fue modernizar y digitalizar la presencia de la empresa, destacando su capacidad técnica, parque de maquinarias y portfolio de clientes mediante una interfaz rápida, escalable y orientada al entorno B2B.

## Características Principales

*   **Arquitectura Modular:** Separación estricta entre la capa de datos (`/data`) y la capa de presentación (UI). El catálogo de servicios y maquinaria se renderiza dinámicamente, permitiendo actualizaciones rápidas sin tocar la estructura del código.
*   **Diseño Responsivo:** Maquetación adaptativa *Mobile-First* pensada para dispositivos móviles y monitores ultra-wide de oficinas industriales.
*   **Interactividad UI:** Galerías de imágenes con scroll horizontal optimizado y navegación fluida entre secciones.
*   **Conversión:** Formularios de contacto directos sin dependencia de backend propio y accesos directos de comunicación.

## Tecnologías y Herramientas

*   **Core:** React (Hooks, Functional Components), JavaScript (ES6+), HTML5, CSS3.
*   **UI Framework:** Bootstrap 5 (Grillas y utilidades).
*   **Build Tool:** Vite (Tiempos de compilación optimizados y HMR).
*   **Linter & Formatter:** ESLint configurado bajo estándares estrictos para asegurar la calidad y consistencia del código.
*   **Despliegue:** CI/CD configurado para entornos estáticos (Cloudflare Pages / Vercel).

## Estructura del Proyecto

El código base sigue un principio de orden visual y escalabilidad, preparando el terreno para futuros módulos:

```text
src/
├── assets/      # Archivos estáticos, imágenes optimizadas y logotipos
├── components/  # Componentes de UI aislados y reutilizables (Cards, Botones)
├── data/        # Almacenamiento de datos en formato JSON/JS (Catálogos)
├── sections/    # Bloques funcionales principales (Hero, Servicios, Historia)
└── App.jsx      # Contenedor raíz y orquestación de la One-Page