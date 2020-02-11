# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @forgehe/lotide`

**Require it:**

`const _ = require('@forgehe/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual(...)`: given two arrays, prints in console.log if the two arrays are equal
* `assertEqual(...)`: given two primitive data types, prints in console.log if two primitive data types are equal
* `assertObjectsEqual(...)`: given two objects prints in console.log if two objects are equal
* `countLetters(...)`: returns an object with key of each letter that appears in a string, with a value of how many times that letter appeared in the string
* `countOnly(...)`: given an array of strings and an object of keys to check, returns an object with values of how many times the keys appears in the array
* `eqArrays(...)`: given two arrays, return a boolean if they are equal
* `eqObjects(...)`: given two objects, return a boolean if they are equal
* `findKey(...)`: given a object and a callback, returns the first key that returns truthy in the callback
* `findKeyByValue(...)`: given an object and a string, return the first key where the value is stored
* `flatten(...)`: given an array with nested arrays, return an array with the first layer of nest arrays moved to the main array
* `head(...)`: given an array, return the first element of the array
* `letterPositions(...)`: given a string, return an object listing each letter as a key with the value as the index where each letter is found. Does not work well with strings with multiples of the same letter
* `map(...)`: given an array and a callback, return a new array with the elements transformed by the callback function
* `middle(...)`: given an array, returns an array of the middle element of the array. If it is an array of even length, returns an array with the two middle elements of the array.
* `takeUntil(...)`: given an array and a string, return a new array with the elements of the array before the given string
* `tail(...)`: given an array, returns a new array without the first element of the given array 
* `without(...)`: given two arrays, returns a new array with the elements of the first array that don't match with any element from the second array