import Form from '@/app/ui/members/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchPastors } from '@/app/lib/data';
 
export default async function Page() {
//   const pastors = await fetchPastors();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Members', href: '/dashboard/members' },
          {
            label: 'Create Member',
            href: '/dashboard/members/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}