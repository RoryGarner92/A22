import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { FrameworkBodyComponent } from '../fw/framework-body/framework-body.component';
import { ContentComponent } from '../fw/content/content.component';
import { TitleBarComponent } from '../fw/title-bar/title-bar.component';
import { TopBarComponent } from '../fw/top-bar/top-bar.component';
import { StatusBarComponent } from '../fw/status-bar/status-bar.component';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from '../fw/menus/popup-menu/popup-menu.component';
import { SignInComponent } from './user/sign-in/sign-in.component'
import { RegisterUserComponent } from './user/register-user/register-user.component'


import { FrameworkConfigService } from '../fw/services/framework-config.service';
import { ScreenService } from '../fw/services/screen.service';
import { MenuService } from '../fw/services/menu.service';

import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
      FrameworkBodyComponent,
      ContentComponent,
      TitleBarComponent,
      TopBarComponent,
      StatusBarComponent,
      ScreenLarge,
      ScreenBelowLarge,
      MenuComponent,
      MenuItemComponent,
      PopupMenuComponent,
      SignInComponent,
      RegisterUserComponent
  ],
  providers:[FrameworkConfigService, 
             ScreenService,
             MenuService],
  exports:[
      FrameworkBodyComponent

  ]
})
export class FwModule { 
}
