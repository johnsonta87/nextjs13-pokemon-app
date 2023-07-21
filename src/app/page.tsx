"use client"

import { Suspense } from "react"
import { Pokemons } from "./components/Pokemons"
import { Loading } from "./components/Loading"


export default function Main() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Suspense fallback={<Loading />}>
        <Pokemons />
      </Suspense>
    </main>
  )
}
