const Footer = () => {
  return (
    <footer
      className="w-full py-5 flex self-end justify-center items-center
                         bg-pfBlueDark"
    >
      <div className="text-center text-sm text-slate-300 font-light flex flex-col gap-y-1">
        <span>
          Developed by
          <a
            rel="noopener noreferrer"
            href="https://github.com/TingChiehLin/product-feedback-app"
            target="_blank"
            className="cursor-pointer font-bold text-slate-200"
          >
            &nbsp;Ting Chieh Lin
          </a>
        </span>
        <span>© 2024 JayLinXR All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
