'use client';

import Link from 'next/link';
import { ArrowRight, Film } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() { const [email, setEmail] = useState(''); return <main className="auth-page"><Link href="/" className="brand"><span className="brand-mark"><Film size={17} /></span><span>CreatorFlow</span></Link><section className="auth-card"><p className="eyebrow">Welcome back</p><h1>Pick up your story.</h1><p className="auth-copy">Sign in to continue building something worth watching.</p><form onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}><label>Email address<input autoFocus required className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label><label>Password<input required className="input" type="password" placeholder="Your password" /></label><button className="button primary" type="submit">Continue <ArrowRight size={16} /></button></form><p className="auth-switch">New to CreatorFlow? <Link href="/signup">Create an account</Link></p></section><p className="auth-footer">By continuing, you agree to our Terms and Privacy Policy.</p></main>; }
