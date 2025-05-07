#!/bin/bash
set -euo pipefail

# Execute the default WordPress entrypoint
source /usr/local/bin/docker-entrypoint.sh

# Wait for WordPress to be ready
echo "Waiting for WordPress to be ready..."
sleep 10

# Activate our plugin
if wp core is-installed --allow-root; then
    echo "WordPress is installed, activating plugin..."
    wp plugin activate pokemon-api --allow-root
    echo "Plugin activated successfully!"
else
    echo "WordPress is not installed yet. The plugin will be activated after installation."
fi

# Execute the original command
exec "$@"