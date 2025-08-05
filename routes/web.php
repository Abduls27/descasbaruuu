<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FarmerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RendemenController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\ShopController;
use App\Http\Middleware\CheckAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About/Index');
});

Route::get('/sample', function () {
    return Inertia::render('SampleWeight/Index');
});

Route::get('/shop', [ShopController::class, 'index'])->name('shop.index');
Route::post('/shops/search', [ShopController::class, 'search'])->name('shop.search');


Route::get('/rendemen', [RendemenController::class, 'index'])->middleware(['auth'])->name('rendemen.index');
Route::get('/rendemen/create', [RendemenController::class, 'create'])->middleware(['auth'])->name('rendemen.create');
Route::post('/rendemen', [RendemenController::class, 'store'])->middleware(['auth'])->name('rendemen.store');
Route::delete('/rendemen/{rendemen}', [RendemenController::class, 'destroy'])->middleware('auth')->name('rendemen.destroy');
Route::get('/rendemen/{rendemen}/edit', [RendemenController::class, 'edit'])->middleware('auth')->name('rendemen.edit');
Route::put('/rendemen/{rendemen}', [RendemenController::class, 'update'])->name('rendemen.update');
Route::post('/rendemen/search', [RendemenController::class, 'search'])->name('rendemen.search');


Route::get('/sale', [SaleController::class, 'index'])->middleware('auth')->name('sale.index');
Route::get('/sale/create', [SaleController::class, 'create'])->middleware('auth')->name('sale.create');
Route::post('/sale', [SaleController::class, 'store'])->middleware('auth')->name('sale.store');
Route::delete('/sale/{sale}', [SaleController::class, 'destroy'])->middleware('auth')->name('sale.destroy');
Route::get('/sale/{sale}/edit', [SaleController::class, 'edit'])->middleware('auth')->name('sale.edit');
Route::put('/sale/{sale}', [SaleController::class, 'update'])->name('sale.update');
Route::post('/sale/search', [SaleController::class, 'search'])->name('sale.search');


Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth')->name('dashboard.index');

Route::get('/farmer', [FarmerController::class, 'index'])
    ->middleware(['auth', 'admin'])
    ->name('farmer.index');
Route::get('/farmer/{user}/edit', [FarmerController::class, 'edit'])
    ->middleware(['auth', 'admin'])
    ->name('farmer.edit');
Route::post('/farmer/search', [FarmerController::class, 'search'])->name('farmer.search');
Route::delete('/farmer/{user}', [FarmerController::class, 'destroy'])->middleware(['auth', 'admin'])->name('farmer.destroy');


Route::middleware(['auth', 'admin'])->group(function () {
    Route::put('/users/{user}', [FarmerController::class, 'update'])->name('farmer.update');
    Route::delete('/users/{user}', [FarmerController::class, 'destroy'])->name('farmer.destroy');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
