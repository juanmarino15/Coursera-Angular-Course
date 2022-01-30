import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { } //getting the currently active route with activated route

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    this.router.navigate(['/servers'], {relativeTo: this.route}); //navigate method doenst know on which you are currently on. adding a second paratemeter will determine where you currrently are on
  }

}
