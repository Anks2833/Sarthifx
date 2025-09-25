import { useState, useRef, useCallback } from "react";
import type { DropdownType } from "../types/navTypes";

export const useNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] =
    useState<DropdownType>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback((dropdown: DropdownType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMobileDropdown(null);
  }, []);

  const toggleMobileDropdown = useCallback((dropdown: DropdownType) => {
    setActiveMobileDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  return {
    activeDropdown,
    isMobileMenuOpen,
    activeMobileDropdown,
    handleMouseEnter,
    handleMouseLeave,
    toggleMobileMenu,
    toggleMobileDropdown,
  };
};
