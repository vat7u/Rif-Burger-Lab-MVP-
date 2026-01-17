
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Order', href: '/order' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-rif-offwhite/90 dark:bg-rif-charcoal/90 backdrop-blur-md sticky top-0 z-50 border-b border-rif-charcoal/10 dark:border-white/10 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="font-display font-bold text-xl tracking-tight text-rif-charcoal dark:text-rif-offwhite uppercase">
                Rif Burger <span className="text-rif-blue">Lab</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rif-blue ml-0.5 mb-0.5"></span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-rif-blue text-white'
                        : 'text-rif-charcoal dark:text-rif-offwhite hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pl-4 border-l border-gray-300 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <div className="mr-2">
              <ThemeToggle />
            </div>
            <Menu as="div" className="relative ml-3">
                {({ open }) => (
                  <>
                  <MenuButton className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-rif-charcoal dark:text-rif-offwhite hover:bg-gray-200 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rif-blue focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </MenuButton>
                 <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {navigation.map((item) => (
                        <MenuItem key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 ${
                                active ? 'bg-gray-100 dark:bg-white/5' : ''
                              }`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                  </>
                )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
}
