<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'kocak',
        //     'email' => 'kocak@email.com',
        //     'password' => Hash::make('kocak123'),
        //     'role' => 'admin',
        // ]);

        // // 4 user petani biasa
        // User::factory()->count(4)->create([
        //     'role' => 'petani',
        // ]);

        $this->call([
            UserSeeder::class,
            RendemenSeeder::class,
            SaleSeeder::class,
        ]);
    }
}
