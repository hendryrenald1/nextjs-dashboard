import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';
import { fetchFilteredBranches } from '@/app/lib/data';

export default async function BranchTable({
  // customers,
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
  // customers: FormattedCustomersTable[];
}) {
  const branches = await fetchFilteredBranches(query);
  return (
   
      <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
             <div className="md:hidden">
                           {branches?.map((branch) => (
                             <div
                               key={branch.id}
                               className="mb-2 w-full rounded-md bg-white p-4"
                             >
                               <div className="flex items-center justify-between border-b pb-4">
                                 <div>
                                   <div className="mb-2 flex items-center">
                                     <div className="flex items-center gap-3">
                                       <Image
                                         src='/branch-image.png'
                                         className="rounded-full"
                                         alt={`${branch.name}'s profile picture`}
                                         width={28}
                                         height={28}
                                       />
                                       <p>{branch.name}</p>
                                     </div>
                                   </div>
                                   <p className="text-sm text-gray-500">
                                     {branch.city}
                                   </p>
                                 </div>
                               </div>
                               <div className="flex w-full items-center justify-between border-b py-5">
                                 <div className="flex w-1/2 flex-col">
                                   <p className="text-xs">Post Code</p>
                                   <p className="font-medium">{branch.post_code}</p>
                                 </div>
                                 <div className="flex w-1/2 flex-col">
                                   <p className="text-xs">Pastor</p>
                                   <p className="font-medium">{branch.pastor_name} - Pastor Name</p>
                                 </div>
                               </div>
                             </div>
                           ))}
                         </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      City
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Post Code
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Pastor
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {branches.map((branch) => (
                    <tr key={branch.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                         <Image
                            src='/branch-image.png'
                            className="rounded-full"
                            alt={`${branch.name}'s profile picture`}
                            width={28}
                            height={28}
                          /> 
                          <p>{branch.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {branch.city}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {branch.post_code}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {branch.pastor_name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
   
  );
}
