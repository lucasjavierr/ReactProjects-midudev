import './App.css'
import { TwitterFollowCard } from './twiiterFollowcard'

export function App() {

  return(
    <section className='App'>
      <TwitterFollowCard
        isFollowing={false}
        userName='midudev'
      >
         Miguel Ángel Durán {/* <--- es el children */}
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing={false}
        userName='pheralb'
        name='Pablo Hernández'
      />
      <TwitterFollowCard
        isFollowing
        userName='lucasjavier_10'
        name='Lucas Javier'
      />
      <TwitterFollowCard
        isFollowing
        userName='avrilruizdiaz'
        name='Avril Ruiz Díaz'
      />
      <TwitterFollowCard
        isFollowing={false}
        userName='elonmusk'
        name='Elon Musk'
      />
    </section>
  )
}