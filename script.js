function mincost(arr) {
  if (arr.length <= 1) return 0; // Only one rope, no cost

  let cost = 0;

  while (arr.length > 1) {
    // Sort the ropes in ascending order
    arr.sort((a, b) => a - b);

    // Pick two smallest
    let first = arr.shift();
    let second = arr.shift();

    // Connect them
    let sum = first + second;
    cost += sum;

    // Push the new rope back
    arr.push(sum);
  }

  return cost;
}

// ✅ Test cases
console.log(mincost([4, 3, 2, 6]));     // 29
console.log(mincost([1, 2, 3, 4, 5]));  // 33
console.log(mincost([5]));              // 0
