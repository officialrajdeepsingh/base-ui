import { Toggle } from "@base-ui-components/react/toggle";
import { ToggleGroup } from "@base-ui-components/react/toggle-group";
import { MoonIcon, SunIcon, LaptopIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ToggleTheme() {
  const { setTheme } = useTheme();

  return (
    <ToggleGroup
      onValueChange={(value) => {
        setTheme(value[0]);
      }}
      defaultValue={["system"]}
      className="flex gap-x-2 rounded-full border border-gray-200 py-0.5 px-2"
    >
      <Toggle
        className="flex size-8 items-center hover:text-gray-400 dark:hover:text-gray-700 hover:bg-gray-200 active:bg-gray-200 justify-center rounded-sm text-gray-600"
        aria-label="Align left"
        value="light"
      >
        <SunIcon className="text-black dark:text-white" />
      </Toggle>
      <Toggle
        aria-label="Align center"
        value="dark"
        className="flex size-8 items-center hover:text-gray-400 dark:hover:text-gray-700 hover:bg-gray-200 active:bg-gray-200 justify-center rounded-sm text-gray-600"
      >
        <MoonIcon className="text-black dark:text-white" />
      </Toggle>
      <Toggle
        aria-label="Align right"
        value="system"
        className="flex size-8 items-center justify-center rounded-sm text-gray-600 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200 data-[pressed]:bg-gray-100 data-[pressed]:text-gray-900"
      >
        <LaptopIcon className="text-black dark:text-white" />
      </Toggle>
    </ToggleGroup>
  );
}
