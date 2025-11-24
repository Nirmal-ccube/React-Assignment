// Carousel.tsx
import { useRef, useState, useEffect } from "react";
import styles from './Carousel.module.css';

const items = [
  { id: 1, color: "bg-red-400", label: "Slide 1" },
  { id: 2, color: "bg-blue-400", label: "Slide 2" },
  { id: 3, color: "bg-green-400", label: "Slide 3" },
];

export default function Carousel() {
    const [active, setActive] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [paused, setPaused] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const goTo = (idx: number) => {
        setActive(idx);
        if (ref.current) {
        ref.current.scrollTo({
            left: ref.current.clientWidth * idx,
            behavior: "smooth",
        });
        }
    };

    // Auto scroll every 3s, only when not paused
    useEffect(() => {
        if (paused) return;

        const id = setInterval(() => {
            setActive(prev => {
                const next = (prev + 1) % items.length;
                if (ref.current) {
                    ref.current.scrollTo({
                        left: ref.current.clientWidth * next,
                        behavior: "smooth",
                    });
                }
                return next;
            });
        }, 3000);
        return () => clearInterval(id);
    }, [paused]);

    const handleSlideClick = (idx: number) => {
        goTo(idx);
        setPaused(true);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPaused(false); // resume autoplay
    };

  const scrollBy = (dir: "next" | "prev") => {
    const el = ref.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({
      left: dir === "next" ? width : -width,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div
        ref={ref}
        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
      >
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSlideClick(idx)}
            className={`w-full h-40 flex items-center justify-center text-2xl text-white ${item.color} snap-center shrink-0`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              active === idx ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>

      {/* Very simple modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="mb-4">Details for {items[active].label}</p>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
