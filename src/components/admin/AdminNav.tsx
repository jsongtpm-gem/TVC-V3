import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import Logo from '../Logo'

export default function AdminNav({ children }: { children: React.ReactNode }) { return <div>{children}</div> }
