// Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

// **Example 1:**
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// **Example 2:**
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// **Constraints:**
// - `1 <= intervals.length <= 10000`
// - `intervals[i].length == 2`
// - `0 <= starti <= endi <= 10000`

const merge = (intervals) => {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  let merged = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let mergedInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];

    if (interval[0] <= mergedInterval[1]) {
      mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
    } else {
      merged.push(mergedInterval);
      mergedInterval = interval;
    }
  }

  merged.push(mergedInterval);

  return merged;
};

// Example 1:
const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals1));
// Output: [[1, 6], [8, 10], [15, 18]]

// Example 2:
const intervals2 = [[1, 4], [4, 5]];
console.log(merge(intervals2));
// Output: [[1, 5]]