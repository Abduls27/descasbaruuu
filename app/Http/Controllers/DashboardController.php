<?php

namespace App\Http\Controllers;

use App\Models\Rendemen;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();


        if ($user->role === 'admin') {
            $rendemens = Rendemen::whereHas('user', function ($query) {
                $query->where('role', 'petani');
            })
                ->orderBy('created_at', 'desc')
                ->limit(4)
                ->get();
        } else {
            $rendemens = Rendemen::where('user_id', $user->id)
                ->orderBy('created_at', 'desc')
                ->limit(4)
                ->get();
        }

        $sales = Sale::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get();

        $totalRendemen = Rendemen::where('user_id', $user->id)->count();
        $totalSales = Sale::where('user_id', $user->id)->count();

        if ($user->role === 'admin') {
            $sgMax = Rendemen::whereHas('user', function ($query) {
                $query->where('role', 'petani');
            })->max('sg');

            $sgMin = Rendemen::whereHas('user', function ($query) {
                $query->where('role', 'petani');
            })->min('sg');

            $scMax = Rendemen::whereHas('user', function ($query) {
                $query->where('role', 'petani');
            })->max('sc');

            $scMin = Rendemen::whereHas('user', function ($query) {
                $query->where('role', 'petani');
            })->min('sc');
        } else {
            $sgMax = Rendemen::where('user_id', $user->id)->max('sg');
            $scMax = Rendemen::where('user_id', $user->id)->max('sc');
        }

        // Hitung jumlah petani dan total sales (semua) jika admin
        $totalPetani = null;
        $totalSalesAll = null;

        if ($user->role === 'admin') {
            $totalPetani = \App\Models\User::where('role', 'petani')->count();
            $totalSalesAll = \App\Models\Sale::count();
        }

        return Inertia::render('Dashboard', [
            'rendemens' => $rendemens,
            'totalRendemen' => $totalRendemen,
            'sales' => $sales,
            'totalSales' => $totalSales,
            'sg' => $sgMax,
            'sc' => $scMax,
            'totalPetani' => $totalPetani,
            'totalSalesAll' => $totalSalesAll,
            'role' => $user->role
        ]);
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Rendemen $rendemen)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rendemen $rendemen)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rendemen $rendemen)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rendemen $rendemen)
    {
        //
    }
}
