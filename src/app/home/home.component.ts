import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Typewriter  from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  name = 'Angular';
  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;
  @ViewChild('tw3') typewriterElement3;

 

  ngOnInit(): void {
  }
  ngAfterViewInit(){
      const target = document.querySelector('.tw')
      const options = {
        loop: true,
        typeColor: 'black'
      }
    

    const writer = new Typewriter(target, options)

    writer
        .strings(
          400,
        "I am a software engineer.",
        "I am a musician.",
        "I play the drums.",
        "I am a coffee lover.",
        "I am a dog lover."
        )
        .start()
  
  }
}
