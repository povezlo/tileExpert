import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInLeft, zoomIn } from 'ng-animate';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.css'],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))])
  ]
})
export class SearchBlockComponent implements OnInit {
  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(['(max-width: 860px)']);
  value = '';
  openedSearch = false;
  myAuthorIsActive: false;
  filterCheckBox = [
    { id: 'checkbox1', checkbox: 'участник', isActive: false, mobile: false },
    { id: 'checkbox2', checkbox: 'в заголовке', isActive: true, mobile: false },
    { id: 'checkbox3', checkbox: 'в контактах', isActive: false, mobile: true },
    { id: 'checkbox4', checkbox: 'строгий поиск', isActive: true, mobile: false }
  ];
  public selected = [
    { value: 'rel', display: 'релевантности', mobile: true },
    { value: 'date', display: 'дате', mobile: false },
    { value: 'title', display: 'названию', mobile: false },
    { value: 'price', display: 'цене', mobile: false }
  ];
  sortfilterCheckBox = [];
  sortSelected = [];
  zoomIn: any;
  fadeInLeft: any;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.isHandset$.subscribe(e => {
      if (!e.matches) {
        this.sortfilterCheckBox = this.filterCheckBox.filter(e => e.mobile === false);
        this.sortSelected = this.selected.filter(e => e.mobile === false);
      } else {
        this.sortfilterCheckBox = this.filterCheckBox;
        this.sortSelected = this.selected;
      }
    });
  }

}
