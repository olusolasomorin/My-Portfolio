function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t-2 bg-white/5 backdrop-blur-xl border-cyan-400/20">
      <p className="text-base text-gray-300 font-semibold text-center">
        © {currentYear} Olusola Somorin.
      </p>
    </footer>
  );
};

export default Footer;