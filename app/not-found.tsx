import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative w-screen h-screen overflow-hidden text-white">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 20)"
        gradientBackgroundEnd="rgb(5, 5, 30)"
        firstColor="0, 100, 200"
        secondColor="140, 50, 180"
        thirdColor="0, 200, 255"
        fourthColor="80, 0, 100"
        fifthColor="0, 50, 100"
        pointerColor="255, 255, 255"
        blendingValue="hard-light"
      />

      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div
          className="max-w-lg w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl 
                     p-8 text-center space-y-6 transition-all duration-300 hover:shadow-2xl"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            404 – Page Not Found
          </h1>
          <p className="text-lg text-white/70">
            Oops! The page you are looking for doesn’t exist or has been moved.
          </p>
          <div className="flex justify-center">
            <Button href="/" label="🏠 Go Home" />
          </div>
        </div>
      </div>
    </div>
  );
}
