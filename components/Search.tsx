'use client';
import * as React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { IoCopy } from 'react-icons/io5';
import Loading from '@/app/loading';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ apiUrl }: { apiUrl: string | undefined }) => {
  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${apiUrl}?q=${search}`);
        setIsLoading(false);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (search && search.length > 4) {
      getData();
    } else {
      setData([]);
    }
  }, [search, apiUrl]);

  const handleCopyClick = (item: string) => {
    // for mobile devices
    const el = document.createElement('textarea');
    el.value = item;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // for desktop
    if (navigator.clipboard) {
      navigator.clipboard.writeText(item);
    }
    toast.success('Berhasil disalin');
  };

  return (
    <>
      <ToastContainer
        position='top-center'
        closeButton={false}
        autoClose={2000}
        limit={3}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme='light'
      />
      <div className='flex items-center justify-center w-full md:w-[32rem] mt-8'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full px-4 py-2 text-zinc-100 bg-zinc-700 border border-zinc-700 rounded-sm focus:outline-none focus:border-zinc-500'
          placeholder='Search by [Name or NIM] min 5 characters'
        />
      </div>
      {data.length === 0 && isLoading && <Loading />}
      {data.length === 0 && search.length > 4 && isLoading === false && (
        <p className='text-white mt-8'>Data tidak ditemukan</p>
      )}
      {data.slice(0, 5).map((item: any) => {
        return (
          <div
            key={item.id}
            className='flex flex-row items-center justify-between w-full md:w-[32rem] mt-8 p-4 border-b'>
            <p className='text-white'>{item.text}</p>
            <IoCopy
              fontSize={16}
              className='text-white cursor-pointer hover:text-zinc-300'
              onClick={() => handleCopyClick(item.text)}
            />
          </div>
        );
      })}
    </>
  );
};

export default Search;
