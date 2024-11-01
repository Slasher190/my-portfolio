import Image_404 from "../public/404_Cute.png"; // Ensure this image is in your public directory
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <img
        src={Image_404.src}
        alt="404 Not Found"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 text-center bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h2>
        <p className="text-gray-600 mb-6 text-lg">{`We can't find the page you're looking for.`}</p>
        <Link href="/" legacyBehavior>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
