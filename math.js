// Finds avg/ mean
function mean(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  const mean = sum / nums.length;
  return mean;
}

// Finds median
function median(...nums) {
  let sorted = nums.sort();
  let half = Math.floor(sorted.length / 2);
  if (sorted.length % 2) {
    return sorted[half];
  }
  return sorted[half - 1] + sorted[half] / 2;
}

// Find most frequent
function mode(...nums) {
  const freq = createMostfreq(...nums);
  return findMostFreq(freq);
}

// creates Object of char frequency
function createMostfreq(...nums) {
  const freq = {};
  for (let num of nums) {
    if (!Object.hasOwn(freq, num)) {
      freq[num] = 1;
    } else {
      freq[num] += 1;
    }
  }
  return freq;
}

// finds character with the highest frequency
function findMostFreq(freqObj) {
  let most;
  let mostKey;
  for (let key in freqObj) {
    if (!most) {
      most = freqObj[key];
      mostKey = key;
    }
    if (freqObj[key] > most) {
      most = freqObj[key];
      mostKey = key;
    }
  }
  return mostKey;
}
// takes the query input, splits the string and converts each string to a int.
function createNumArr(numsStr) {
  let nums = numsStr.split(",");
  let newNums = [];
  nums.forEach((num) => {
    newNums.push(parseInt(num));
  });
  return newNums;
}

module.exports = { mean, median, mode, createNumArr };
