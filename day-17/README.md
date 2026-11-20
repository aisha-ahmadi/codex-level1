# Day 17 investigation: find the stale seat count

Use after the core individual program or as a TA-guided recovery. Run `node starter.js` from this folder. This is an original practice example, not a substitute for your own core work.

1. Predict initial seats left, updated registration count, and the correct final seats left.
2. Compare the expected and actual output. Trace when the subtraction ran.
3. Repair the smallest part of the program so it prints the updated remaining seats. Keep the fictional counts as provided for the first test.
4. Try a second starting number. Record expected and observed outputs, then restore the starting count.
5. Explain why `registered = registered + 2` does not refresh an earlier calculated value by itself.

# Answers:
1. The inital seats left should equal 7. The updated registration count is 11. The correct final seats should = 5. 
2. The expected output is: before = 7, registered = 11, after = 5. The actual output is after = 7 because the subtraction ran before the registration count changed. 
3. Added code to starter.js to print the actual seats left = 5. 
4. Used a starting number of 10. Expected output was: before = 10, registered = 12, after = 4. And the actual output matched my expected output. 
5. "registered = registered + 2" does not automatically recalculate seats left. We we need to run seatsLeft = capacity - registered after the registration count changes. 
