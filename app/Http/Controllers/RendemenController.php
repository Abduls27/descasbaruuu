<?php

namespace App\Http\Controllers;

use App\Models\Rendemen;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Carbon\Carbon;

class RendemenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');
        $rendemens = $this->getFilteredRendemens($search);

        return Inertia::render("Rendemen/Index", [
            'rendemens' => $rendemens,
            'search' => $search,
            'searchUrl' => route('rendemen.index'),
        ]);
    }

    /**
     * Handle AJAX search.
     */
    public function search(Request $request)
    {
        $search = $request->input('search');
        $rendemens = $this->getFilteredRendemens($search);

        return response()->json($rendemens);
    }

    /**
     * Shared query logic for index and search.
     */
    private function getFilteredRendemens(?string $search)
    {
        $user = Auth::user();

        $query = Rendemen::query()
            ->with('user') 
            ->orderBy('created_at', 'desc');

        if ($user->role !== 'admin') {
            $query->where('user_id', $user->id);
        }

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('jenis', 'like', "%{$search}%")
                  ->orWhereHas('user', fn ($sub) =>
                      $sub->where('name', 'like', "%{$search}%")
                  );
            });
        }

        return $query->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Rendemen/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $date = Carbon::parse($request->date);
        $tanggalFormatted = $date->format('dmy'); // contoh: 050625

        // Ambil jumlah data untuk tanggal itu
        $count = Rendemen::whereDate('date', $date)->count() + 1;
        $urutan = str_pad($count, 2, '0', STR_PAD_LEFT); // contoh: 01, 02, dst

        $code = "{$urutan}-{$tanggalFormatted}-WI";


        $request->validate([
            'name' => 'required|string',
            'date' => 'required|date',
            'jenis' => 'required|string',
            'wo' => 'required|numeric',
            'wu' => 'required|numeric',
            'sg' => 'required|numeric',
            'sc' => 'required|numeric',
        ]);

        $user = Auth::user();
        Rendemen::create([
            'code' => $code,
            'user_id' => $user->id,
            'name' => $request->input('name'),
            'date' => $request->input('date'),
            'jenis' => $request->input('jenis'),
            'wo' => $request->input('wo'),
            'wu' => $request->input('wu'),
            'sg' => $request->input('sg'),
            'sc' => $request->input('sc'),
        ]);


        return response()->json([
            'message' => 'oke'
        ]);
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

        return Inertia::render("Rendemen/Edit", [
            "response"  => $rendemen,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rendemen $rendemen)
    {
        $request->validate([
            'name'  => 'required|string',
            'date'  => 'required|date',
            'jenis' => 'required|string',
            'wo'    => 'required|numeric',
            'wu'    => 'required|numeric',
            'sg'    => 'required|numeric',
            'sc'    => 'required|numeric',
        ]);

        // Jika ingin kode tetap sama, atau bisa juga update kode jika tanggal berubah
        // Contoh kalau mau update kode jika tanggal berubah (optional):
        if ($request->input('date') !== $rendemen->date) {
            $date = Carbon::parse($request->input('date'));
            $tanggalFormatted = $date->format('dmy');
            $count = Rendemen::whereDate('date', $date)->count() + 1;
            $urutan = str_pad($count, 2, '0', STR_PAD_LEFT);
            $code = "{$urutan}-{$tanggalFormatted}-WI";
            $rendemen->code = $code;
        }

        $rendemen->name = $request->input('name');
        $rendemen->date = $request->input('date');
        $rendemen->jenis = $request->input('jenis');
        $rendemen->wo = $request->input('wo');
        $rendemen->wu = $request->input('wu');
        $rendemen->sg = $request->input('sg');
        $rendemen->sc = $request->input('sc');

        $rendemen->save();

        return redirect()->route('rendemen.index')->with('success', 'Data rendemen berhasil diperbarui.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rendemen $rendemen)
    {
        $rendemen->delete();
        return redirect()->route('rendemen.index');
    }
}
