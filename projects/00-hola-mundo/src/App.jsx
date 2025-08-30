import './App.css'
import { TwitterFollowCard } from './TwuitterFollowCard'

export function App () {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className='App'>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName={"midudev"} name={"Miguel Ángel Dúran"}/>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName={"pheralb"} name={"Pablo Hernández"}/>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName={"elonmusk"} name={"Elon Musk"}/>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName={"vxnder"} name={"Vanderhart"}/>
    </section>
  )
}