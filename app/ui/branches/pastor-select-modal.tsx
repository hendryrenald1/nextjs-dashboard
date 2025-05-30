'use client';

import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

type Pastor = {
  id: string;
  name: string;
  role?: string;
  image?: string;
};

interface PastorSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPastor: (pastor: Pastor) => void;
}

export default function PastorSelectModal({
  isOpen,
  onClose,
  onSelectPastor,
}: PastorSelectModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [pastors, setPastors] = useState<Pastor[]>([]);
  const [filteredPastors, setFilteredPastors] = useState<Pastor[]>([]);

  // Mock data - replace with actual API call
  useEffect(() => {
    // This would be replaced with an actual API call
    const mockPastors: Pastor[] = [
      { id: '1', name: 'John Doe', role: 'Senior Pastor', image: '/members/pastor1.jpg' },
      { id: '2', name: 'Jane Smith', role: 'Associate Pastor', image: '/members/pastor2.jpg' },
      { id: '3', name: 'Michael Johnson', role: 'Youth Pastor', image: '/members/pastor3.jpg' },
      { id: '4', name: 'Sarah Williams', role: 'Worship Pastor', image: '/members/pastor4.jpg' },
      { id: '5', name: 'David Brown', role: 'Children\'s Pastor', image: '/members/pastor5.jpg' },
    ];
    
    setPastors(mockPastors);
    setFilteredPastors(mockPastors);
  }, []);

  // Filter pastors based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPastors(pastors);
    } else {
      const filtered = pastors.filter(pastor => 
        pastor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pastor.role && pastor.role.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredPastors(filtered);
    }
  }, [searchQuery, pastors]);

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
                  Select Pastor
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
                      placeholder="Search pastors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Pastor list */}
                <div className="mt-2 max-h-60 overflow-y-auto">
                  <ul className="divide-y divide-gray-200">
                    {filteredPastors.length > 0 ? (
                      filteredPastors.map((pastor) => (
                        <li 
                          key={pastor.id} 
                          className="py-3 px-2 flex items-center hover:bg-gray-50 cursor-pointer rounded-md"
                          onClick={() => {
                            onSelectPastor(pastor);
                            onClose();
                          }}
                        >
                          <div className="flex-shrink-0 h-10 w-10">
                            {pastor.image ? (
                              <img
                                className="h-10 w-10 rounded-full"
                                src={pastor.image}
                                alt={pastor.name}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=P';
                                }}
                              />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                <span className="text-purple-800 font-medium">
                                  {pastor.name.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{pastor.name}</div>
                            {pastor.role && (
                              <div className="text-sm text-gray-500">{pastor.role}</div>
                            )}
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="py-3 px-2 text-center text-gray-500">
                        No pastors found matching your search.
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
