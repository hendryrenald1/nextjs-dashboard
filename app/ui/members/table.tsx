import Image from 'next/image';
import Link from 'next/link';
import { fetchFilteredMembers } from '@/app/lib/data';
import { MembersTableType } from '@/app/lib/definitions';
import { formatDateToLocal } from '@/app/lib/utils';
import { CheckCircleIcon, XCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import BaptismStatus from './status';

export default async function MembersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const members = await fetchFilteredMembers(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* Mobile view */}
          <div className="md:hidden">
            {members?.map((member) => (
              <div
                key={member.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={member.image_url || '/members/placeholder.png'}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${member.name}'s profile picture`}
                      />
                      <p className="font-medium">{member.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                  <BaptismStatus status={member.is_baptised ? 'baptised' : 'not_baptised'} />
                </div>
                <div className="pt-4">
                  <p className="text-sm"><span className="font-medium">Phone:</span> {member.phone}</p>
                  <p className="text-sm"><span className="font-medium">Branch:</span> {member.branch_name || 'Not assigned'}</p>
                  <p className="text-sm"><span className="font-medium">DOB:</span> {formatDateToLocal(member.date_of_birth)}</p>
                  <p className="text-sm"><span className="font-medium">Address:</span> {member.address_line_1}, {member.city}, {member.country}</p>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Link
                    href={`/dashboard/members/${member.id}/edit`}
                    className="rounded-md border p-2 hover:bg-gray-100"
                  >
                    <PencilIcon className="w-5" />
                  </Link>
                  <button className="rounded-md border p-2 hover:bg-gray-100">
                    <TrashIcon className="w-5 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Member
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contact
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Branch
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  DOB
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {members?.map((member) => (
                <tr
                  key={member.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={member.image_url || '/members/placeholder.png'}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${member.name}'s profile picture`}
                      />
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{member.phone}</p>
                    <p className="text-xs text-gray-500">{member.gender}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {member.branch_name || 'Not assigned'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(member.date_of_birth)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <BaptismStatus status={member.is_baptised ? 'baptised' : 'not_baptised'} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`/dashboard/members/${member.id}/edit`}
                        className="rounded-md border p-2 hover:bg-gray-100"
                      >
                        <PencilIcon className="w-5" />
                      </Link>
                      <button className="rounded-md border p-2 hover:bg-gray-100">
                        <TrashIcon className="w-5 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
