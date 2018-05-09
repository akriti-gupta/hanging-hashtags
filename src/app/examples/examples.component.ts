import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {

  constructor() { }

  subjects = ["Math","Science","English"];
  grades = ["1-3","4-6","7-9"];

  coursePlan = [
    {
      grade: "1-3",
      subjectPlan: 
      [
        {subject : "Math", 
        plan: 
        ["Teacher will place a variety of images from magazines that show volume in a avriety of ways: drink containers, swimming pools, beakers and boxes/cubes",
         "B", "C"]
      },
        {subject : "Science",plan: ["A", "B", "C"]},
        {subject : "English",plan: ["A", "B", "C"]}
      ]
    },

    {
      grade: "4-6",
      subjectPlan: 
      [
        {subject : "Math", plan: ["2A", "2B", "2C"]},
        {subject : "Science",plan: ["2A", "2B", "2C"]},
        {subject : "English",plan: ["2A", "2B", "2C"]}
      ]
    },

    {
      grade: "7-9",
      subjectPlan: 
      [
        {subject : "Math", plan: ["3A", "3B", "3C"]},
        {subject : "Science",plan: ["3A", "3C"]},
        {subject : "English",plan: ["3A", "3B", "3C"]}
      ]
    }
  ];
  gradeVal = this.coursePlan[0].grade;
  subjectVal = this.coursePlan[0].subjectPlan[0].subject;
  courseDetail = this.coursePlan[0].subjectPlan[0].plan;

  changeCourse(){

    for(var i = 0 ;i < this.coursePlan.length; i++){
      var grade = this.coursePlan[i].grade;
      if(grade == this.gradeVal){
        for(var j = 0 ; j < this.coursePlan[i].subjectPlan.length; j++){
          var subject = this.coursePlan[i].subjectPlan[j].subject;
          if(subject == this.subjectVal){
            this.courseDetail = this.coursePlan[i].subjectPlan[j].plan;
            break;
          }
        }
        break;
      }
    }
  }
  
}