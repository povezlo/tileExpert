import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 860px)'])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  menuList: string[] = ['Ссылки', 'Контакты', 'Тэги', 'Просьбы', 'Избранное', 'Посещения'];
  openedSearch = false;
  openedSecondBar = true;
  constructor(private breakpointObserver: BreakpointObserver) { }

  openSearch(): void {
    this.openedSearch = true;
    this.openedSecondBar = false;
  }

  closeBlock(): void {
    this.openedSearch = false;
    this.openedSecondBar = true;
  }
}
