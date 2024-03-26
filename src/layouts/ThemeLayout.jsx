import { Theme, ThemePanel } from '@radix-ui/themes';

export function ThemeLayout({ children }) {
  return (
    <Theme accentColor="brown" panelBackground="solid" radius="none">
    {/* <Theme accentColor="red" panelBackground="solid" radius="none"> */}
      <ThemePanel />
      { children }
    </Theme>
  );
}
