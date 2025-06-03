FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    nodejs \
    npm \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_pgsql mbstring exif pcntl bcmath gd

# Get Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy composer files
COPY composer.json composer.lock ./

# Install composer dependencies WITHOUT scripts
RUN composer install --no-dev --optimize-autoloader --no-scripts --no-plugins

# Copy package.json
COPY package*.json ./
RUN npm ci

# Copy all application files
COPY . .

# Now run composer scripts (artisan file exists now)
RUN composer run-script post-autoload-dump

# Build assets
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npm run build

# Run Laravel commands
RUN php artisan config:cache || true
RUN php artisan route:cache || true
RUN php artisan view:cache || true

# Set permissions
RUN chmod -R 775 storage bootstrap/cache

# Expose port
EXPOSE 8000

# Start Laravel server
# À la fin de votre Dockerfile
WORKDIR /var/www
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000", "--env=production"]
