var ARRIVE_AT_OR_AFTER_FIVE__DEPART_AT_OR_BEFORE_FOUR__TIMES_IN_12_HOURS = (function(){
    var MIDNIGHT = 12,
        AFTER_MIDNIGHT = 1,
        SWITCH_TO_PREMIUM_RATE_TIME = MIDNIGHT,
        LATEST_SITTER_DEPARTURE_TIME = 4;

    function normalizeTime(userProvidedTime){
        if(userProvidedTime >= AFTER_MIDNIGHT && userProvidedTime <= LATEST_SITTER_DEPARTURE_TIME){
            userProvidedTime += MIDNIGHT;
        }
        return userProvidedTime;
    }

    function afterBedtimeHours(times){
        if(times.arrival > times.bedtime) {
            return Math.max(SWITCH_TO_PREMIUM_RATE_TIME - times.arrival, 0);
        }
        var lastPossibleBilledHourAtAfterBedtimeRate = Math.min(times.departure, SWITCH_TO_PREMIUM_RATE_TIME);
        var potentialHoursBilledAtAfterBedtimeRate = lastPossibleBilledHourAtAfterBedtimeRate - times.bedtime;
        return potentialHoursBilledAtAfterBedtimeRate > 0 ? potentialHoursBilledAtAfterBedtimeRate : 0;
    }

    function premiumRateHours(times){
        if(times.departure > MIDNIGHT){
            return times.departure - MIDNIGHT;
        } else {
            return 0;
        }
    }

    return {
        normalizeTime: normalizeTime,
        afterBedtimeHours: afterBedtimeHours,
        premiumRateHours: premiumRateHours
    };

}());