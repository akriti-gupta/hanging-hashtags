import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'support-levels',
  templateUrl: './support-levels.component.html',
  styleUrls: ['./support-levels.component.css']
})
export class SupportLevelsComponent implements OnInit{ 

  constructor(private modalService : NgbModal) { }

  showFilter = false;
  grades = [
            {grade: 2, value: false},
            {grade: 3, value: false},
            {grade: 4, value: false},
            {grade: 5, value: false}
          ];

  gender = {"male": false, "female": false};

  filterVals = [
    {id: 1, name: "By Grade"},
    {id: 1, name: "By Age"},
    {id: 1, name: "By Gender"}
  ];

  categories = [
    {
      "id" : 1,
      "level" : "High Support",
      "speaks" : "1 & 2",
      "action" : 
      [
        "Provide students with samll word blanks and visuals.",
        "Encourage partnership and chatter."
      ],

    },

    { "id" : 2,
      "level" : "Moderate Support",
      "speaks" : "3 & 4",
      "action" : 
      [
        "Encourage chatter and collaboration during the creation of the hashtags."
      ]
    },

    { "id" : 3,
      "level" : "Low Support",
      "speaks" : "5 & 6",
      "action" : 
      [
        "No additional supports needed."
      ]
    }
  ];

  students =[
    {
      name: "Marie",
      age: 10,
      gender: "Female",
      grade: 5,
      level: 1,
    },
    {
      name: "Leslie",
      age: 11,
      gender: "Female",
      grade: 4,
      level: 1,
    },
    {
      name: "Tom",
      age: 10,
      gender: "Male",
      grade: 5,
      level: 1,
    },
    {
      name: "Roger",
      age: 11,
      gender: "Male",
      grade: 5,
      level: 1,
    },{
      name: "Chelsea",
      age: 11,
      gender: "Female",
      grade: 4,
      level: 1,
    },

    {
      name: "Stephanie",
      age: 8,
      gender: "Female",
      grade: 3,
      level: 2,
    },
    {
      name: "Charles",
      age: 11,
      gender: "Male",
      grade: 2,
      level: 2,
    },
    {
      name: "Bret",
      age: 12,
      gender: "Male",
      grade: 3,
      level: 2,
    },
    {
      name: "Lisa",
      age: 11,
      gender: "Female",
      grade: 3,
      level: 3,
    },{
      name: "Neal",
      age: 12,
      gender: "Male",
      grade: 2,
      level: 3,
    }
  ];

  ngOnInit(){
    // Filter students by support level and set each them to relevant support category
    this.filterBySupport(this.students);
  }

  studentResult = this.students;

  // getStudents(){
  //   this.students.map(student => {
  //     var grade = student["grade"];
  //     console.log(grade);
  //   });
  // }

  applyFilter(){
    this.showFilter = false;
    var selectedGrades = [];
    var selectedGender = [];
    
    // Find selected filters
    this.grades.map(g => g.value == true ? selectedGrades.push(g.grade): 1);

    if(this.gender.male)
      selectedGender.push("Male");
    if(this.gender.female)
      selectedGender.push("Female");

    var filterArr = [];
    if(selectedGrades.length > 0){
      filterArr.push({"type": "grade", "value":selectedGrades});
    }
    if(selectedGender.length > 0){
      filterArr.push({"type": "gender", "value":selectedGender});
    }
    // If no filters are selected, show the entire list.
    if(filterArr.length == 0)
    {
      this.filterBySupport(this.students);
    }
    else if(filterArr.length > 0){
      var filteredStudents = [];

      for( var i = 0 ; i< filterArr.length ;i++){
        // For each filter selected, filter the students 
        filteredStudents = this.filterResults(filteredStudents,filterArr[i]);
      }
      // Group filtered students by support category 
      this.filterBySupport(filteredStudents);
    }
  }

  filterResults(filteredStudents, filter){
    var studentList;
    if(filteredStudents.length > 0 ){
      // Students have already been filtered on some other criteria. Filter the new list
      studentList = filteredStudents;
    }
    else{
      studentList = this.students;
    }
    var filteredArr = [];
    studentList.map(s=>{
      //Get array containing selected values for a filter type
      var filterValues = filter.value;
      
      if(filterValues.indexOf(s[filter.type]) > -1 ){
        filteredArr.push(s);
        }
    });
    return filteredArr;

  }
  filterBySupport(studentArr){

    let highSupport = [];
    let mediumSupport =  [];
    let lowSupport =  [];

    studentArr.map(student => {
      var level = student["level"];
      if(level == 1)
        highSupport.push(student); 
      else if(level == 2)
        mediumSupport.push(student);
      else if(level == 3)
        lowSupport.push(student);
    });
    this.categories[0]["students"] = highSupport;
    this.categories[1]["students"] = mediumSupport;
    this.categories[2]["students"] = lowSupport;

  }
  open(studentModal, students) {
    this.studentResult = students;
    this.modalService.open(studentModal);
  }
}
