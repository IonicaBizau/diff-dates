const dateUnitMs = require("date-unit-ms");

module.exports = function diffDates(d1, d2, units) {
    var val = null;
    switch (units) {
        case "years":
            val = d1.getFullYear() - d2.getFullYear();
            break;
        case "weeks":
            val = diffDates(d1, d2) / dateUnitMs.week;
            break;
        case "months":
            val = d2.getMonth() - d1.getMonth()
                + 12 * diffDates(d1, d2, "years")
                ;
            break;
        case "days":
            val = diffDates(d1, d2) / dateUnitMs.day;
            break;
        case "hours":
            val = diffDates(d1, d2) / dateUnitMs.hour;
            break;
        case "minutes":
            val = diffDates(d1, d2) / dateUnitMs.minute;
            break;
        case "seconds":
            val = diffDates(d1, d2) / dateUnitMs.second;
            break;
        default:
            return d1 - d2;
    }

    return Math.round(val);
};
