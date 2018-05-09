import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activity-plan',
  templateUrl: './activity-plan.component.html',
  styleUrls: ['./activity-plan.component.css']
})
export class ActivityPlanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tips = [
    "This activity may also be done with videos..",
    "Students may create a poster..",
    "Use this activity as an introduction.."
  ];

  activities = [
    {
      detail: "Students view the image up close to notice details"
    },
    {
      detail: "In partners, groups, or as a whole class..",
      encourage: "Hanging Hashtag think sheet",
      warn: "Pair students as appropriate as they decide",
      success: "Students actively studying"
   },
   {
    detail: "Emphasize.."
    },
    {
      detail: "Students write..",
      success: "Students explaining why they.."
    },
    {
      detail: "Students write..",
      warn: "Encourage the use of.."
    },
    {
      detail: "As students finish, .."
    },
    {
      detail: "When the frame is ...",
      success: "Students noticing similarities.."
    }
  ];
}
