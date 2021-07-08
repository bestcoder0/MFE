import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  tabs = [
    {
      title: 'Education',
      identifier: 'Education',
      link: '/education',
      active: true,
      details: 'education details'
    },
    {
      title: 'Experience',
      identifier: 'Experience',
      link: '/experience',
      active: false,
      details: 'experience details'
    }
  ];

  selectTab = (tab: any) =>{
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }
}
