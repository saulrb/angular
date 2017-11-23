import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', as attribute
  //selector: '.app-servers' as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = "TestServer";
  serverCreated = false;
  servers = ['TestServer','TestServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = "Server was created!! Name is" + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
