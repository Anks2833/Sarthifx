export type DropdownType =
  | "trading"
  | "platforms"
  | "learning"
  | "about"
  | "language"
  | null;

export interface NavItemProps {
  label: string;
  type: DropdownType;
  isActive: boolean;
  onMouseEnter: (type: DropdownType) => void;
}

export interface DropdownMenuProps {
  isActive: boolean;
  onMouseEnter: (type: DropdownType) => void;
  onMouseLeave: () => void;
  type: DropdownType;
}

export interface MenuSection {
  title: string;
  items: Array<{
    label: string;
    link: string;
    isExternal?: boolean;
  }>;
}

export interface MenuData {
  [key: string]: {
    sections: MenuSection[];
    promo?: {
      title: string;
      description: string;
      link: string;
    };
  };
}
