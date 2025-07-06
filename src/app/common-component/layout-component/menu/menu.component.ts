import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface MenuItem {
  id: number;
  label: string;
  url: string;
  active: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() closeMenu = new EventEmitter<void>();

  constructor(private router: Router) {
      this.router.navigate(['/form-tab']);      
  }

  menuList:MenuItem[]=[
    {id:1,label:'📝 Dynamic Form',url:'/form-tab',active:true}
    ,{id:2,label:'📄 Another Component',url:'/another-component',active:false}
  ]

  selectedItem = this.menuList[0];

  onMenuClick(item:MenuItem){
  this.menuList.forEach((menu:MenuItem) => menu.active = false);  
  item.active = true;                                  
  this.router.navigate([item.url]);  
  if(window.innerWidth<=768) this.closeMenu.emit();
  }
}
