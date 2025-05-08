**Tabla de Contenidos**

- Características
- Arquitectura
- Requisitos Previos
- Instalación y Despliegue
- Uso de la API
- Testing
- Despliegue en Producción
- Tecnologías Utilizadas

*Características*

- Backend WordPress con Plugin Personalizado:Implementa un endpoint REST API en WordPress para consultar datos de Pokémon.
- Sistema de Caché: Reduce las llamadas a la PokeAPI almacenando los resultados en la base de datos de WordPress.
- Frontend React: Interfaz de usuario moderna y responsiva.
- Dockerización Completa: Fácil despliegue en cualquier entorno.
- Tests Unitarios: Asegura la calidad del código.
- Búsqueda por ID o Nombre: Flexibilidad para encontrar cualquier Pokémon.
- Paginación: Navegación sencilla entre Pokémon.

*Arquitectura*
Este proyecto implementa una arquitectura de tres capas:

- Base de Datos MySQL: Almacena los datos de WordPress y el caché de la PokeAPI.
- Backend WordPress: Proporciona una API REST para obtener información de Pokémon, consultando primero en caché y luego en la PokeAPI si es necesario.
- Frontend React: Interfaz de usuario que consume la API de WordPress y muestra la información de manera atractiva.

*Requisitos Previos*

- Docker y Docker Compose
- Git

*Instalación y Despliegue*

Opción 1: Despliegue con Docker (Legible)
- Clona el repositorio:

GitBash: 
git clone https://github.com/Munar99Santiago/pokemon-wp-api.git
cd pokemon-wp-api

- Inicia los contenedores con Docker Compose:

GitBash:
docker-compose up -d

Accede a la aplicación:
- Frontend: http://localhost:3001
- Backend WordPress: http://localhost:8000
- API Endpoint: http://localhost:8000/wp-json/pokemon-api/v1/pokemon/25

*Opción 2: Instalación Manual*

Backend (WordPress):

1. Instala WordPress en tu servidor
2. Copia el directorio backend/wp-content/plugins/pokemon-api a tu directorio de plugins de WordPress
3. Activa el plugin desde el panel de administración de WordPress

Frontend (React):

- Navega al directorio frontend:

GitBash:
cd frontend

- Instala las dependencias:

GitBash:
npm install

- Configura la URL de la API en un archivo .env:

REACT_APP_API_URL=http://tu-wordpress.com/wp-json/pokemon-api/v1

- Inicia la aplicación:

GitBash:
npm start


*Uso de la API*

- Endpoint: /wp-json/pokemon-api/v1/pokemon/{id}
Método: GET
Parámetros: 
      id: ID o nombre del Pokémon (ej: 25 o pikachu)
Respuesta exitosa:

Json:
{
  "id": 25,
  "name": "pikachu",
  "types": ["electric"],
  "abilities": ["static", "lightning-rod"],
  "sprite_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
}

- Respuesta de error (código 404):

Json: 
{
  "code": "pokemon_not_found",
  "message": "Pokemon not found",
  "data": {
    "status": 404
  }
}


*Testing*

- Backend Testing
  Para ejecutar las pruebas unitarias del backend:
  
 GitBash: 
  docker-compose exec backend wp plugin activate pokemon-api
  docker-compose exec backend wp scaffold plugin-tests pokemon-api
  docker-compose exec backend bash -c "cd /var/www/html/wp-content/plugins/pokemon-api && phpunit"
 
- Frontend Testing

Para ejecutar las pruebas del frontend:

GitBash:
docker-compose exec frontend npm test


*Despliegue en Producción*

Vercel (Frontend)

- Crea una cuenta en Vercel
- Conecta tu repositorio de GitHub
- Configura la variable de entorno REACT_APP_API_URL para apuntar a tu backend en producción
- Despliega la aplicación

WordPress en cualquier hosting (Backend)

- Sube tu WordPress a un hosting que soporte PHP y MySQL
- Instala y activa el plugin Pokemon API
- Configura CORS en tu servidor web para permitir solicitudes desde tu frontend

*Tecnologías Utilizadas*

Backend:

- WordPress
- PHP
- WordPress REST API
- MySQL

Frontend:

- React.js
- CSS3
- Axios para peticiones HTTP

DevOps:

- Docker & Docker Compose
- NGINX
- Git

*Licencia*

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles

*Agradecimientos*

- PokeAPI por proporcionar una API gratuita y completa de Pokémon
- WordPress por su robusto sistema CMS
- React por su biblioteca para construir interfaces de usuario

**Autor**

Munar99Santiago - GitHub











