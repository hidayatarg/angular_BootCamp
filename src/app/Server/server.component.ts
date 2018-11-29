import { Component } from "@angular/core";



@Component({
selector: 'app-server',
templateUrl: './server.component.html',
styleUrls: ['./server.component.css']
})

export class ServerComponent{
    
    /*Optional
    serverId: number = 10;
    sreverStatus: string = 'offline';
    */
    serverId = 10;
    sreverStatus = 'offline';
    serverName = 'ServerName for Test';
    getServiceStatus(){
        return this.sreverStatus;
    }

    allowNewServer=false;
    serverCreationStatus='No server created'
   
    constructor() {
        // Turn on Button 2 sec
        setTimeout(() => {
            this.allowNewServer=true;
        }, 2000);
        
    }

    onCreatedServer(){
        this.serverCreationStatus= 'Server was created. Name is ' + this.serverName;
    }
    
    onUpdateServerName(event: Event){
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
        //Type of html element of this event will be html
        
    }

}