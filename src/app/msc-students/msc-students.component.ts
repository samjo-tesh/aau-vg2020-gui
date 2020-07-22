import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-msc-students',
  templateUrl: './msc-students.component.html',
  styleUrls: ['./msc-students.component.css'],
  animations: [
    trigger('text', [
      transition("* => *", [style({transform: "translatey(-100%)"}), animate("200ms")])
      // transition(':enter', [animate('200ms ease-in')]),
      // transition(':leave', [animate('200ms ease-out')]),
   ])
  ]
})
export class MscStudentsComponent implements OnInit {

  mscs: any;
  name: string;
  collegeName: string;
  departmentName: string;
  studentName: string;
  thesisTitle: string;
  image: string;
  advisorName: string;
  mscStudents: Array<any> = [];
  student: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMScs().subscribe((response) => {
      this.mscs = response;
      for (const msc of this.mscs) {
        this.collegeName = msc["collegeName"];
        for (const department of msc["departments"]) {
          this.departmentName = department["departmentName"];
          // var oneStudent = [];
          // oneStudent.push(department["distinictionStudent"]["name"]);
          // oneStudent.push(department["distinictionStudent"]["gpa"]);
          // oneStudent.push(department["distinictionStudent"]["image"]);
          // this.mscStudents.push(oneStudent);
          for (const student of department["students"]) {
            var oneStudent = [];
            oneStudent.push(department["distinictionStudent"]["name"]);
            oneStudent.push(department["distinictionStudent"]["gpa"]);
            oneStudent.push(department["distinictionStudent"]["image"]);
            oneStudent.push(msc["collegeName"]);
            oneStudent.push(department["departmentName"]);
            oneStudent.push(student["name"]);            
            oneStudent.push(student["image"]);          
            this.mscStudents.push(oneStudent);                    
          }        
        }
      }
      this.slowIterate(this.mscStudents);          
    });
  }

  slowIterate(arr) {

  }

}
