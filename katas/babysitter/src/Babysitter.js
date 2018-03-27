function Babysitter(impl){

    this.BASE_RATE = 10;
    this.AFTER_KIDS_IN_BED_RATE = 6;
    this.LOST_SLEEP_RATE = 8;

    this.rulesImplementation = impl;
    this.times = {};

    this.calculatePay = function(arrival, departure, bedtime){
        this.times.arrival = this.rulesImplementation.normalizeTime(arrival);
        this.times.departure = this.rulesImplementation.normalizeTime(departure);
        this.times.bedtime = this.rulesImplementation.normalizeTime(bedtime);

        return this.basePay() - this.payReductionForSleepingKids() + this.payPremiumForLostSleep();
    };

    this.basePay = function(){
        var billableHours = this.times.departure - this.times.arrival;
        return billableHours * this.BASE_RATE;
    };

    this.payReductionForSleepingKids = function(){
        var billableHoursAfterBedtime = this.rulesImplementation.afterBedtimeHours(this.times);
        return (this.BASE_RATE - this.AFTER_KIDS_IN_BED_RATE) * billableHoursAfterBedtime;
    };

    this.payPremiumForLostSleep = function(){
        var billableHoursAtPremiumRate = this.rulesImplementation.premiumRateHours(this.times);
        return (this.LOST_SLEEP_RATE - this.BASE_RATE) * billableHoursAtPremiumRate;
    };

}