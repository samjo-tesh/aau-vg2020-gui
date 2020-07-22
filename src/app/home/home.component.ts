import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  openPages(title) {
    if (title == "PhD" ){
      this._router.navigate(['phd_students']);
    } else if (title == "MSc" ){
      this._router.navigate(['msc_students']);
    } else if (title == "BSc" ){

    }
  }

}
