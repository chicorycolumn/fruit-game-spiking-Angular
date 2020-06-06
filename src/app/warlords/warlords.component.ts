import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warlords',
  templateUrl: './warlords.component.html',
  styleUrls: ['./warlords.component.css'],
})
export class WarlordsComponent implements OnInit {
  kingdoms: string[];
  constructor() {}

  ngOnInit(): void {
    this.kingdoms = ['doric', 'hellenic'];
  }
}
