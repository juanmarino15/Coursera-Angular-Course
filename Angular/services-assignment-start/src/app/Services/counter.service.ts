export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive(){
        this.activeToInactiveCounter++
        console.log('Inactive to active count is ' + this.activeToInactiveCounter);
    }
    incrementInactiveToActive(){
        this.inactiveToActiveCounter++
        console.log( 'Active to inactive count is '+ this.inactiveToActiveCounter);
    }
}