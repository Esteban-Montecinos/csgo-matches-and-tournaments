import ListOfNews from './ListOfNews'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-10">
      <div className="z-10 w-full max-w-5xl items-center justify-items-center justify-center font-mono text-sm grid grid-flow-row-dense grid-cols-1 gap-5 place-content-center">
        <ListOfNews/>  
      </div>
    </main>
  )
}
