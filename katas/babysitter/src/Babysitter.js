function Babysitter(){

    this.calculatePay = function(arrival, departure, bedtime){

        [arrival, departure, bedtime] = [arrival, departure, bedtime].map(time => time <= 4 ? time + 12 : time);

        function getHoursBetween(start, end){
            return end - start > 0 ? end - start : 0;
        }

        var baseRateHours = getHoursBetween(arrival, Math.min(departure, bedtime));
        var kidsInBedHours = getHoursBetween(Math.max(arrival, bedtime), Math.min(departure, 12));
        var lostSleepHours = getHoursBetween(12, departure);

        return 10 * baseRateHours + 6 * kidsInBedHours + 8 * lostSleepHours;
    };

}
