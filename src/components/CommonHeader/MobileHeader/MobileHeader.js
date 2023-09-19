
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'About', href:'/about', current: false},
    {name: 'Contact Us', href:'/contact-us', current: false},
    {name: 'Our Grocery Store', href:'/grocery-store', current: false},
]

function classNames(...classes){
return classes.filter(Boolean).join(' ')
}

const MobileHeader = () => {
    return (
        <Disclosure as="nav" className="md:hidden">
            {({open})=> (
                <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="z-20 relative inline-flex items-center justify-center p-2 text-gray-700 bg-transparent border-none scale-150  hover:text-gray-700 focus:outline-none md:scale-[1.5]">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6 text-gray-300" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                            <div className="hidden lg:ml-6 lg:block">
                                <div className="flex space-x-4 text-7">
                                    {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:pr-0">
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="mix-blend-normal z-10 absolute bg-[#bf293d] rounded-[0.5rem] mt-[-3.3rem] md:ml-6 lg:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 mt-6">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default MobileHeader