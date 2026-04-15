export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f5f8] py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 border-t border-slate-100 px-8 pt-12 md:grid-cols-3">
        <div>
          <div className="text-2xl font-bold text-[#0058ba]">EcoleUP</div>
          <p className="mt-3 text-sm text-slate-500">© 2024 EcoleUP. The Dynamic Curator of Academic Excellence.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-slate-500">
          <div className="space-y-2">
            <p className="font-bold text-slate-700">Company</p>
            <a href="#">Privacy Policy</a><br />
            <a href="#">Terms of Service</a>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-slate-700">Resources</p>
            <a href="#">Faculty Portal</a><br />
            <a href="#">Support</a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold text-slate-700">Stay Connected</p>
          <p className="text-xs italic text-slate-600">
            "The future of education is not a destination, but a journey we curate together."
          </p>
        </div>
      </div>
    </footer>
  );
}