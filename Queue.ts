import People from "./People";

type QueueElement<T> = {
    people: T;
}

export default class PriorityQueue<T> {

    constructor() {
        this.items = People[];
    }
    private items: Array<QueueElement<T>> = [];

    enqueue(people){
        const queueElement: QueueElement<T> = { element }

    };

    dequeue(){
        this.items.shift()
    };

    size(){
        return this.items.length;
    };

    getCurrentWaitTime(){
        const conversionRate = 15
        const peopleInQueue = this.size();

        const result = conversionRate * peopleInQueue;
        console.log(`There are ${peopleInQueue} people in , wait time is: ${peopleInQueue} min.`
        )
        return result;
    }

}