"use client";

import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import { ToggleTheme } from "./toggle-theme";
import { Separator } from "@base-ui-components/react";
import Link from "next/link";

const navLink = [
  {
    key: "#11",
    title: "Home",
    url: "/",
  },
  {
    key: "#12",
    title: "About",
    url: "/about",
  },
  {
    key: "#13",
    title: "Contact",
    url: "/contact",
  },
];

export function Header() {
  return (
    <NavigationMenu.Root className="mx-auto flex flex-row justify-evenly item-center bg-gray-600 dark:bg-black dark:text-white p-4 text-gray-900">
      <Link
        href="/"
        className="flex flex-row justify-center item-center gap-x-2"
      >
        {" "}
        Logo UI
      </Link>
      <NavigationMenu.List
        render={(props) => <ul {...props}> {props.children} </ul>}
        className="flex flex-row justify-center item-center"
      >
        {navLink.map((link) => (
          <NavigationMenu.Item
            render={(props) => <li {...props}>{props.children} </li>}
            key={link.key}
          >
            <Link
              className={
                "mx-2 border-b w-[120px] items-center justify-center hover:text-gray-100 dark:hover:text-gray-500"
              }
              href={link.url}
            >
              {link.title}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      <div className="flex flex-row justify-between items-center gap-x-5">
        <Link
          href={"#"}
          className="text-sm text-gray-900 dark:text-white decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-blue-800"
        >
          Log in
        </Link>
        <Link
          href={"#"}
          className="text-sm text-gray-900 dark:text-white decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-blue-800"
        >
          Sign Up
        </Link>
        <Separator
          orientation="vertical"
          className="w-px bg-gray-300 dark:bg-white"
        />
        <ToggleTheme />
      </div>
    </NavigationMenu.Root>
  );
}

// function NextLink(props: NavigationMenu.Link.Props) {
//   console.log(props, "NavigationMenu.Link.Props :");
//   // if (props.href !== undefined) {
//   return (
//     <NavigationMenu.Link
//       render={() => <NextLink href={props.href} {...props} />}
//     />
//   );
//   // }
// }

// Use the `render` prop to render your framework's Link component for client-side routing.
// e.g. `<NextLink href={props.href} />` instead of `<a />`.
// <a />
// <Link href={props.href} />
