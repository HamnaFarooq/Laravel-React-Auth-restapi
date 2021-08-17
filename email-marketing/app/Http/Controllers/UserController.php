<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function dashboard(){
        $response = [
            "message" => "Logged in, Welcome to Dashboard"
        ];

        return response($response, 201);
    }

}
