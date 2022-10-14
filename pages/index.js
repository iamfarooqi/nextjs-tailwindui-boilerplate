import Navbar from '../components/navbar/navbar';
import LandingPage from '../components/landingPage/landingPage';

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <main>
        <h1 className='text-3xl underline font-bold flex justify-center'>
          Next.js Project with tailwindUI
        </h1>
      </main>
    </div>
  )
}
