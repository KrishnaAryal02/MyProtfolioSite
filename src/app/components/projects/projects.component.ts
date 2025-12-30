import { Component } from '@angular/core';
import { Project } from 'src/app/models/project/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Library Management System',
      description: 'A complete digital solution for tracking all library operations including book inventory management (add/edit/delete), order processing, and circulation tracking (issue/return). The system maintains real-time records of book status and patron transactions with an intuitive admin interface.',
      image: 'assets/images/Library_Project.png',
      technologies: ['Angular', '.NET', 'SQL Server'],
    },
    {
      title: 'Online Job Portal',
      description: ' comprehensive recruitment platform connecting job seekers with employers. The system features job postings, applicant tracking, resume management, and advanced search capabilities for both candidates and recruiters.',
      image: 'assets/images/OJP_Project.png',
      technologies: ['Angular', '.NET', 'ORACLE'],
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive solution for tracking all inventory operations including item records management (add/view/edit/delete), purchase returns, sales returns, and real-time stock monitoring. The system provides complete visibility into inventory movements and maintains accurate stock records.',
      image: 'assets/images/Inventory_Project.png',
      technologies: ['HTML', 'CSS', 'PHP'],
    }
  ];
}
