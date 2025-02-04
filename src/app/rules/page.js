import Navbar from '@/components/NavBar'
import RegistrationForm from '@/components/RegistrationForm'
import RulesSection from '@/components/RulesSection'

export default function Register() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-48 pb-12">
        <RulesSection />
      </main>
    </div>
  )
}