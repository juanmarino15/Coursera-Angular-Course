import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], //retrieving id from the url on the app module line 19
      name: this.route.snapshot.params['name']
   };

  this.paramSubscription= this.route.params //params is an observable. for this to work and be asyncronous we need to subscribe to it
    .subscribe(
      (params: Params) => {
        this.user.id = params['id']; //referring to the params passed
        this.user.name = params['name'];
      }
    );
  }
  
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
  
}
