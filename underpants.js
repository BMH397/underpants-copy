// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
/*
I: Value
O: Returns value unchnaged 
C: 
E: lowercase
*/
_.identity = function(value){
return value;

}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
/*
I: Value
O: Return a string 
C:
E: The 
*/
_.typeOf = function (value) {
    if (value === null) {
        return "null";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === "object") {
        return "object";
    } else if (typeof value === "string") {
        return "string";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (typeof value === "function") {
        return "function";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else {
        return "unknown";
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
/*
I: An array A number
O: If array is not an array return[]
C: 
E: What if number is negative what if number is greather array length?
*/

 _.first = function (array, number) {
     //First  check if the input is an array
    if (!Array.isArray(array)) {
        return [];
    }
    //Now check if the number is not provided or not a number
    if (number === undefined || typeof number !== 'number') {
        return array[0];
    }
     //And finally check if the number is less than 1
    if (number < 1) {
        return [];
    }
      //Return the first number elements of the array
    return array.slice(0, number);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
/*
I: An array and a number 
O: If array is not an array return [] if number is not given or not a number retyr just the last element in array 
Otherwise return the last number items of array 
C:
E: What if number is negative? What if number is greater than array.length
*/

_.last = function _last(array, number) {
      //Lets check if the input is an array
    if (!Array.isArray(array)) {
        return [];
    }
    //Now check if the number is not provided or not a number
    if (number === undefined || typeof number !== 'number') {
        return array[array.length - 1];
    }
    //Now check if the number is less than 1
    if (number < 1) {
        return [];
    }
    //Finally return the last number elements of the array
    return array.slice(-number);
}
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
/*
I: Arguments an array a value 
O: Return the index of array that is ithe first occurance of value 
Return -1 if value is not in array 
Do not use [].indexof()!
C:
E: What if array has multiple occurance of value? What if val isnt in array?
*/
_.indexOf = function _indexOf(array, value) {
     //Iterate through each element in the array
    for (let i = 0; i < array.length; i++) {
        //Now see if the current element is equal to the value
        if (array[i] === value) {
            //Finally return the current index
            return i;
        }
    }
    //Value is not found return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
/*
I: Array and value 
O: Return true if array contains value, Return false otherwise, Gotta use the ternary operator 
C:
E: Did you use === what if no value is given 
*/
_.contains = function(array, value) {
    //First lets check if value is undefined
    if (value === undefined) {
        return false;
    }
    //Now loop through the array to check for the value
    for (let i = 0; i < array.length; i++) {
        // Use strict equality (===) to compare
        if (array[i] === value) {
            return true;
        }
    }
    //Finally return false if the value is not found
    return false;
}
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
/*
I: Collection and Function 
O: If collection is an array call function oncefor each element with the arguments the element its indec collection 
If collection is an object call function once for each property with the arguments the properts value its key collection
C:
E:
*/

_.each = function(collection, iteratee) {
   if (Array.isArray(collection)) {
       //Now iff collection is an array
       for (let i = 0; i < collection.length; i++) {
           //Now all iteratee with arguments
           iteratee(collection[i], i, collection);
       }
   } else {
       //For each key in collection
       for (let key in collection) {
          //If the key has an own property of collection


           if (collection.hasOwnProperty(key)) {
               //Call iteratee with arguments
               iteratee(collection[key], key, collection);
           }
       }
   }
};




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
/*
I: An Array
O: Return a new array of all elements from array with dups removed
Use _.indexof()
C:
E:
*/

//_.indexOf function
_.indexOf = function(array, value) {
    //First loop through each element in the array
    for (let i = 0; i < array.length; i++) {
       //Now if the current element matches the value
        if (array[i] === value) {
            //Return the index of the element
            return i;
        }
    }
    //And if the value is not found return -1
    return -1;
 };
 //_.unique function
 _.unique = function(array) {
   //Make an empty array to store unique elements
    const result = [];
   //Now loop through each element in the input array
    _.each(array, function(value) {
        //And if the element is not already in the result array
        if (_.indexOf(result, value) === -1) {
            //Add the element to the result array by using push
            result.push(value);
        }
    });
    //Finally return array
    return result;
 };
 

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
/*
I: An array a function
O: Call function for each element in array passing the arguments the element its index array
C: Return a new array of elements for which calling function returned true
E: What if function returns something other than true or false
*/

_.filter = function(array, predicate) {
  
    //Make an empty array to store
    const result = [];
    //First loop through each element in the array using _.each
    _.each(array, function(value, index, collection) {
        //And if the predicate returns true for the element
        if (predicate(value, index, collection)) {
             //Now add the element to the result array using push
            result.push(value);
        }
    });
    //Finally retrn the array with elements
    return result;
 };
 
 
 




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
/*
I: An array and function
O: Call function for each element in array passing the arguments the element its index array
C: Return a new array of elements for which calling function returned false
E:
*/


_.reject = function(array, predicate) {
    //Make an empty array to store the rejected elements
    const result = [];
    //Now loop through each element in the array using _.each
    _.each(array, function(value, index, collection) {
        //And if the predicate returns false for the current element
        if (!predicate(value, index, collection)) {
            //Add the current element to the result array using push
            result.push(value);
        }
    });
    //Finally return 
    return result;
 };
 

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
/*
I: An array a function
O: Call function for each element in array pssing it the aruguments element key array
C: Return an array that is made of 2 sub arrays
E: This is going to return an array of arrays
*/



_.partition = function(array, predicate) {
    //Make two empty arrays to store truthy and falsy element
     const truthy = [];
     const falsy = [];
     //Now loop through each element in the array using _.each
     _.each(array, function(value, index, collection) {
         //Now if the predicate returns true for the element
         if (predicate(value, index, collection)) {
             //Then add the element to the truthy array using push
             truthy.push(value);
         } else {
             //Then add the element to the falsy array using push
             falsy.push(value);
         }
     });
     //Return an array containing the truthy and falsy arrays
     return [truthy, falsy];
  };
  

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
/*
I: A collection a function
O: Call function for each element in collection passing the arguments listed above with 2 if statements
C: Save the return value of each function call in a new array
E:
*/



_.map = function(collection, iteratee) {
    //Make an empty array to store the results
   const result = [];
   //Now loop through each element in the collection using _.each
   _.each(collection, function(value, index, coll) {
   //Iteratee to the element and add the result to the result array using push


       result.push(iteratee(value, index, coll));
   });
   //Finally return the array containing the results
   return result;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
/*
I: An array of objects/ a property
O: Return an array containing the value of property for every element in the array
C: You must use _.map in the implementation
E:
*/



_.pluck = function(array, property) {
    //Now use _.map to iterate over each object in the array
   return _.map(array, function(obj) {
       //Now return the value of the property from each object
       return obj[property];
   }); 
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
/*
I: Collection and Function 
O: Call function for every element of collection with the paramaters listed above 
C: If the return value of calling function for every element is true return true. If even one of them returns false return false. 
If function is not provided return true if eveny element is truthy otherwise return false 
E: What if function doesnt return a boolean and what if function is not given 
*/

_.every = function(collection, predicate) {
    let result = true;

    // If no predicate is provided use a default function that checks for truthyiness?
    const checkFunction = predicate || function(value) {
        return !!value;
    };
     //Now loop through each element in the collection using _.each
    _.each(collection, function(value, index, coll) {
        //Now if the checkFunction returns false for the current element
        if (!checkFunction(value, index, coll)) {
             //Result to false
            result = false;
            return false; 
        }
    });
    //Finally return result 
    return result;
};





/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
/*
I: Collection and Function 
O: Call function for every element of collection withthe parameters if collection is an array current element its index collection 
if collection is an object current value current key collection 
C: If the return value of calling function is true for at least one element return true 
If it is false for all elements retuen false. If function is not provided return true if at least one element is truthy otherwise return false
E: What if function doesnt return a boolean What if function is not givven 
*/


_.some = function(collection, predicate) {
    let result = false;

    //So if no predicate is provided use a default function that checks for truthyiness
    const checkFunction = predicate || function(value) {
        return !!value;
    };
   //Now loop through each element in the collection using _.each
    _.each(collection, function(value, index, coll) {
        //And if the checkFunction returns true for the current element
        if (checkFunction(value, index, coll)) {
           //Now result to true
            result = true;
            
            return false; // Break out of the loop
        }
    });
    //Finally return result
    return result;
};






/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
/*
I: An Array Function A seed 
O: Call function for every element in collection passing the arguments previous result element index
C: Use the return value of function as the previous result for the next iteration. On the very first iteration use seed as the previous result.
If no seed was given use the first element value of collection as seed and continue to the next eleemnt. After the last iteration return the value ofthe final function call.
E: What if seed is not given 
*/


_.reduce = function(collection, iteratee, seed) {
    //Now check if seed is provided
    let hasSeed = arguments.length > 2; 
    //Use seed or first element
    let result = hasSeed ? seed : collection[0]; 
    

    //Now start from 0 if seed is provided else 1
    let startIndex = hasSeed ? 0 : 1; 

    _.each(collection, function(value, index, coll) {
        if (index >= startIndex) {
            result = iteratee(result, value, index);
        }
    });

    return result;
};




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
/*
I: An object an object ....Possibly more objects?LOL
O: Copy properties from object 2 to object 1. if more objects are passed in copy their properties to object 1 as well in the order they are passed in 
C: Return the update object 1 
E:
*/

_.extend = function(target, ...sources) {
    //Now loop through each source object in sources using _.each
    _.each(sources, function(source) {
       //Then loop through each key-value pair in the source object using _.each
        _.each(source, function(value, key) {
            //Now copy the value to the target object under the same key
            target[key] = value;
        });
    });
    //Finally return updated target 
    return target;
};






//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}