import { Component, OnInit } from '@angular/core';
import { Project } from './project model/project';
import { projects } from './project model/project-full-list';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  //projects are stored sequentially by id
  projects = projects;
  selectedProject!: Project;
  reversedProjects!: Project[];

  constructor() {}

  ngOnInit(): void {
    //set the selected project to be the latest project
    this.onSelect(this.projects[this.projects.length - 1]);
    //sets the order of projects in projects list
    this.reversedProjects = this.setReversedProjects();
  }

  public onSelect(project: Project) {
    this.selectedProject = project;
  }

  //makes a copy of projects array
  //sort projects by project id, 
  //reverse to display data descending by project id
  setReversedProjects() {
    const projectsCopy = [...projects];
    return projectsCopy.sort((a,b) => {
      if (a.projectId > b.projectId) {
        return 1;
      }
      if (a.projectId < b.projectId) {
        return -1;
      }
      return 0;
    }).reverse();
  }
}
