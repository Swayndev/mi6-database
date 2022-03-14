<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Person;

class PeopleController extends Controller
{
    public function index()
    {
        // $people = Person::query()
        //     ->orderBy('name', 'asc')
        //     ->get()
        //     ->limit(10);

        return view('people.index'); // compact('people')
    }

    // public function create()
    // {
    //     $person = new People;

    //     return view('people.edit', compact('person'));
    // }
}
