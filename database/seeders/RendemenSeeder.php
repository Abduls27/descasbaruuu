<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RendemenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $samples = [
            [
                'user_id' => 1,
                'name' => 'Sampel A',
                'date' => '2025-06-01',
                'jenis' => 'Pasir',
                'wo' => 12.5,
                'wu' => 11.3,
                'sg' => 2.65,
                'sc' => 1.12,
            ],
            [
                'user_id' => 1,
                'name' => 'Sampel B',
                'date' => '2025-06-02',
                'jenis' => 'Lempung',
                'wo' => 18.2,
                'wu' => 16.8,
                'sg' => 2.70,
                'sc' => 1.15,
            ],
            [
                'user_id' => 1,
                'name' => 'Sampel C',
                'date' => '2025-06-03',
                'jenis' => 'Berpasir',
                'wo' => 14.0,
                'wu' => 12.7,
                'sg' => 2.60,
                'sc' => 1.09,
            ],
            [
                'user_id' => 1,
                'name' => 'Sampel D',
                'date' => '2025-06-04',
                'jenis' => 'Humus',
                'wo' => 22.1,
                'wu' => 20.0,
                'sg' => 2.55,
                'sc' => 1.18,
            ],
            [
                'user_id' => 1,
                'name' => 'Sampel E',
                'date' => '2025-06-05',
                'jenis' => 'Laterit',
                'wo' => 17.3,
                'wu' => 15.9,
                'sg' => 2.68,
                'sc' => 1.14,
            ],
        ];

        // Array untuk menghitung urutan kode berdasarkan tanggal
        $dateCount = [];

        foreach ($samples as &$sample) {
            $date = Carbon::parse($sample['date']);
            $tanggalFormatted = $date->format('dmy');

            if (!isset($dateCount[$sample['date']])) {
                $dateCount[$sample['date']] = 1;
            } else {
                $dateCount[$sample['date']]++;
            }

            $urutan = str_pad($dateCount[$sample['date']], 2, '0', STR_PAD_LEFT);
            $sample['code'] = "{$urutan}-{$tanggalFormatted}-WI";
        }
        unset($sample); // break reference

        // Insert ke database sekaligus
        DB::table('rendemens')->insert($samples);
    }
}
