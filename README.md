
# diff-dates

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/diff-dates.svg)](https://www.npmjs.com/package/diff-dates) [![Downloads](https://img.shields.io/npm/dt/diff-dates.svg)](https://www.npmjs.com/package/diff-dates) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Make date differences.

## :cloud: Installation

```sh
$ npm i --save diff-dates
```


## :clipboard: Example



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

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`daty`](https://github.com/IonicaBizau/daty#readme)—A tiny library to manage date objects.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
