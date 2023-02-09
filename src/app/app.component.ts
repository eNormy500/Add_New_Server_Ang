import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server',name: 'Testserver', content: 'Just a test!'}];
  
  onServerAdded(serverDate: {serverName: string, ServerContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverDate.serverName,
      content: serverDate.ServerContent
    });
  }

  onBlueprintAdded(bluePrintDate: {serverName: string, ServerContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintDate.serverName,
      content: bluePrintDate.ServerContent
    });
  }
  
  onChangeFirst()
  {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst()
  {
    this.serverElements.splice(0, 1);
  }
}
