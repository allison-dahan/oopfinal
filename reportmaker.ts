import IReport from "./report";

export default class ReportMaker {
    report: IReport;

    constructor(report: IReport) {
        this.report = report;
    }

    printDetails() {
        this.report.printDetails();
    }

}