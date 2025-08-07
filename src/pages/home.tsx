// import Navbar from "@/widgets/navbar/navbar"
import CountdownTimer from '@/shared/components/countdown-timer';
import GeneratedWords from '@/shared/components/generated-words';
import RestartButton from '@/shared/components/restart-button';
import Results from '@/shared/components/results';
import UserTypings from '@/shared/components/user-typings';
import { WordsContainer } from '@/shared/components/words-container';
import useEngine from '@/shared/hooks/useEngine';


function Home() {

  const {state, words, timeLeft, typed} = useEngine()
  return (
    <>
      {/* <Navbar /> */}
      <section className="min-h-screen flex flex-col items-center justify-center place-items-center font-mono tracking-wider px-4 text-muted-foreground">
        <CountdownTimer leftTime={timeLeft} />
        <WordsContainer>
          <GeneratedWords words={words} />
          <UserTypings className='absolute inset-0' userInput={typed } words={words}/>
        </WordsContainer>
        <RestartButton
          classNames='mx-auto mt-10 text-slate-500' 
          onStart={() => null}
        />
        <Results
          className={'mt-10'}
          errors={10}
          accuracyPercentage={100}
          total={200}
        />
      </section>
    </>
  )
}

export default Home