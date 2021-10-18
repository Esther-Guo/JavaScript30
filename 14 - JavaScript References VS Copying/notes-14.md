### Takeaway
For numbers, strings and booleans, when assigning `b = a`, the value of `a` goes into `b`. So if you change `a` later, `b` is not affected.

For arrays, however, when assigning `c = d`, `c` is just a copy of `d`. So if `c` or `d` is changed, the other will change too.  
Same for objects.

4 Ways to Copy An Array:  
`const team2 = players.slice();`  
`const team3 = [].concat(players);`  
`const team4 = [...players];`  
`const team5 = Array.from(players);`

Copy an object:  
`const newObj = Object.assign({}, oldObj, {newProperties});`  
(not yet implemented in vanilla JS) `const newObj = {...oldObj};`

**Note**  
The above methods are only one-level deep, for both arrays and objects. If you want a deep clone, use `cloneDeep` (not recommended).  
Or, use `const newObj = JSON.parse(JSON.stringify(oldObj));`. It changes the object into a **string** and then parse it. 