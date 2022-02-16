import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';  //to create our own observable
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  //  this.firstObsSubscription = interval(1000).subscribe(count => {    //creating the observable. interval() works the same as setinterval()
  //     console.log(count);
  //   });

    const customeIntervalObservable = Observable.create(observer => { //creating an observable from scratch. the observer is the listener
      let count = 0;      
      setInterval(() =>{
        observer.next(count);
        if (count == 5) {
          observer.complete(); //no values after complete
        }
        if (count > 3){
          observer.error (new Error ('Count is greater than 3'));
        }
        count ++;
      }, 1000);
    });

   

   this.firstObsSubscription =  customeIntervalObservable.pipe(filter(data =>{
     return data > 0; //return true if data is >0
   }),map( (data:number) => { //operators, this allows you to do transformations or operations BEFORE subscribing and passing the data around
    return 'Round ' + (data+1);
  })).subscribe(data => {
      console.log(data);
    }, error => {// showing error to user
        console.log(error);
        alert(error.message);
    }, () => { ///message after completed
      console.log('Completed!');
    });
  }

  ngOnDestroy(){
      this.firstObsSubscription.unsubscribe();
  }

}
