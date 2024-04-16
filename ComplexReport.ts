import IReport from "./report";
import Map from "./Map"

export default class ComplexReport implements IReport{
    public name: Map;

    constructor(name: Map){
        this.name = name;
    }

    printDetails() {
    return 
        
    }



}