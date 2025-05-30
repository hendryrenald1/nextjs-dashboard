'use client';

import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Branch = {
  id: string;
  name: string;
  location?: string;
};

interface BranchSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBranch: (branch: Branch) => void;
}

export default function BranchSelectModal({
  isOpen,
  onClose,
  onSelectBranch,
}: BranchSelectModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [branches, setBranches] = useState<Branch[]>([]);
  const [filteredBranches, setFilteredBranches] = useState<Branch[]>([]);

  // Mock data - replace with actual API call
  useEffect(() => {
    // This would be replaced with an actual API call
    const mockBranches: Branch[] = [
      { id: '1', name: 'Main Branch', location: 'London, UK' },
      { id: '2', name: 'North Branch', location: 'Manchester, UK' },
      { id: '3', name: 'South Branch', location: 'Brighton, UK' },
      { id: '4', name: 'East Branch', location: 'Norwich, UK' },
      { id: '5', name: 'West Branch', location: 'Bristol, UK' },
    ];
    
    setBranches(mockBranches);
    setFilteredBranches(mockBranches);
  }, []);

  // Filter branches based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredBranches(branches);
    } else {
      const filtered = branches.filter(branch => 
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (branch.location && branch.location.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredBranches(filtered);
    }
  }, [searchQuery, branches]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  Select Branch
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </Dialog.Title>
                
                {/* Search input */}
                <div className="mt-4 mb-4">
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm"
                      placeholder="Search branches..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Branch list */}
                <div className="mt-2 max-h-60 overflow-y-auto">
                  <ul className="divide-y divide-gray-200">
                    {filteredBranches.length > 0 ? (
                      filteredBranches.map((branch) => (
                        <li 
                          key={branch.id} 
                          className="py-3 px-2 flex items-center hover:bg-gray-50 cursor-pointer rounded-md"
                          onClick={() => {
                            onSelectBranch(branch);
                            onClose();
                          }}
                        >
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <span className="text-purple-800 font-medium">
                                {branch.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{branch.name}</div>
                            {branch.location && (
                              <div className="text-sm text-gray-500">{branch.location}</div>
                            )}
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="py-3 px-2 text-center text-gray-500">
                        No branches found matching your search.
                      </li>
                    )}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
