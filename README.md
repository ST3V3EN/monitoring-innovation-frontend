# Monitoring Innovation Frontend

Este proyecto es una aplicación frontend desarrollada como parte de una *prueba técnica* para la empresa *Monitoring Innovation (AB COMERCIAL)*. 

## Descripción

La aplicación permite la gestión de vehículos y usuarios, proporcionando una interfaz moderna. Está construida utilizando *React* y *Vite*, con TypeScript para asegurar la calidad y mantenibilidad del código. El diseño incluye componentes reutilizables y estilos personalizados.

## Características principales

- Gestión de vehículos (crear, editar, eliminar, listar)
- Gestión de usuarios
- Interfaz intuitiva y moderna
- Consumo de servicios mediante Axios
- Estructura modular de componentes

## Estructura del proyecto


monitoring-innovation-frontend/
├── src/
│   ├── components/
│   │   ├── CarManagement/
│   │   └── Home/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── utils/
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...


## Instalación y ejecución

1. Clona el repositorio:
   sh
   git clone <url-del-repositorio>
   
2. Instala las dependencias:
   sh
   npm install
   
3. Inicia la aplicación en modo desarrollo:
   sh
   npm run dev
   

La aplicación estará disponible en http://localhost:5173 (o el puerto configurado por Vite).

## Scripts disponibles

- npm run dev: Inicia el servidor de desarrollo
- npm run build: Genera la build de producción
- npm run preview: Previsualiza la build de producción

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Axios
- CSS Modules

## Notas

Este proyecto fue realizado como parte de una *prueba técnica* para *Monitoring Innovation*. El código está estructurado para facilitar su mantenimiento y escalabilidad.

---

Desarrollado por: Brayan Steven Moreno Garcia