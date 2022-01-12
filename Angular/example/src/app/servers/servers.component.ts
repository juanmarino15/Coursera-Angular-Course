import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false; //this is a property
  serverCreationStatus = 'No server was created'
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 20'];

  //constructors are methods executed at the time this component is created by angular
  constructor() {
    
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is'+ this.serverName;
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
