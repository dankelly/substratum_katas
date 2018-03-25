function Babysitter(arrival, departure, bedtime){

    this.EARLIEST_ARRIVAL_TIME = 5;
    this.LATEST_BEDTIME = 12;
    this.LATEST_DEPARTURE_TIME = 4;

    this.arrival = arrival;
    this.departure = departure;
    this.departureOn24HourClock = (departure <= this.LATEST_DEPARTURE_TIME ? departure + 12 : departure);
    this.bedtime = bedtime;

    this.WATCHING_KIDS_RATE = 10;
    this.KIDS_IN_BED_RATE = 6;
    this.AFTER_MIDNIGHT_RATE = 8;

    this.calculatePay = function(){
        return this.getBasePay() - this.adjustPayForSleepingKids() - this.adjustPayForStayingAfterMidnight();
    };

    this.getBasePay = function(){
        var billableHours = this.departureOn24HourClock - this.arrival;
        return billableHours * this.WATCHING_KIDS_RATE;
    };

    this.adjustPayForSleepingKids = function(){
        var lastPossibleHourAtAfterBedtimeRate = Math.min(this.departureOn24HourClock, this.LATEST_BEDTIME);
        var potentialHoursBilledAtAfterBedtimeRate = lastPossibleHourAtAfterBedtimeRate - this.bedtime;
        var billableHoursAfterBedtime = (potentialHoursBilledAtAfterBedtimeRate > 0 ? potentialHoursBilledAtAfterBedtimeRate : 0);
        return (this.WATCHING_KIDS_RATE - this.KIDS_IN_BED_RATE) * billableHoursAfterBedtime;
    };

    this.adjustPayForStayingAfterMidnight = function(){
        var billableHoursAfterMidnight = (this.departure <= this.LATEST_DEPARTURE_TIME ? this.departure : 0);
        return (this.WATCHING_KIDS_RATE - this.AFTER_MIDNIGHT_RATE) * billableHoursAfterMidnight;
    };

}