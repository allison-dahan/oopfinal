export default class People {
    public phn: string;
    public fullName: string;
    public age: number;
    public isVaccinated: Boolean;

    constructor(phn: string, fullName: string, age: number, isVaccinated: Boolean,) {
        this.phn = phn;
        this.fullName = fullName;
        this.age = age;
        this.isVaccinated = isVaccinated;
    }

    currentIntake() {
        if (this.age < 20) {
            return false
        } else if (this.age > 50) {
            return true;
        }
    }

}