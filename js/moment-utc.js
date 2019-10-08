/**
 * To use:
 * (1) Set your clock to a time zone before UTC, fot example UTC -03:00
 * (2) Run the example
 * (3) Observe - dates don't match, the local interpretation is in the previous day
 * 
 * Note: Same can be checked for the opposite case.
 *       For example time of sampleInUnixMS is 10pm and the local zone is set ot UTC +04:00.
 *       Then the local interpretation would be in the next day.
 *
 *    moment(value[, format])       - read as local
 *    moment(value[, format]).utc() - read as local and convert to UTC
 *    moment.utc(value[, format])   - read as UTC
 */


// interpreting utc time in unix format with moment
console.clear();
const l = console.log;
const lm = (m) => l(m.format("YYYY-MM-DD HH:mm:ss.SSS UTCZ"));

// unix value
const sampleInUnixMS=1602374400000
// incorrect - interpreting it as local time
const m1=moment(sampleInUnixMS);
// correct - interpreting it as UTC time (at midnight 00:00)
const m2=moment.utc(sampleInUnixMS);

// print to visually check
l(sampleInUnixMS);
lm(m1);
lm(m2);


/* To use - set your clock to a time zone after UTC, fot example UTC +04:00
*/
l('------------------------- Opposite case - time 10pm  ---------------------------')
l('--------- (to observe the issue - set local zone to UTC+04:00 for example) ---------')
const opp = moment('2020-10-11 22:00.000','YYYY-MM-DD HH:mm.SSS').utc()
lm(opp)
l(opp.unix())



l('-------------------------- moment.unix() is in seconds  ---------------------------')

const m3=moment.utc('2020-10-11 22:00.000','YYYY-MM-DD HH:mm.SSS')
lm(m3)
l(m3.unix())
// prints 1602374400
// while in ms it would be x1000 -> 1602374400000
// as is the value of sampleInUnixMS above
l(`x1000 -> in MS:`)
l(m3.unix()*1000)