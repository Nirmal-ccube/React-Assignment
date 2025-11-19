//SideMenuItemModel.ts

export class SideMenuItemModel {
  title: string;
  isSelected: boolean;
  isEnabled: boolean;
  isHidden: boolean;
  icon?: string; 

  constructor(
    title: string,
    isSelected = false,
    isEnabled = true,
    isHidden = false,
    icon?: string
  ) {
    this.title = title;
    this.isSelected = isSelected;
    this.isEnabled = isEnabled;
    this.isHidden = isHidden;
    this.icon = icon;
  }
}