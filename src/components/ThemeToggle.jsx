import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming this utility exists for class concatenation

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // Jika tidak ada tema yang tersimpan, atau tema yang tersimpan adalah 'dark',
    // maka atur mode gelap sebagai default.
    if (storedTheme === "dark" || !storedTheme) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Pastikan 'dark' tersimpan di localStorage
    } else {
      // Jika tema yang tersimpan adalah 'light', tetap di mode terang
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark"); // Pastikan kelas 'dark' dihapus jika ada
      localStorage.setItem("theme", "light"); // Pastikan 'light' tersimpan di localStorage
    }
  }, []); // [] memastikan efek ini hanya berjalan sekali saat komponen mount

  // Fungsi untuk mengubah tema antara terang dan gelap
  const toggleTheme = () => {
    if (isDarkMode) {
      // Jika saat ini gelap, ubah ke terang
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Jika saat ini terang, ubah ke gelap
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        // Menghapus kelas "invisible" agar tombol terlihat
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden",
        // Menambahkan warna latar belakang yang sesuai dengan tema
        isDarkMode ? "bg-gray-800 text-yellow-300" : "bg-white text-blue-900",
        "shadow-lg" // Menambahkan sedikit bayangan agar lebih terlihat
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6" /> // Ikon matahari untuk mode gelap
      ) : (
        <Moon className="h-6 w-6" /> // Ikon bulan untuk mode terang
      )}
    </button>
  );
};
