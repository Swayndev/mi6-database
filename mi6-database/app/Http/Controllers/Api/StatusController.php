<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Status;

class StatusController extends Controller
{
    public function index()
    {

        $statuses = Status::query()
            ->orderby('name')
            // ->limit(6)
            ->get();

        return $statuses;
    }
}
