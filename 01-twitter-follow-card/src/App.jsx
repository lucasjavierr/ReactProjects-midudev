import './App.css'
import { TwitterFollowCard } from './twiiterFollowcard'

export function App() {

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: false,
    },
    {
      userName: 'pheralb',
      name: 'Pablo Hernández',
      isFollowing: false,
    },
    {
      userName: 'lucasjavier_10',
      name: 'Lucas Javier',
      isFollowing: true,
    },
    {
      userName: 'avrilruizdiaz',
      name: 'Avril Ruiz Díaz',
      isFollowing: true,
    },
    {
      userName: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: false
    },
    {
      userName: 'Memakker',
      name: 'Memakker',
      isFollowing: false
    }
  ]

  return(
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return(
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              name={name} 
              initialIsFollowing={isFollowing}
            />
          )
        })
      }
    </section>
  )
}