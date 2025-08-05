<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $names = [
            'Edi',
            'Yoyok',
            'Yon',
            'Reban',
            'Sunarto',
            'Ulil',
            'Arief Muntoha',
            'Eko',
            'Komang Lampung',
            'Agus S.T',
            'Yayuk Dwi Rahayu',
            'Ulul Amri',
            'Mukhlis',
            'Novianto Agus Sulistyo',
            'Suran',
            'Purwito',
            'M. Syahroni',
            'Asmuni',
            'M. Fakhrurozi',
            'Fauzan Abdillah',
            'Lutfi Ardyansah',
            'Utomo',
            'Trisno Waluyo',
            'Sukimin',
            'Wardiyo',
            'Ngarni',
            'Abdul Munir',
            'Hasan Abdillah',
        ];

        foreach ($names as $index => $name) {
            DB::table('users')->insert([
                'name' => $name,
                'email' => strtolower(str_replace(' ', '.', $name)) . ($index + 1) . '@example.com', 
                'role' => 'petani',
                'password' => Hash::make('password'), 
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // User admin khusus
        DB::table('users')->insert([
            'name' => 'Wahyu Ilham Maula',
            'email' => 'wahyu.maula22@student.uisi.ac.id',
            'role' => 'admin',
            'password' => Hash::make('Ilham1234'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
