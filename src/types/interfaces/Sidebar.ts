export interface ISidebarItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface ISidebarSection {
  label: string;
  path: string;
  icon: React.ReactNode;
  items?: ISidebarItem[];
}

export interface ISidebarGroup {
  label?: string;
  sections: ISidebarSection[];
}
