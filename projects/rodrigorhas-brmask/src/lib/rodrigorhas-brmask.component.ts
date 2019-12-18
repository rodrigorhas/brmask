import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rhas-rodrigorhas-brmask',
  template: `
    <input type="text" rhasBrMasker [brmasker]="{cnpj: true}"/>
  `,
  styles: []
})
export class BrMaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
