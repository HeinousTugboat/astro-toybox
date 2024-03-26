import { Theme, ThemePanel } from '@radix-ui/themes';

export function ThemeLayout({ children }) {
  return (
    <Theme accentColor="red" panelBackground="solid" radius="none">
      <ThemePanel />
      { children }
    </Theme>
  );
}
