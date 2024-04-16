import Map from "./Map";
import ReportMaker from "./reportmaker";
import ComplexReport from "./ComplexReport";

async function main() {
    const map = new Map();
    map.printMap();
    console.log("---End of Map---")
    map.registerForShots();
    const report = new ReportMaker(new ComplexReport(map));
    report.printDetails();
    console.log("---End of Report---")
    map.printMap();
    console.log("---End of Map---")
  }
  
  main();