import { Component, OnInit } from '@angular/core';

import { BiographyService } from '../biography.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [BiographyService]
})
export class WorkComponent implements OnInit {

  public dots: Array<Object>;
  public headline: String = "Life Events";
  public subhead: String = "Click a dot!";
  public body: String = "Get a look at Connor\'s education and professional highlights by clicking around this timeline."

  constructor(private biographyService: BiographyService) {
    this.dots = this.biographyService.getBiography();
  }

  updateHead(event: any) {
      var selectedIndex = Number(event.target.getAttribute("data-index"));
      this.headline = this.dots[selectedIndex]["year"];
      this.subhead = this.dots[selectedIndex]["event"];
      this.body = this.dots[selectedIndex]["info"];
  }

  ngOnInit() {

  }

}
