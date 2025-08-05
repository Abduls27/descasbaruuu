<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FarmerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $farmers = User::where('role', 'petani')->get();

        return Inertia::render('Farmer/Index', [
            'farmers' => $farmers,
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('search');

        $farmers = User::where('role', 'petani')
            ->when(
                $query,
                fn($q) =>
                $q->where('name', 'like', '%' . $query . '%')
                    ->orWhere('email', 'like', '%' . $query . '%')
            )
            ->get();

        return response()->json($farmers);
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
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        $farmers = User::all();

        return Inertia::render("Farmer/Edit", [
            "farmers" => $farmers,
            "response"  => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return response()->json([
            'message' => 'Data berhasil diperbarui.',
            'redirect' => route('farmer.index'),
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('farmer.index');
    }
}
