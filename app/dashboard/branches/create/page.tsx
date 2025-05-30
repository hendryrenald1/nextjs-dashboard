import Form from '@/app/ui/branches/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchPastors } from '@/app/lib/data';
 
export default async function Page() {
//   const pastors = await fetchPastors();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Branches', href: '/dashboard/branches' },
          {
            label: 'Create Branch',
            href: '/dashboard/branches/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}