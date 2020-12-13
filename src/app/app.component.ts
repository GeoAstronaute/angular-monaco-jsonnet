import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'monaco-jsonnet';
  options = {
    language: 'javascript'
  }
  @ViewChild('#editor', { static: false })
  editor!: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    monaco.editor.create(this.editor.nativeElement, {
      value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript"
    });
  }

}
