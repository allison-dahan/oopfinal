import IReport from "./report";
import Map from "./Map";

export default class SimpleReport implements IReport{
    public name: Map;

    constructor(name: Map){
        this.name = name;
    }

    printDetails():string {
        
    }



}