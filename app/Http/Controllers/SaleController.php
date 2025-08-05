<?php

namespace App\Http\Controllers;

use App\Models\Rendemen;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();

        if ($user->role === 'admin') {
            $sales = Sale::with(['rendemen'])->get();
        } else {
            $sales = Sale::with('rendemen')
                ->where('user_id', $user->id)
                ->get();
        }

        return Inertia::render("Sale/Index", compact('sales'));
    }

    public function search(Request $request)
    {
        $user = Auth::user();
        $search = $request->input('search');

        $sales = Sale::query()
            ->with('rendemen')
            ->when($user->role !== 'admin', fn($q) => $q->where('user_id', $user->id))
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('name', 'like', "%{$search}%")
                        ->orWhere('location', 'like', "%{$search}%");
                });
            })
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($sales);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        $rendemens = Rendemen::where('user_id', $user->id)
            ->select('id', 'code', 'sg', 'sc')
            ->get();

        return Inertia::render("Sale/Create", [
            'rendemens' => $rendemens
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'rendemen_id' => 'required',
            'name'        => 'required|string|max:255',
            'nik'         => 'required|string|max:20',
            'email'       => 'required|email',
            'address'     => 'required|string',
            'maps'        => 'required|string',
            'img'         => 'required|image|mimes:jpeg,png,jpg,webp,gif,svg|max:4096',
            'land'        => 'required|string',
            'number'      => 'required|numeric',
            'price'       => 'required|numeric',
            'reflaction'  => 'required|string',
            'weight'      => 'required|numeric',
        ]);

        if ($request->hasFile('img')) {
            $imageName = time() . '.' . $request->file('img')->extension();
            $request->file('img')->move(public_path('cassava'), $imageName);
        }


        $user = Auth::user();
        Sale::create([
            'rendemen_id' => $request->input('rendemen_id'),
            'user_id'     => $user->id,
            'name'        => $request->input('name'),
            'nik'         => $request->input('nik'),
            'email'       => $request->input('email'),
            'address'     => $request->input('address'),
            'maps'        => $request->input('maps'),
            'img'         => isset($imageName) ? $imageName : null,
            'land'        => $request->input('land'),
            'number'      => $request->input('number'),
            'price'       => $request->input('price'),
            'reflaction'  => $request->input('reflaction'),
            'weight'      => $request->input('weight'),
        ]);

        return response()->json([
            'message' => 'oke',
            'redirect' => route('sale.index'),
        ]);
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
        $rendemens = Rendemen::all(); // kalau belum diambil
        return Inertia::render("Sale/Edit", [
            "rendemens" => $rendemens,
            "response"  => $sale,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sale $sale)
    {
        $request->validate([
            'rendemen_id' => 'required',
            'name'        => 'required|string|max:255',
            'nik'         => 'required|string|max:20',
            'email'       => 'required|email',
            'address'     => 'required|string',
            'maps'        => 'required|string',
            'land'        => 'required|string',
            'number'      => 'required|numeric',
            'price'       => 'required|numeric',
            'reflaction'  => 'required|string',
            'weight'      => 'required|numeric',
            'img'         => 'nullable|image|mimes:jpeg,png,jpg,webp,gif,svg|max:4096',
        ]);

        // Jika ada gambar baru, simpan dan hapus gambar lama
        if ($request->hasFile('img')) {
            // Hapus file lama jika ada
            if ($sale->img && file_exists(public_path('cassava/' . $sale->img))) {
                unlink(public_path('cassava/' . $sale->img));
            }

            $imageName = time() . '.' . $request->file('img')->extension();
            $request->file('img')->move(public_path('cassava'), $imageName);
            $sale->img = $imageName;
        }

        $sale->update([
            'rendemen_id' => $request->input('rendemen_id'),
            'name'        => $request->input('name'),
            'nik'         => $request->input('nik'),
            'email'       => $request->input('email'),
            'address'     => $request->input('address'),
            'maps'        => $request->input('maps'),
            'land'        => $request->input('land'),
            'number'      => $request->input('number'),
            'price'       => $request->input('price'),
            'reflaction'  => $request->input('reflaction'),
            'weight'      => $request->input('weight'),
            // 'img' sudah di-update di atas jika ada
        ]);

        return response()->json([
            'message' => 'Data berhasil diperbarui.',
            'redirect' => route('sale.index'),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sale $sale)
    {
        $sale->delete();
        return redirect()->route('sale.index');
    }
}
