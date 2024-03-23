export interface ISidebarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export interface ISidebarSection {
  name: string;
  path: string;
  icon: React.ReactNode;
  items?: ISidebarItem[];
}

export interface ISidebarGroup {
  title?: string;
  sections: ISidebarSection[];
}
