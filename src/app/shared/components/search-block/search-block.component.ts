import {Component, OnDestroy, OnInit} from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInLeft, zoomIn } from 'ng-animate';
import {Observable, Subscription} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {FilterCheckBoxList, SelectedList} from '../../../interface';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.css'],
  animations: [
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]),
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft))])
  ]
})
export class SearchBlockComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(['(max-width: 860px)']);
  value = '';
  openedSearch = false;
  myAuthorIsActive: false;
  zoomIn: any;
  fadeInLeft: any;
  sortfilterCheckBox: FilterCheckBoxList[] = [];
  sortSelected: SelectedList[] = [];

  filterCheckBox: FilterCheckBoxList[] = [
    { id: 'checkbox1', checkbox: 'участник', isActive: false, mobile: false },
    { id: 'checkbox2', checkbox: 'в заголовке', isActive: true, mobile: false },
    { id: 'checkbox3', checkbox: 'в контактах', isActive: false, mobile: true },
    { id: 'checkbox4', checkbox: 'строгий поиск', isActive: true, mobile: false }
  ];
  public selected: SelectedList[] = [
    { value: 'rel', display: 'релевантности', mobile: true },
    { value: 'date', display: 'дате', mobile: false },
    { value: 'title', display: 'названию', mobile: false },
    { value: 'price', display: 'цене', mobile: false }
  ];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.subscription = this.isHandset$.subscribe(e => {
      if (!e.matches) {
        this.sortfilterCheckBox = this.filterCheckBox.filter(elem => elem.mobile === false);
        this.sortSelected = this.selected.filter(elem => elem.mobile === false);
      } else {
        this.sortfilterCheckBox = this.filterCheckBox;
        this.sortSelected = this.selected;
      }
    });
  }
ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
}
