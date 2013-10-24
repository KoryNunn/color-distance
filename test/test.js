var test = require('tape'),
    colorDistance = require('../');

test('red black', function(t){
    var red = {r:255,g:0,b:0},
        black = {r:0,g:0,b:0};

    t.equal(
        colorDistance(red, black),
        255
    );
    t.end();
});

test('black white', function(t){
    var white = {r:255,g:255,b:255},
        black = {r:0,g:0,b:0};

    t.equal(
        colorDistance(black, white),
        441.6729559300637
    );
    t.end();
});

test('red green', function(t){
    var red = {r:255,g:0,b:0},
        green = {r:0,g:255,b:0};

    t.equal(
        colorDistance(red, green),
        360.62445840513925
    );
    t.end();
});

test('red orangy-red', function(t){
    var red = {r:255,g:0,b:0},
        orangyRed = {r:255,g:100,b:0};

    t.equal(
        colorDistance(red, orangyRed),
        100
    );
    t.end();
});