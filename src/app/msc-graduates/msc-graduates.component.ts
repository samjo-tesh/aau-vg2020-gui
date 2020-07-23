import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';


import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-msc-graduates',
  templateUrl: './msc-graduates.component.html',
  styleUrls: ['./msc-graduates.component.css'],
  animations: [
    trigger('topBottom', [
      transition("* => *", [style({transform: "translateY(-100%)"}), animate("200ms ease-in")])
    ]),
    trigger('leftRight', [
      transition("* => *", [style({transform: "translateX(-100%)"}), animate("200ms ease-out")])
    ])
  ]
})
export class MscGraduatesComponent implements OnInit {

  mscs: any;
  collegeName: string;
  departmentName: string;
  program: string;
  studentName: Array<string> = [];
  gender: Array<string> = [];
  image: Array<string> = [];
  mscStudents: Array<any> = [];
  student: any;

  topLeft: boolean = true;
  topRight: boolean = true;
  bottomLeft: boolean = true;
  bottomRight: boolean = true;

  constructor(private dataService: DataService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dataService.getMScs().subscribe((response) => {
      this.mscs = response;
      for (const msc of this.mscs) {
        this.collegeName = msc["collegeName"];
        for (const department of msc["departments"]) {
          this.departmentName = department["departmentName"];
          this.program = department["program"];
          // var oneStudent = [];
          // oneStudent.push(department["distinictionStudent"]["name"]);
          // oneStudent.push(department["distinictionStudent"]["gpa"]);
          // oneStudent.push(department["distinictionStudent"]["image"]);
          // this.mscStudents.push(oneStudent);
          var deptStudents = [];
          deptStudents.push(msc["collegeName"]);
          deptStudents.push(department["departmentName"]);
          deptStudents.push(department["program"]);
          var allStudents = [];
          for (const student of department["students"]) {
            var oneStudent = [];
            // oneStudent.push(department["distinictionStudent"]["name"]);
            // oneStudent.push(department["distinictionStudent"]["gpa"]);
            // oneStudent.push(department["distinictionStudent"]["image"]);
            // oneStudent.push(msc["collegeName"]);
            // oneStudent.push(department["departmentName"]);
            // oneStudent.push(department["program"]);
            oneStudent.push(student["name"]);
            oneStudent.push(student["gender"]);          
            oneStudent.push(student["image"]);
            allStudents.push(oneStudent);        
            // this.mscStudents.push(oneStudent);                    
          }
          deptStudents.push(allStudents);
          this.mscStudents.push(deptStudents);     
        }
      }
      this.slowIterate(this.mscStudents);          
    });
  }

  slowIterate(arr) {
    if (arr.length === 0) {
      arr = this.mscStudents;
    }
    this.collegeName = arr[0][0];
    this.departmentName = arr[0][1];
    this.program = arr[0][2];
    this.studentIterate(arr[0][3]);
    // this.studentName = arr[0][3];
    // this.image = arr[0][4];
    setTimeout(() => {
      this.slowIterate(arr.slice(1));
    }, 3000); 
  }

  studentIterate(arr) {
    var slicer;

    // const fileExists = require('file-exists');
    
    this.studentName = [];
    this.gender = [];
    this.image = [];

    if (arr.length === 0) {
      return;
    }

    if (arr.length >= 4) {
      this.topLeft = true;
      this.topRight = true;
      this.bottomLeft = true;
      this.bottomRight = true;

      slicer = 4;

      this.studentName.push(arr[0][0]);
      this.gender.push(arr[0][1]);

      this.httpClient.get(arr[0][2]).subscribe(() => {
        this.image.push(arr[0][2]);
      }, (err) => {      
        if (err.status === 404) {
          this.image.push("No Data");
        }
      });

      this.studentName.push(arr[1][0]);
      this.gender.push(arr[1][1]);

      this.httpClient.get(arr[1][2]).subscribe(() => {
        this.image.push(arr[1][2]);
      }, (err) => {      
        if (err.status === 404) {
          this.image.push("No Data");
        }
      });

      this.studentName.push(arr[2][0]);
      this.gender.push(arr[2][1]);

      this.httpClient.get(arr[2][2]).subscribe(() => {
        this.image.push(arr[2][2]);
      }, (err) => {      
        if (err.status === 404) {
          this.image.push("No Data");
        }
      });

      this.studentName.push(arr[3][0]);
      this.gender.push(arr[3][1]);

      this.httpClient.get(arr[3][2]).subscribe(() => {
        this.image.push(arr[3][2]);
      }, (err) => {      
        if (err.status === 404) {
          this.image.push("No Data");
        }
      });

    } else {
      if (arr.length % 4 === 1) {
        this.topLeft = true;
        this.topRight = false;
        this.bottomLeft = false;
        this.bottomRight = false;

        slicer = 1;
        
        this.studentName.push(arr[0][0]);
        this.gender.push(arr[0][1]);

        this.httpClient.get(arr[0][2]).subscribe(() => {
          this.image.push(arr[0][2]);
        }, (err) => {      
          if (err.status === 404) {
            this.image.push("No Data");
          }
        });      

      } else if (arr.length % 4 === 2) {
        this.topLeft = true;
        this.topRight = true;
        this.bottomLeft = false;
        this.bottomRight = false;

        slicer = 2;

        this.studentName.push(arr[0][0]);
        this.gender.push(arr[0][1]);

        this.httpClient.get(arr[0][2]).subscribe(() => {
          this.image.push(arr[0][2]);
        }, (err) => {      
          if (err.status === 404) {
            this.image.push("No Data");
          }
        });

        this.studentName.push(arr[1][0]);
        this.gender.push(arr[1][1]);

        this.httpClient.get(arr[1][2]).subscribe(() => {
          this.image.push(arr[1][2]);
        }, (err) => {      
          if (err.status === 404) {
            this.image.push("No Data");
          }
        });

      } else if (arr.length % 4 === 3) {
        this.topLeft = true;
        this.topRight = true;
        this.bottomLeft = true;
        this.bottomRight = false;

        slicer = 3;

        this.studentName.push(arr[0][0]);
        this.gender.push(arr[0][1]);

        this.httpClient.get(arr[0][2]).subscribe(() => {
          this.image.push(arr[0][2]);
        }, (err) => {      
          if (err.status === 404) {
            this.image.push("No Data");
          }
        });

        this.studentName.push(arr[1][0]);
        this.gender.push(arr[1][1]);

        this.httpClient.get(arr[1][2]).subscribe(() => {
          this.image.push(arr[1][2]);
        }, (err) => {      
          if (err.status === 404) {
            this.image.push("No Data");
          }
        });

        this.studentName.push(arr[2][0]);
        this.gender.push(arr[2][1]);

        this.httpClient.get(arr[2][2]).subscribe(() => {
          this.image.push(arr[2][2]);
        }, (err) => {      
          if (err.status === 404) {
            this.image.push("No Data");
          }
        });

      }
    }
    setTimeout(() => {
      this.studentIterate(arr.slice(slicer));
    }, 3000);
  }
}
