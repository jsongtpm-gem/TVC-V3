import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

interface Props { height?: number; variant?: 'dark' | 'light' }

export default function Logo({ height = 40, variant = 'dark' }: Props) { return <span>Logo</span> }
