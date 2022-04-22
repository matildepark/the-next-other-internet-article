import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const qualifier = ['An explication of', 'Tracking the rise of', 'A prehistory of', 'A posthistory of', 'The remaking of', 'Rethinking', 'Challenging preconceptions of', 'Deconstructing'];
  const subqualifier = ['churches', 'states', 'friendships', 'ICOs', 'altcoins', 'chains', 'vibes', 'wallets', 'version control', 'software development', 'brand identity', 'exchanges', 'securities', 'Bitcoin Christianity', 'decentralized finance', 'the webring renaissance', 'permacomputing', 'viral marketing']
  const topic2 = ['Software', 'Systems', 'Lore', 'Mythology', 'Inventories', 'Representation', 'Communities', 'Cosmology', 'Invocations', 'Forks', 'Divination', 'Artworks', 'DAOs', 'Goods', 'Squads', 'Detatchments', 'Collectives', 'Commons', 'Co-operatives', 'Infrastructure', 'Networks', 'Forests', 'Gangs', 'Syndicates', 'Protocols', 'Governance', 'Subcultures', 'Alechemy', 'Premonitions', 'Destiny'];
  const topic1 = ['Hermetic', 'Millennial', 'Arcane', 'Mystic', 'Weird', 'Zoomer', 'Cyber', 'Catholic', 'Experimental', 'Memetic', 'Catastrophic', 'Apocalyptic', 'Public', 'Composable', 'Modular', 'Market', 'Astrological', 'Occult', 'Gen X'];
  const coinFlip = (Math.floor(Math.random() * 2) == 0);
  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  const title = <h1 className="text-3xl text-white">{topic1[getRandom(topic1.length - 1)]} {topic2[getRandom(topic2.length - 1)]}</h1>;

  const subtitle = coinFlip ? <h2 className="text-xl text-white">{qualifier[getRandom(qualifier.length - 1)]} {subqualifier[getRandom(subqualifier.length - 1)]}</h2> : null;

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>The Next Other Internet Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center flex flex-col space-y-4">
      <h2 className="text-xl text-white">The next Other Internet article will be...</h2>
      {title}
      {subtitle}
      </div>
    </div>
  )
}

