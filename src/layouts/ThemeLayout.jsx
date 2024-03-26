import { Theme } from '@radix-ui/themes';

export function ThemeLayout({ children }) {
  return (
    <Theme accentColor="red" panelBackground="solid" radius="none">
      {/* <ThemePanel /> */}
      <div>{ children }</div>
    </Theme>
  );
}
