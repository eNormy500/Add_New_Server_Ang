import { Component, OnInit, EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() serverCreated = new EventEmitter<{serverName: string, ServerContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, ServerContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
    onAddServer(nameInput: HTMLInputElement) {
      this.serverCreated.emit(
        {
          serverName: nameInput.value,
         ServerContent: this.serverContentInput.nativeElement.value,
        });
    }
  
    onAddBlueprint(nameInput : HTMLInputElement) {
      {
        this.bluePrintCreated.emit(
          {
        serverName: nameInput.value,
       ServerContent: this.serverContentInput.nativeElement.value,
      });
    }
  }
}
