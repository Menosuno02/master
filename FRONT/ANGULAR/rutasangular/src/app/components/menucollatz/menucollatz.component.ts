import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css'],
})
export class MenuCollatzComponent implements OnInit {
  public random: number[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 8; i++)
      this.random.push(Math.floor(Math.random() * 100) + 1);
  }
}
