import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-citi-data',
  templateUrl: './citi-data.component.html',
  styleUrls: ['./citi-data.component.css']
})
export class CitiDataComponent {
  @Input() data:any;

}
