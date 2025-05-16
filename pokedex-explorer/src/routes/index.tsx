import { createFileRoute } from '@tanstack/react-router'
import Gallery from '../components/Gallery'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2 bg-[#e7625f]">
        <Gallery />
    </div>
  )
}