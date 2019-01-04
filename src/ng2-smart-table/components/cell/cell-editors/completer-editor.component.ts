import { Component, OnInit } from '@angular/core';

import { DefaultEditor } from './default-editor';

@Component({
  selector: 'completer-editor',
  template: `
    TODO: add completer
    `,
})
export class CompleterEditorComponent extends DefaultEditor implements OnInit {

  completerStr: string = '';

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
      const config = this.cell.getColumn().getConfig().completer;
      config.dataService.descriptionField(config.descriptionField);
    }
  }

  onEditedCompleter(event: { title: '' }): boolean {
    this.cell.newValue = event.title;
    return false;
  }
}
