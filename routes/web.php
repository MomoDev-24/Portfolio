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
