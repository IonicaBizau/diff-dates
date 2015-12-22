# diff-dates [![Support this project][donate-now]][paypal-donations]

Make date differences.

## Installation

```sh
$ npm i --save diff-dates
```

## Example

```js
const diffDates = require("diff-dates");

var present = new Date(2015, 11, 16)
  , romanianRevolution = new Date(1989, 11, 16)
  ;

console.log(diffDates(present, romanianRevolution));
// => 820454400000

console.log(diffDates(present, romanianRevolution, "years"));
// => 26

console.log(diffDates(present, romanianRevolution, "months"));
// => 312

console.log(diffDates(present, romanianRevolution, "days"));
// => 9496

console.log(diffDates(present, romanianRevolution, "hours"));
// => 227904

console.log(diffDates(present, romanianRevolution, "minutes"));
// => 13674240

console.log(diffDates(present, romanianRevolution, "seconds"));
// => 820454400
```

## Documentation

### `diffDates(d1, d2, units)`
Makes a difference between the first date object (`d1`) and the second one (`d1`).

#### Params
- **String** `d1`: The first date object.
- **Date** `d2`: The second date object.
- **String** `units`: One of the following string values (by default it will be the `milliseconds`):
 - `"years"`
 - `"weeks"`
 - `"months"`
 - `"days"`
 - `"hours"`
 - `"minutes"`
 - `"seconds"`
 - `"milliseconds"`

#### Return
- **Number** The difference result in specified units.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md