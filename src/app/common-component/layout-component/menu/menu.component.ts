import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuList } from '../../../model/menu-list';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() closeMenu = new EventEmitter<void>();

  constructor(private router: Router) {
    this.router.navigate(['/form-tab']);
  }

  menuList: MenuList[] = [
    { id: 1, label: '📝 Dynamic Form', url: '/form-tab', active: true },
    { id: 2, label: '📄 Another Component', url: '/another-component', active: false }
  ];

  selectedItem = this.menuList[0];

  onMenuClick(item: MenuList) {
    this.menuList.forEach((menu: MenuList) => (menu.active = false));
    item.active = true;
    this.router.navigate([item.url]);
    if (window.innerWidth <= 768) this.closeMenu.emit();
  }
}
