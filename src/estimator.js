const covid19ImpactEstimator = (data) => {
const input = data;
const currentlyInfected = data.reportedCases * 10;
const severeCurrentlyInfected = data.reportedCases * 50;
}

// Estimate
let estimateTime;
if (data.periodType === 'days') {
    estimateTime = data.timeToElapse;
}else if (data.periodType === 'weeks') {
    estimateTime = data.timeToElapse * 7;
}else if (data.periodType === 'months'){
    estimateTime = data.timeToElapse * 30;
}
const setOfDays = Math.floor(estimateTime / 3);
const infectionsByRequestedTime = currentlyInfected * (2 ** setOfDays);
const severeInfectionsByRequestedTime = severeCurrentlyInfected * (2 ** setOfDays);

const severeCasesByRequestedTime = Math.floor((15 /100) * infectionsByRequestedTime);

export default covid19ImpactEstimator;
