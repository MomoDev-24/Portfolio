<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia('Home');
})->name('home');

Route::get('about', function () {
    return inertia('About');
})->name('about');
Route::get('/skills', function () {
    return inertia('Skills');
})->name('skills');

Route::get('/projects', function () {
    return inertia('Projects');
})->name('projects');

Route::get('/test', function (){
    return inertia('Test');
})->name('test');

Route::get('/test2', function (){
    return inertia('Test2');
})->name('test2');

Route::get('/test3', function (){
    return inertia('Test3');
})->name('test3');

Route::get('/test4', function (){
    return inertia('Test4');
})->name('test4');

Route::get('/debug', function () {
    return response()->json([
        'status' => 'Laravel is running!',
        'env' => app()->environment(),
        'debug' => config('app.debug'),
        'url' => config('app.url'),
        'php_version' => PHP_VERSION,
        'laravel_version' => app()->version(),
        'timestamp' => now()
    ]);
});


Route::get('/test-inertia', function () {
    return Inertia::render('TestInertia', [
        'message' => 'Hello from Inertia!'
    ]);
});
