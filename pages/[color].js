import Colors from '../data/colors.json'

import Styles from '../src/app/page.module.css'

export async function getStaticPaths() {
    // loop through the colors array
  const paths = Colors.map(color => ({
    // return an object with params.color set to the color's name
    params: { color: color.name }
  }))

  // Paths will look like this:
  // [
  //   { params: { color: 'Marsala' } },
  //   { params: { color: 'Illuminating'} }
  //   ...
  // ]

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // find the info for just one color
    const color = Colors.find(color => color.name === params.color)
    // return it in the necessary format.
    return { props: { color } }
  }

export default function Color({ color }) {
    return <div className={Styles.color_page} style={{ backgroundColor: color.hex }}>
        <h1 className={Styles.header_1}>{color.name}</h1>
    </div>
}