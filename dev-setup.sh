composer update
npm install
npm pack
cd app
composer update
touch database/database.sqlite
php artisan key:generate
php artisan migrate:fresh --seed
npm update @protonemedia/laravel-splade
npm install
cd ..