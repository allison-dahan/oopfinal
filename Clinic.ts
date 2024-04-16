export default class Clinic {
    public name: string;
    public blockNum: number;
    public staff: number;

    constructor(name: string, blockNum: number, staff: number) {
        this.name = name;
        this.blockNum = blockNum;
        this.staff = staff;
    }
}