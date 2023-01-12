import { Component, Input, OnInit } from '@angular/core';@Component({
  selector: 'app-user-component',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.scss']
  })
  export class UserComponentComponent implements OnInit{constructor() { }
  @Input()
  users!: any[];
  ngOnInit(): void {
  }
  }