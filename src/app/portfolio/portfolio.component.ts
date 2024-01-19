import { Component, OnInit } from '@angular/core';
import { Project } from './project model/project';
import { projects } from './project model/project-full-list';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = projects;
  selectedProject!: Project;
  reversedProjects!: Project[];

  constructor() {}

  ngOnInit(): void {
    this.onSelect(this.projects[this.projects.length - 1]);
    // on init, sort projects by project id, reverse to display data descending by project
    this.reversedProjects = this.projects.sort((a,b) => {
      if (a.projectId > b.projectId) {
        return 1;
      }
      if (a.projectId < b.projectId) {
        return -1;
      }
      return 0;
    }).reverse();
  }

  public onSelect(project: Project) {
    this.selectedProject = project;
  }
}
