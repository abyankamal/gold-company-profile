<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ExampleMail;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
        ]);

        Mail::to($data['email'])->send(new ExampleMail($data));

        return back()->with('success', 'Email sent successfully!');
    }
}
