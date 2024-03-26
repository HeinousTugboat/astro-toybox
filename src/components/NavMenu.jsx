import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Link, Heading, Text } from '@radix-ui/themes'

const NavigationMenuDemo = ({ posts }) => {
  const tags = [...new Set(posts.map((post) => post.data.tags).flat())];
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/astro-toybox">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/astro-toybox/about">
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            <NavigationMenu.Link className="NavigationMenuLink" href="/astro-toybox/blog">
              Blog <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              {posts.slice(-3).reverse().map((post) => (
                <ListItem
                  title={post.data.title}
                  href={`/astro-toybox/posts/${post.slug}`}
                  key={post.slug}
                >
                  {post.data.description}
                </ListItem>
              ))}
              <ListItem title="All Posts" href="/astro-toybox/blog"></ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            <NavigationMenu.Link className="NavigationMenuLink" href="/astro-toybox/tags">
              Tags <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              {tags.map((tag) => (
                <ListItem title={tag} href={`/astro-toybox/tags/${tag}`} key={tag} />
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="/astro-toybox/techtonica">
            Techtonica
          </NavigationMenu.Link>
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
        <Text className="ListItemText">{children}</Text>
      </Link>
    </NavigationMenu.Link>
  </li>
);

export default NavigationMenuDemo;
