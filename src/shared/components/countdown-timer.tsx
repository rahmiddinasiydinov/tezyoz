type Props = {
    leftTime: number
}

function CountdownTimer({leftTime}: Props) {
  return (
    <h2 className='text-primary font-medium self-start'>Time: {leftTime}</h2>
  )
}

export default CountdownTimer