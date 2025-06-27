import Link from "next/link";

const navLink = [
  {
    key: "#12",
    title: "Pricing",
    href: "#",
  },
  {
    key: "#13",
    title: "Blog",
    href: "#",
  },
  {
    key: "#14",
    title: "Support",
    href: "#",
  },
];

export function Footer() {
  return (
    <div className="mx-auto bg-gray-600 dark:bg-black dark:text-white">
      <div className="container p-4 w-full mx-auto flex flex-row items-center justify-center gap-4 text-nowrap">
        {navLink.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="text-sm text-gray-900 dark:text-white decoration-gray-400 decoration-1 underline-offset-2 outline-none hover:underline focus-visible:rounded-sm focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-blue-800"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
