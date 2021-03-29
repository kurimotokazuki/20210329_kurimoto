const leapYearA = 2020;
const leapYearB = 2021;


if  (leapYearA % 4 == 0 && leapYearA % 100 != 0 && leapYearA % 400 == 0) {
  console.log("2020年はうるう年である")
} else if (leapYearB % 4 == 0 && leapYearB % 100 != 0 && leapYearB % 400 == 0) {
  console.log("2021年はうるう年である")
}