# Day 18 investigation: test both branch outcomes

Run `node starter.js` from this folder after your own core program or with a TA for targeted recovery. The starter is intentionally wrong. Its intended rule is that a positive remaining seat count selects the available message; zero selects full. Use valid integer counts through capacity.

1. Predict the condition and message at 9 registrations out of 10. Run and compare.
2. Try 10 out of 10. Identify the condition that sends the program down the wrong path.
3. Fix that comparison while leaving both messages as written. Repeat both tests and record expected versus actual results.
4. Restore the starting count of 9. Explain why testing only one branch gives limited evidence.

# Answers
1. My prediction is the condition for hasSeats is greater than 0. And the message that should print out is "A seat is available." However, when I ran the code, I received "The activity is full" message. 

2. When I tried 10 out of 10, I recevied the "A seat is available." message which is wrong because the activity is full. The condition that sends the program down the wrong path is the seatsLeft === 0, because that is set to trigger the "A seat is available message" when there is no seat and the opposite message "The activity is full" when there are seats available.

3. I changed the condition from seatsLeft === 0 to seatsLeft > 0. When we had 9 registrations, our seatsLeft equaled 1. This made the condition true and the expected and actual results matched, with an output message of "A seat is available". When I inputted 10 registrations, seatsLeft equaled 0. This made the condition false and the actual and predicted results matched with an output message of "The activity is full". 

4. Testing only one branch does not confirm if both true and false are working correctly. We could have the true condition working correctly and the false conditon is not, or vice versa. This is why it is important to test all branches. 

