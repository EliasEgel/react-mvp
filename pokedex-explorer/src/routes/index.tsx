import { createFileRoute } from '@tanstack/react-router'
import PokemonCard from '../components/PokemonCard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <PokemonCard name ="Bulbasaur" />
    </div>
  )
}