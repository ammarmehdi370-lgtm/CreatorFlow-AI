'use client';

import Link from 'next/link';
import { ArrowRight, Film } from 'lucide-react';
import { useState } from 'react';

export default function SignupPage() { const [name, setName] = useState(''); return <main className="auth-page"><Link href="/" className="brand"><span className="brand-mark"><Film size={17} /></span><span>CreatorFlow</span></Link><section className="auth-card"><p className="eyebrow">Start creating</p><h1>Your next video starts here.</h1><p className="auth-copy">A focused studio for turning rough ideas into ready-to-publish videos.</p><form onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}><label>Your name<input autoFocus required className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Morgan" /></label><label>Email address<input required className="input" type="email" placeholder="you@example.com" /></label><label>Create a password<input required className="input" type="password" placeholder="At least 8 characters" /></label><button className="button primary" type="submit">Create workspace <ArrowRight size={16} /></button></form><p className="auth-switch">Already have an account? <Link href="/login">Sign in</Link></p></section><p className="auth-footer">No credit card required to start.</p></main>; }
