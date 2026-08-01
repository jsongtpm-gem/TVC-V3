import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { supabase } from './lib/supabase'

import Nav from './components/Nav'
import Footer from './components/Footer'
import AdminNav from './components/admin/AdminNav'

// Site pages are present in original repo; placeholders remain in this copy.

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true)
  const [authed, setAuthed] = useState(false)
  const location = useLocation()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setAuthed(!!data.session); setChecking(false) })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => { setAuthed(!!session) })
    return () => subscription.unsubscribe()
  }, [])

  if (checking) return <div className="min-h-screen">Loading…</div>
  if (!authed) return <Navigate to="/admin/login" state={{ from: location }} replace />
  return <>{children}</>
}

export default function App() { return <div /> }
