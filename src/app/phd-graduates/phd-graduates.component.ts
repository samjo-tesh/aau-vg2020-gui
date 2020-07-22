import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-phd-graduates',
  templateUrl: './phd-graduates.component.html',
  styleUrls: ['./phd-graduates.component.css'],
  animations: [
    trigger('topBottom', [
      transition("* => *", [style({transform: "translateY(-100%)"}), animate("200ms ease-in")])
    ]),
    trigger('leftRight', [
      transition("* => *", [style({transform: "translateX(-100%)"}), animate("200ms ease-out")])
    ])
  ]
})
export class PhdGraduatesComponent implements OnInit {

  phds: any;
  name: string;
  collegeName: string;
  departmentName: string;
  program: string;
  fieldOfStudy: string;
  studentName: string;
  thesisTitle: string;
  image: string;
  advisorName: string;
  students: Array<any> = [];
  student: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPhds().subscribe((response) => {
      this.phds = response;
      for (const phd of this.phds) {
        this.collegeName = phd["collegeName"];
        for (const department of phd["departments"]) {
          this.departmentName = department["departmentName"];
          for (const student of department["students"]) {
            var oneStudent = [];
            oneStudent.push(phd["collegeName"]);
            oneStudent.push(department["departmentName"]);
            oneStudent.push(student["program"]);
            oneStudent.push(student["fieldOfStudy"]);
            oneStudent.push(student["name"]);
            oneStudent.push(student["thesisTitle"]);
            oneStudent.push(student["image"]);
            oneStudent.push(student["advisorName"]);
            this.students.push(oneStudent);                    
          }        
        }
      }
      this.slowIterate(this.students);          
    });
  }

  currentSlideIndex: 1;
  slowIterate(arr) {
    if (arr.length === 0) {
      arr = this.students;
    }
    this.collegeName = arr[0][0];
    this.departmentName = arr[0][1];
    this.program = arr[0][2];
    this.fieldOfStudy = arr[0][3];
    this.studentName = arr[0][4];
    this.thesisTitle = arr[0][5];
    this.image = arr[0][6];
    this.advisorName = arr[0][7];
    ++this.currentSlideIndex;
    setTimeout(() => {
      this.slowIterate(arr.slice(1));
    }, 5000); 
  }

}
