#!/bin/bash
set -e

echo "Starting Laravel application..."

# Generate app key if not exists
if [ -z "$APP_KEY" ]; then
    echo "Generating application key..."
    php artisan key:generate --force
fi

# Run migrations
php artisan migrate --force

# Start server
php artisan serve --host=0.0.0.0 --port=8000
