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
    serverName = 'Testserver';
    serverCreate = false;
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

        // random server status
        this.sreverStatus= Math.random() > 0.5 ? 'online' : 'offline'

        
    }

    onCreatedServer(){
        this.serverCreationStatus= 'Server was created. Name is ' + this.serverName;
        this.serverCreate = true;
    }
    
    onUpdateServerName(event: Event){
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
        //Type of html element of this event will be html
        
    }

    getColor(){
        return this.sreverStatus === 'online' ? 'green' : 'red';
    }

}