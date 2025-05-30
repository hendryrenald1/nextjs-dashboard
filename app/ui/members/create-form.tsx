'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  CalendarIcon, 
  MapPinIcon, 
  BuildingLibraryIcon, 
  GlobeAltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

// Import any actions needed for form submission
// import { createMember } from '@/app/lib/actions';

type Branch = {
  id: string;
  name: string;
  location?: string;
};

export default function Form() {

  return (
    <>
      <form /* action={createMember} */ className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Add New Member</h1>
        
        {/* Personal Information Section */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          
          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Phone
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          
          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="mb-2 block text-sm font-medium">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        
        {/* Address Information Section */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Address Information</h2>
          
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
        
        {/* Church Information Section */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Church Information</h2>
          
          {/* Branch and Join Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="branch" className="mb-2 block text-sm font-medium">
                Branch <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <div className="relative flex-grow">
                    <div className="relative">
                      <select
                        id="branch"
                        name="branch"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue=""
                        required
                        disabled
                      >
                        <option value="" disabled>
                          Select branch
                        </option>
                      </select>
                      <BuildingLibraryIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="joinedOn" className="mb-2 block text-sm font-medium">
                Joined On <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="joinedOn"
                  name="joinedOn"
                  type="date"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          
          {/* Baptised Checkbox */}
          <div className="mb-4">
            <div className="flex items-center">
              <input
                id="baptised"
                name="baptised"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
                // checked={isBaptised}
                // onChange={(e) => setIsBaptised(e.target.checked)}
              />
              <label htmlFor="baptised" className="ml-2 block text-sm font-medium">
                Baptised
              </label>
            </div>
          </div>
        </div>
        
        {/* Physical Form Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Physical Form</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
            <DocumentTextIcon className="h-12 w-12 text-gray-400 mb-2" />
            <div className="text-center">
              <Button 
                type="button"
                className="bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 mb-2"
              >
                Upload Physical Form
              </Button>
              <p className="text-xs text-gray-500">PDF, JPG, or PNG up to 5MB</p>
            </div>
          </div>
        </div>
        
        {/* Form Actions */}
        <div className="flex justify-end gap-4">
          <Link
            href="/dashboard/members"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Save Member</Button>
        </div>
      </form>
    </>
  );
}
