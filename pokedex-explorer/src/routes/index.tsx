import { createFileRoute } from '@tanstack/react-router'
import Gallery from '../components/Gallery'
import SearchForm from '../components/SearchForm'
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="p-2 bg-[#f1d5ce]">
        <SearchForm />
        <Gallery />
    </div>
  )
}