//import { covid19ImpactEstimator } from "./covid19ImpactEstimator";
const covid19ImpactEstimator = (data) => data;
const reportedCases = {};

function impact() {
    const currentlyInfected = reportedCases * 10;
}
impact(currentlyInfected);

function severeImpact() {
    const currentlyInfected = reportedCases * 50;
}
severeImpact(currentlyInfected);

function infectionsByRequestedTime() {
    Math.trunc(impact.currentlyInfected * 512)
    Math.trunc(severeImpact.currentlyInfected * 512)
}
infectionsByRequestedTime();
export default covid19ImpactEstimator;
