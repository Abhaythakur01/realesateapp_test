import { Download } from 'lucide-react';

export default function StickyBrochureButton() {
  const brochureUrl = '/brochure.pdf'; // Update with your actual PDF URL

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 lg:hidden max-w-full">
      <a
        href={brochureUrl}
        download
        className="flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-amber-600 to-amber-500 text-white py-5 px-2.5 shadow-2xl hover:from-amber-700 hover:to-amber-600 transition-all duration-300 rounded-l-lg group"
        style={{ writingMode: 'vertical-rl' }}
      >
        <Download size={18} className="rotate-180 group-hover:animate-bounce" />
        <span className="text-[10px] font-bold tracking-widest uppercase">
          Brochure
        </span>
      </a>
    </div>
  );
}
