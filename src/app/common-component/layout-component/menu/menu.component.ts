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
    this.router.navigate(['/components']);
  }

  menuList: MenuList[] = [
    { id: 1, label: '📝 Components', url: '/components', active: true },
    { id: 4, label: '📝 Dynamic Form', url: '/form-tab', active: false },
    { id: 2, label: '📄 Add Fruits', url: '/add-fruits', active: false },
    {
      id: 3,
      label: '📄 Multi Level Select',
      url: '/multi-level-dropdown',
      active: false,
    },
  ];

  selectedItem = this.menuList[0];

  onMenuClick(item: MenuList) {
    this.menuList.forEach((menu: MenuList) => (menu.active = false));
    item.active = true;
    this.router.navigate([item.url]);
    if (window.innerWidth <= 768) this.closeMenu.emit();
  }
}
