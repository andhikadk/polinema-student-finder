import Search from '@/components/Search';

export default async function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-start pt-24 px-8'>
      <h1 className='text-4xl text-white font-bold text-center'>
        Polinema Student Finder
      </h1>
      <h2
        className='
        text-zinc-200 text-md mt-4
      '>
        By{' '}
        <a
          href='https://andhikadk.my.id'
          target='_blank'
          className='font-medium hover:text-green-400'>
          Andhika Dwi Khalisyahputra
        </a>
      </h2>
      <Search apiUrl={process.env.API_URL} />
    </main>
  );
}
