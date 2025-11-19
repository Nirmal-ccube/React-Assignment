//SideMenuHelper.ts

import { SideMenuItemModel } from "./models/SideMenuItemModel";

import homeIcon from '../assets/home-icon.svg';
import usersIcon from '../assets/users-icon.svg';
import billingIcon from '../assets/billing-icon.svg';

export class SideMenuHelper {
    static getMenuItems(): SideMenuItemModel[] {
    return [
      new SideMenuItemModel("Dashboard", false, true, false, homeIcon),
      new SideMenuItemModel("Users", false, true, false, usersIcon),
      new SideMenuItemModel("Billing", false, true, false, billingIcon),
    ];
  }
}