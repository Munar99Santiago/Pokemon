#!/bin/bash
set -euo pipefail

# Ejecutar el punto de entrada predeterminado de WordPress
source /usr/local/bin/docker-entrypoint.sh

# Espera a que WordPress esté listo
echo "Waiting for WordPress to be ready..."
sleep 10

# Activa plugin
if wp core is-installed --allow-root; then
    echo "WordPress is installed, activating plugin..."
    wp plugin activate pokemon-api --allow-root
    echo "Plugin activated successfully!"
else
    echo "WordPress is not installed yet. The plugin will be activated after installation."
fi

# Comando original
exec "$@"
