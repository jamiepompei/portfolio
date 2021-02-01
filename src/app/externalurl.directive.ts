import { Directive, HostBinding, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';


const browser = typeof window !== 'undefined';

@Directive({
  selector: 'd'
})
export class ExternalurlDirective implements OnInit{
  @Input() href!: string;
  @HostBinding('rel') rel!: string;
  @HostBinding('target') target!: string;

  constructor() { }

ngOnInit(){
  if(this.href !== undefined && this.href.startsWith('http') || this.href !== undefined && this.href.startsWith('project')){
    this.rel = this.rel || 'noopener noreferrer';
    this.target = this.target || '_blank';
  }

  if(browser && this.rel === undefined){
    this.rel = ''; //prevent browser from setting `rel="undefined"`
  }

  if(browser && this.target === undefined){
    this.target = ''; //prevent browser from setting `target="undefined"`
  }
}

}
