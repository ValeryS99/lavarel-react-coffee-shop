<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CoffeeSeeder extends Seeder
{
    public function run(): void
    {

        \Illuminate\Support\Facades\DB::table('coffees')->insert([
            [
                'name' => 'Эспрессо',
                'description' => 'Крепкий и насыщенный эспрессо. Идеальное начало дня.',
                'base_price' => 250.00,
                'size_id' => 1,
                'image' => '/images/coffee/espresso.png',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Латте',
                'description' => 'Нежный кофе с молоком и густой пенкой. Мягкий вкус.',
                'base_price' => 350.00,
                'size_id' => 2,
                'image' => '/images/coffee/latte.png',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Капучино',
                'description' => 'Классический итальянский кофе с молочной пенкой.',
                'base_price' => 380.00,
                'size_id' => 3,
                'image' => '/images/coffee/cappuccino.png',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
             [
                'name' => 'Мокко',
                'description' => 'Кофе с шоколадом и взбитыми сливками для сладкоежек.',
                'base_price' => 420.00,
                'size_id' => 3,
                'image' => '/images/coffee/mocha.png',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
