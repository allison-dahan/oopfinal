import IReport from "./report";
export default class SimpleReport implements IReport{
    public name: String;


    constructor(name: string){
        this.name = name;
    }

    printDetails() {
        
    }



}