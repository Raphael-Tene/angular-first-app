import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  // this is an attribute
  name: string = 'Server';
  allowNewServer: boolean = false;
  // this is a method
  serverCreated: string = 'No server was created.';
  serverName: string = '';
  serverIsCreated: boolean = false;
  servers: string[] = ['AWS', 'Vercel'];
  greetingString: string = 'Hello';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverIsCreated = true;
    this.servers.push(this.serverName);
    this.serverCreated = this.serverName + ' server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateGreetingString(event: Event) {
    this.greetingString = (<HTMLInputElement>event.target).value;
  }
}
