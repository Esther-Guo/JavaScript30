### Steps:
- [x] fetch data using the fetch API of the browser
- [x] write input match function
- [x] display the matched result
- [x] format matched result

### Takeaway
`fetch(endpoint)` returns a promise (sth that will eventually come back to this fetch).  
`fetch(endpoint).then(blod)` return a blob of data (it doesn't know what kind of data is fetched).  
`fetch(endpoint).then(blod => blob.json())` returns another promise.  
`fetch(endpoint).then(blod => blob.json()).then(data => cities=data)` returns raw data(Array of cities).

Use `push()` to push an array into an empty array will create a nested array. To avoid this, use spread method like in our case `cities.push(...data)`.

Event `change` only returns the input value when user clicks out of the input box. To get real-time input value, we need to moniter the `keyup` event too.  

When using Regex, if the word to match is a variable, we must create a const using `RegExp()` and put that regex into `match()` function. If the word to match is constant, just put it into `match()`.

The final step of highlight style is worth learning. (I didn't think of using `replace()`)

