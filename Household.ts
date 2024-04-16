import People from "./People"
class Household {

    public city: string;
    public inhabitants: People[];
    public blockNum: number;


    constructor(inhabitants: People[], blockNum: number, city: string) {
        this.inhabitants = inhabitants; 
        this.blockNum = blockNum;
        this.city = city;


    }



}