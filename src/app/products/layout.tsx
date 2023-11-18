import { BreadCrumb } from '../components/product/bread-crumb';

export default function Page({ children }: { children: React.ReactNode }) {
  const breadCrumbItems = ['Home', 'Products'];
  return (
    <section className='h-screen '>
      <div className='bg-gray-500 mb-8 p-10'>
        <div>
          <h2 className='text-3xl font-bold text-slate-100'>
            Los mejores productos
          </h2>
        </div>
        <BreadCrumb items={breadCrumbItems} />
      </div>

      {children}
    </section>
  );
}
