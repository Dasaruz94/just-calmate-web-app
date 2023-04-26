import Head from 'next/head'
import Image from 'next/image'
import StartedTasks from '../components/home/StartedTasks'


export default function Home() {
  return (
    <>
     <Head>
        <meta charSet="utf-8" />
        <title>Calma-todo's</title>
        <meta
          name="description"
          content="Administrador de tareas enfocado en calmar la ansiedad por sobre carga"
        />
        <link rel="icon" href="/favicon.ico" />
         
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>

    <StartedTasks />
    </>
  )
}
