'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { BuildingOffice2Icon, PhoneIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import PastorSelectModal from './pastor-select-modal';

// Import any actions needed for form submission
// import { createBranch } from '@/app/lib/actions';

type Pastor = {
  id: string;
  name: string;
  role?: string;
  image?: string;
};

export default function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPastor, setSelectedPastor] = useState<Pastor | null>(null);

  const handleSelectPastor = (pastor: Pastor) => {
    setSelectedPastor(pastor);
  };

  return (
    <>
      <form /* action={createBranch} */>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-6">Branch Information</h2>
          
          {/* Branch Name */}
          <div className="mb-4">
            <label htmlFor="branchName" className="mb-2 block text-sm font-medium">
              Branch Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="branchName"
                name="branchName"
                type="text"
                placeholder="Enter branch name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <BuildingOffice2Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contactNumber" className="mb-2 block text-sm font-medium">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                placeholder="Enter contact number"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          {/* Branch Pastor */}
          <div className="mb-6">
            <label htmlFor="pastor" className="mb-2 block text-sm font-medium">
              Branch Pastor
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-grow">
                {selectedPastor ? (
                  <div className="flex items-center p-2 border border-gray-200 rounded-md">
                    {selectedPastor.image ? (
                      <img 
                        src={selectedPastor.image} 
                        alt={selectedPastor.name}
                        className="h-8 w-8 rounded-full mr-2"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32?text=P';
                        }}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                        <span className="text-purple-800 font-medium">
                          {selectedPastor.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-medium">{selectedPastor.name}</div>
                      {selectedPastor.role && (
                        <div className="text-xs text-gray-500">{selectedPastor.role}</div>
                      )}
                    </div>
                    {/* Hidden input to store pastor ID in form submission */}
                    <input 
                      type="hidden" 
                      name="pastorId" 
                      value={selectedPastor.id} 
                    />
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 py-2">
                    No pastor assigned
                  </div>
                )}
              </div>
              <Button 
                type="button"
                className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="hidden sm:block">Select Pastor</span>
              </Button>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-6 mt-8">Address Information</h2>
          
          {/* Address Line 1 */}
          <div className="mb-4">
            <label htmlFor="addressLine1" className="mb-2 block text-sm font-medium">
              Address Line 1 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="addressLine1"
                name="addressLine1"
                type="text"
                placeholder="Enter street address"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          {/* Address Line 2 */}
          <div className="mb-4">
            <label htmlFor="addressLine2" className="mb-2 block text-sm font-medium">
              Address Line 2
            </label>
            <div className="relative">
              <input
                id="addressLine2"
                name="addressLine2"
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          {/* City and County */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-medium">
                City <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter city"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div>
              <label htmlFor="county" className="mb-2 block text-sm font-medium">
                County
              </label>
              <div className="relative">
                <input
                  id="county"
                  name="county"
                  type="text"
                  placeholder="Enter county (optional)"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

          {/* Postal Code and Country */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="postalCode" className="mb-2 block text-sm font-medium">
                Postal Code <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  placeholder="Enter postal code"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div>
              <label htmlFor="country" className="mb-2 block text-sm font-medium">
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="NG">Nigeria</option>
                  <option value="GH">Ghana</option>
                  {/* Add more countries as needed */}
                </select>
                <GlobeAltIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Actions */}
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/branches"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Branch</Button>
        </div>
      </form>

      {/* Pastor Selection Modal */}
      <PastorSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectPastor={handleSelectPastor}
      />
    </>
  );
}
