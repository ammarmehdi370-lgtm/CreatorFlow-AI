'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Film, FolderOpen, LayoutDashboard, Library, Settings, Sparkles, UserRound, CreditCard } from 'lucide-react';
import type { ReactNode } from 'react';

const primary = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/assets', label: 'Media library', icon: Library },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="app-frame">
      <aside className="sidebar">
        <Link href="/" className="brand"><span className="brand-mark"><Film size={17} /></span><span>CreatorFlow</span></Link>
        <div className="workspace-switcher"><span className="avatar">C</span><span><strong>Creator workspace</strong><small>Starter plan</small></span><span className="status-dot" /></div>
        <nav aria-label="Primary navigation" className="nav-list">
          <p className="nav-label">Workspace</p>
          {primary.map(({ href, label, icon: Icon }) => <Link key={href} href={href} className={pathname.startsWith(href) ? 'nav-link active' : 'nav-link'}><Icon size={17} />{label}</Link>)}
          <p className="nav-label">Account</p>
          <Link href="/usage" className={pathname.startsWith('/usage') ? 'nav-link active' : 'nav-link'}><CreditCard size={17} />Usage & billing</Link>
          <Link href="/settings" className="nav-link"><UserRound size={17} />Profile settings</Link>
        </nav>
        <div className="sidebar-bottom"><div className="credit-meter"><div><span>Monthly credits</span><strong>840 / 1,000</strong></div><div className="meter"><span style={{ width: '84%' }} /></div><small>Resets in 12 days</small></div><div className="user-row"><span className="avatar warm">A</span><span><strong>Alex Morgan</strong><small>alex@creator.co</small></span><Bell size={16} /></div></div>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return <header className="page-header"><div><p className="eyebrow">{eyebrow ?? 'CreatorFlow AI'}</p><h1>{title}</h1>{description && <p className="page-description">{description}</p>}</div>{action && <div className="header-actions">{action}</div>}</header>;
}

export function Button({ children, variant = 'primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'danger' }) {
  return <button className={`button ${variant}`} {...props}>{children}</button>;
}
