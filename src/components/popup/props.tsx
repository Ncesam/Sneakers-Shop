import { iconMap } from '@assets/iconMap';
import { Dispatch, SetStateAction } from 'react';

export interface PopupProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  onConfirm?: () => void;
  title?: string;
  description?: string;
  isInteractive?: boolean;
  iconName?: keyof typeof iconMap;
  children: React.ReactNode;
}
