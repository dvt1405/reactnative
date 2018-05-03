'use strict'

function binarySearch(input, target) {
  const right = input.length-1;
  return (target < input[0] || input[right] < target) ? -1 : binary(input, 0, right, target);
}

function binary(input, left, right, target){
  const mid = Math.floor((left + right)/2);
  return (input[mid] == target) ?  mid 
              : (right == left) ? -1
              : (input[mid] < target) ? binary(input,mid+1, right,target) : binary(input, left, mid-1,target);            
}

module.exports = binarySearch