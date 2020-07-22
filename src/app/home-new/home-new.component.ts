import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  openPages(title) {
    if (title == "PhD" ){
      this._router.navigate(['phd_graduates']);
    } else if (title == "MSc" ){
      this._router.navigate(['msc_graduates']);
    } else if (title == "BSc" ){

    }
  }
}
