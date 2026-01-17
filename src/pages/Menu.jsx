
import { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { menuData } from '../lib/menuData'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Menu() {
  let [categories] = useState({
    'Green Lab': menuData.greenLab,
    'Meat Lab': menuData.meatLab,
    'Shakes': menuData.shakes,
  })

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto w-full">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-display font-bold text-rif-charcoal dark:text-rif-offwhite uppercase mb-2">The Lab Menu</h1>
        <p className="text-gray-500 dark:text-gray-400">Select your experiment.</p>
      </div>

      <TabGroup>
        <TabList className="flex space-x-1 rounded-xl bg-gray-200/50 dark:bg-white/5 p-1 max-w-md mx-auto mb-10">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-colors',
                  'ring-white/60 ring-offset-2 ring-offset-rif-blue focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white dark:bg-gray-700 text-rif-charcoal dark:text-white shadow'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-white/[0.12] hover:text-gray-700 dark:hover:text-gray-200'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-2 text-left">
          {Object.entries(categories).map(([key, items], idx) => {
             const isGreen = key === 'Green Lab';
             const isMeat = key === 'Meat Lab';
             const accentColor = isGreen ? 'text-rif-green' : (isMeat ? 'text-rif-rust' : 'text-rif-blue');
             const badgeColor = isGreen ? 'bg-rif-green/10 text-rif-green' : (isMeat ? 'bg-rif-rust/10 text-rif-rust' : 'bg-rif-blue/10 text-rif-blue');

             return (
                <TabPanel
                    key={idx}
                    className="rounded-xl focus:outline-none"
                    >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items.map((item) => (
                        <div key={item.id} className="relative rounded-lg border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-white/5 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className={`text-lg font-bold font-display ${accentColor}`}>
                                    {item.name}
                                </h3>
                                <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 ${badgeColor}`}>
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                                {item.description}
                            </p>
                            <div className="mt-4 pt-4 border-t border-dashed border-gray-200 dark:border-white/10 flex justify-between items-center">
                                <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">Status: Tested</span>
                                <button className="text-sm font-medium text-rif-charcoal dark:text-white underline hover:text-rif-blue dark:hover:text-rif-blue">
                                    Add to Order
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                </TabPanel>
             )
          })}
        </TabPanels>
      </TabGroup>
    </div>
  )
}
