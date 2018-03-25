function Babysitter(){

    this.WATCHING_KIDS_RATE = 10;
    this.KIDS_IN_BED_RATE = 6;
    this.AFTER_MIDNIGHT_RATE = 8;

    this.convertToBabysitterRelativeTime = function(time){
        if(time >= TIMES_IN_12_HOURS.AFTER_MIDNIGHT && time <= TIMES_IN_12_HOURS.LATEST_SITTER_DEPARTURE_TIME){
            time += 12;
        }
        return time;
    };

    this.calculatePay = function(arrival, departure, bedtime){
        this.arrival = this.convertToBabysitterRelativeTime(arrival);
        this.departure = this.convertToBabysitterRelativeTime(departure);
        this.bedtime = this.convertToBabysitterRelativeTime(bedtime);

        return this.getBasePay() - this.adjustPayForSleepingKids() - this.adjustPayForStayingAfterMidnight();
    };

    this.stayedAfterMidnight = function(){
        return this.departure > TIMES_IN_12_HOURS.MIDNIGHT;
    };

    this.getBasePay = function(){
        var billableHours = this.departure - this.arrival;
        return billableHours * this.WATCHING_KIDS_RATE;
    };

    this.adjustPayForSleepingKids = function(){
        var lastPossibleBilledHourAtAfterBedtimeRate;
        if(this.arrival > this.bedtime){
            lastPossibleBilledHourAtAfterBedtimeRate = this.bedtime;
        } else {
            lastPossibleBilledHourAtAfterBedtimeRate = Math.min(this.departure, TIMES_IN_12_HOURS.LATEST_KIDS_BEDTIME);
        }
        var potentialHoursBilledAtAfterBedtimeRate = lastPossibleBilledHourAtAfterBedtimeRate - this.bedtime;
        var billableHoursAfterBedtime = potentialHoursBilledAtAfterBedtimeRate > 0 ? potentialHoursBilledAtAfterBedtimeRate : 0;
        return (this.WATCHING_KIDS_RATE - this.KIDS_IN_BED_RATE) * billableHoursAfterBedtime;
    };

    this.adjustPayForStayingAfterMidnight = function(){
        var billableHoursAfterMidnight = this.stayedAfterMidnight() ? this.departure - TIMES_IN_12_HOURS.MIDNIGHT : 0;
        return (this.WATCHING_KIDS_RATE - this.AFTER_MIDNIGHT_RATE) * billableHoursAfterMidnight;
    };

}