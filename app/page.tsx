import { Accordion } from "@base-ui-components/react/accordion";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="container items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Accordion.Root className="flex w-full max-w-[calc(100vw-8rem)] flex-col justify-center text-gray-900">
        <Accordion.Item className="border-b border-gray-200">
          <Accordion.Header>
            <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-gray-50 py-2 pr-1 pl-3 text-left font-medium hover:bg-gray-100 focus-visible:z-1  focus-visible:outline-2 focus-visible:outline-blue-800">
              What is Base UI?
              <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 dark:text-white transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <div className="p-3">
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="border-b border-gray-200">
          <Accordion.Header>
            <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-gray-50 py-2 pr-1 pl-3 text-left font-medium hover:bg-gray-100 focus-visible:z-1  focus-visible:outline-2 focus-visible:outline-blue-800">
              How do I get started?
              <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 dark:text-white transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <div className="p-3">
              Head to the “Quick start” guide in the docs. If you’ve used
              unstyled libraries before, you’ll feel at home.
            </div>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className="border-b border-gray-200">
          <Accordion.Header>
            <Accordion.Trigger className="group relative flex w-full items-baseline justify-between gap-4 bg-gray-50 py-2 pr-1 pl-3 text-left font-medium hover:bg-gray-100 focus-visible:z-1  focus-visible:outline-2 focus-visible:outline-blue-800">
              Can I use it for my project?
              <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 dark:text-white transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <div className="p-3">
              Of course! Base UI is free and open source.
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
