<?php

namespace App\Http\Controllers\Fruit;

use App\Models\Fruit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Fruit\FruitResource;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $fruits = Fruit::all();
        return FruitResource::collection($fruits);
    }
}
