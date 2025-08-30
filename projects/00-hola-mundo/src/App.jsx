import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'marca',
    name: 'marca',
    isFollowing: false
  },
  {
    userName: 'FabrizioRomano',
    name: 'Fabrizio Romano',
    isFollowing: true
  },
  {
    userName: 'Adrian11Garcia',
    name: 'Garsovia',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}