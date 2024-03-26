import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Link, Heading, Text } from '@radix-ui/themes'

const NavigationMenuDemo = ({ tags }) => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/about">
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            <NavigationMenu.Link className="NavigationMenuLink" href="/blog">
              Blog <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            <NavigationMenu.Link className="NavigationMenuLink" href="/tags">
              Tags <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              {tags.map((tag) => (
                <ListItem title={tag} href={`/tags/${tag}`} key={tag} />
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = ({ children, title, ...props }) => (
  <li>
    <NavigationMenu.Link asChild>
      <Link {...props}>
        <Heading>{title}</Heading>
        <Text>{children}</Text>
      </Link>
    </NavigationMenu.Link>
  </li>
);

export default NavigationMenuDemo;
