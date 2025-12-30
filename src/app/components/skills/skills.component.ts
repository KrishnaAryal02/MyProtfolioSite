import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
 skills: Skill[] = [
    { name: 'Angular', icon: 'assets/icons/Angular_Icon.jpg', level: 70 },
    { name: '.NET', icon: 'assets/icons/C_Sharp_Icon.jpg', level: 80 },
    { name: 'Git', icon: 'assets/icons/Git_Icon.jpg', level: 90 },
    { name: 'Oracle', icon: 'assets/icons/Oracle_Icon.jpg', level: 70 },
  ];
}
