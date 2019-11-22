import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manual',
  templateUrl: './user-manual.component.html',
  styleUrls: ['./user-manual.component.scss']
})
export class UserManualComponent implements OnInit {

  pdfSrc= "./../assets/phylogeny-usermanual.pdf";
  
  
  constructor() { }

  ngOnInit() {
  }

}
