import { Component, OnInit } from '@angular/core';
import { Project } from './project model/project';
import { projects } from './project model/project-full-list';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects = projects;
  selectedProject!: Project;
  reversedProjects!: Project[];



  constructor() { }

  ngOnInit(): void {
    this.onSelect(this.projects[this.projects.length - 1]);
    this.reversedProjects = projects.reverse();
  }


  public onSelect(project: Project){
    this.selectedProject = project;
  }

}
