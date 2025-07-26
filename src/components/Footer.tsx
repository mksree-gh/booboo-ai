import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#86868b] text-sm text-center py-8 px-4">
      <p>
        © 2024 <span className="font-medium text-black">BooBoo AI Toy</span>. All rights reserved.
        <br />
        Made with <span className="text-red-500">❤️</span> for growing minds.
      </p>
    </footer>
  );
};

export default Footer;
