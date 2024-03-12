import { Component, OnInit } from '@angular/core';
import {  HostBinding } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.isToggled') isToggled = false;

  


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.isToggled = !this.isToggled;
    // Trigger change detection manually
    this.cdr.detectChanges();
  }
}
