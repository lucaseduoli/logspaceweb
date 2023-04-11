import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export default function Dropdown({
  children,
  newTab,
  items,
}: {
  children: string;
  newTab: boolean;
  items: { name: string; href: string; description: string }[];
}) {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-x-1">
        {children}
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
          {items.map((item) => (
            <div
              key={item.name}
              className="relative rounded-lg p-4 hover:bg-gray-50"
            >
              {newTab ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              ) : (
                <a
                  href={item.href}
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              )}

              <p className="mt-1 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
