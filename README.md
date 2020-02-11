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
* `findKeyByValue(...)`:
* `flatten(...)`:
* `head(...)`:
* `letterPositions(...)`:
* `map(...)`:
* `middle(...)`:
* `takeUntil(...)`:
* `tail(...)`:
* `without(...)`: