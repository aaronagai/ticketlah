import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-malaysia-red text-white font-bold text-xs">
                TL
              </div>
              <span className="font-bold text-lg">TicketLah</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Malaysia&apos;s event platform for the community. From KL startup nights to
              Penang food fests — jom discover lah!
            </p>
            <div className="mt-4 flex gap-1 h-1.5 w-24 rounded-full overflow-hidden">
              <span className="flex-1 bg-malaysia-red" />
              <span className="flex-1 bg-white border border-border" />
              <span className="flex-1 bg-malaysia-blue" />
              <span className="flex-1 bg-white border border-border" />
              <span className="flex-1 bg-malaysia-yellow" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li><Link href="/#events" className="hover:text-malaysia-red transition-colors">Browse Events</Link></li>
              <li><Link href="/create" className="hover:text-malaysia-red transition-colors">Create Event</Link></li>
              <li><span className="opacity-60">Pricing</span></li>
              <li><span className="opacity-60">For Organisers</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Cities</h4>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>Kuala Lumpur</li>
              <li>Penang</li>
              <li>Johor Bahru</li>
              <li>Ipoh &amp; KK</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Payment</h4>
            <p className="text-sm text-muted leading-relaxed">
              FPX, Touch &apos;n Go eWallet, GrabPay, and credit card accepted. All prices in RM (Ringgit Malaysia).
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted">
          <p>© 2026 TicketLah. Made with ❤️ in Malaysia.</p>
          <p>Semua acara. Satu platform. Confirm slot lah!</p>
        </div>
      </div>
    </footer>
  );
}
