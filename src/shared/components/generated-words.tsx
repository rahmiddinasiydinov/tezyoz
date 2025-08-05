type Props = {
    words: string
}

function GeneratedWords({words}: Props) {
  return (
    <h2 className=''>{words}</h2>
  )
}

export default GeneratedWords