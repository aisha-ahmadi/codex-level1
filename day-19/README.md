# Optional investigation: Is the supply desk ready?

After required practice, open `supply-desk.js` in your editor and run `node supply-desk.js` from this folder. All values are fictional. The supply desk can pack a group when the desk is open and it has **at least as many kits as learners**. A closed desk always prints its closure message first.

Before changing the logic, predict the message for 7 learners with 6, 7, and 8 kits while the desk is open. Also predict it with 7 kits when the desk is closed. Change only the inputs to run each case; compare the expected and observed outputs. Locate the one comparison that violates the rule, make the smallest repair, and run all four cases again.

Record the failing input, the expected and observed messages, the expression you changed, and the retest result. Explain why testing just 8 kits would not have exposed the issue.

# Answers:

1. Predictions: 6 Kits -> More kits needed; 7 kits -> Enough Kits; 8 kits -> Enough kits; 7 kits and desk is closed -> The desk is closed. 

2. The expected and actual output failed when we had the desk opened and had 7 learners and 7 kits. The comparison that violates the rule is "kitCount > learnerCount." We need to change this comparison to kitCount >= learnerCount. 8 kits would not have exposed the issue because 8 is greater than 7 regardless if we use > or >=. We would still get a return of "Enough kits". 

