/*
    Question 8
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
*/


function canAttendAllMeetings(intervals) {
    // Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Check if there is any overlap between consecutive intervals
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        // If the start time of the current interval is before the end time of the previous interval, there is an overlap
        return false;
      }
    }
  
    // No overlap found, person can attend all meetings
    return true;
  }
  
  // Example usage:
  const intervals = [[0, 30], [5, 10], [15, 20]];
  const canAttend = canAttendAllMeetings(intervals);
  console.log(canAttend);  // Output: false