### Bootstrap 3
npm install --save bootstrap@3

### Set it in angular.json
in build array you find the style.css (which is our style for the global)

### Generate component
ng generate component NAME
ng g c NAME


### Databinding = communication
communication between TypeScript code (Business Logic) <<<>>> Template (HTML)
    -String Inerpolation ({{ data }})
    -Property Binding ([property]="data")


From Html to typescript 

<<<<<<<<<<<<

Event Binding ((event)="expression")


Combination of both

Two way binding ([ngModel]="data")

#### Event binding
 (click)="onCreatedServer()"
 event natype in paranthesisi and the event name


 ### Directives
 are the instructions in the DOM!
 #### ngIf


 ### Marker


 ng g c recipes/recipe-list --spec false