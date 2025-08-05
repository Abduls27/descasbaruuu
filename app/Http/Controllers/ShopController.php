<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        
        $search = $request->input('search');
        $shops = $this->getFilteredShops($search);

        return Inertia::render("Shop/Index", [
            'shops' => $shops,
            'search' => $search,
            'searchUrl' => route('shop.index'),
        ]);
    }

    /**
     * Handle POST search request securely with CSRF.
     */
    public function search(Request $request)
    {
        $validated = $request->validate([
            'search' => ['nullable', 'string', 'max:255'],
        ]);

        $search = $validated['search'] ?? null;

        $shops = $this->getFilteredShops($search);

        return response()->json([
            'shops' => $shops,
        ]);
    }

    /**
     * Shared logic untuk pencarian shops.
     */
    private function getFilteredShops(?string $search)
    {
        return Sale::when($search, function ($query) use ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('address', 'like', "%{$search}%");
            });
        })->get();
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
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sale $sale)
    {
        //
    }
}
