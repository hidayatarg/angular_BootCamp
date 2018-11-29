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
    serverId= 10;
    sreverStatus='offline';
    getServiceStatus(){
        return this.sreverStatus;
    }
}