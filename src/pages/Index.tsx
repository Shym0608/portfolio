import { useEffect } from "react";
import Flipbook from "@/components/portfolio/Flipbook";

const Index = () => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const leftArrow = document.querySelector('[aria-label="Previous page"]') as HTMLButtonElement;
      const rightArrow = document.querySelector('[aria-label="Next page"]') as HTMLButtonElement;

      if (e.key === "ArrowLeft" && leftArrow) {
        leftArrow.click();
      } else if (e.key === "ArrowRight" && rightArrow) {
        rightArrow.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.03),transparent_50%)]" />
      </div>

      {/* Flipbook */}
      <Flipbook />
    </main>
  );
};

export default Index;
