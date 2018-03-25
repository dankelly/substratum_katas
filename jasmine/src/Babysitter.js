function Babysitter(){

    this.EARLIEST_ARRIVAL_TIME = 5;
    this.LATEST_BEDTIME = 12;
    this.LATEST_DEPARTURE_TIME = 4;

    this.WATCHING_KIDS_RATE = 10;
    this.KIDS_IN_BED_RATE = 6;
    this.AFTER_MIDNIGHT_RATE = 8;

    this.calculatePay = function(arrival, departure, bedtime){
        this.arrival = arrival;
        this.departure = departure;
        this.bedtime = bedtime;

        return this.getBasePay() - this.adjustPayForSleepingKids() - this.adjustPayForStayingAfterMidnight();
    };

    this.stayedAfterMidnight = function(){
        return this.departure <= this.LATEST_DEPARTURE_TIME;
    };

    this.getDepartureTimeOn24HourClock = function(){
        return this.stayedAfterMidnight() ? this.departure + 12 : this.departure;
    };

    this.getBasePay = function(){
        var billableHours = this.getDepartureTimeOn24HourClock() - this.arrival;
        return billableHours * this.WATCHING_KIDS_RATE;
    };

    this.adjustPayForSleepingKids = function(){
        var lastPossibleBilledHourAtAfterBedtimeRate = Math.min(this.getDepartureTimeOn24HourClock(), this.LATEST_BEDTIME);
        var potentialHoursBilledAtAfterBedtimeRate = lastPossibleBilledHourAtAfterBedtimeRate - this.bedtime;
        var billableHoursAfterBedtime = potentialHoursBilledAtAfterBedtimeRate > 0 ? potentialHoursBilledAtAfterBedtimeRate : 0;
        return (this.WATCHING_KIDS_RATE - this.KIDS_IN_BED_RATE) * billableHoursAfterBedtime;
    };

    this.adjustPayForStayingAfterMidnight = function(){
        var billableHoursAfterMidnight = this.stayedAfterMidnight() ? this.departure : 0;
        return (this.WATCHING_KIDS_RATE - this.AFTER_MIDNIGHT_RATE) * billableHoursAfterMidnight;
    };

}