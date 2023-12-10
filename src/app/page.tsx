import Head from 'next/head'
import Link from 'next/link'

import Styles from './page.module.css'

import Colors from '../../data/colors.json'

export default function Home() {
  return (
    <div className={Styles.mainDiv}>
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays pretty colors to learn Next!" />
      </Head>
      <ol>
        {Colors.map(color => (
          <Link key={color.index} href={`/${color.name}`}>
            <li> <h2>{color.name}</h2> </li>
          </Link>
        ))}
      </ol>  
    </div>
  )
}
