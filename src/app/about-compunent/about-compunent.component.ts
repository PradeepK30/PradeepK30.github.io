import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-about-compunent',
  templateUrl: './about-compunent.component.html',
  styleUrls: ['./about-compunent.component.css']
})
export class AboutCompunentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('lastName'));
  }

}
