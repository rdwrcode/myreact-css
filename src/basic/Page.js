import React from 'react';
import './Page.css';

const Page = () => (
  <div>
    <nav className="page-container">
      <ul className="page-nav">
        <li>Home</li>
        <li>Taco Menu</li>
        <li>Hours</li>
        <li>Directions</li>
        <li>Contact</li>
      </ul>
    </nav>
    <section className="page-section">
      The margin-left style for sections makes sure there is room for the nav. Otherwise the absolute and static elements would overlap
    </section>
    <section className="page-section">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
    </section>
    <div className="page-footer">
      If you use a fixed header or footer, make sure there is room for it! I put a margin-bottom on the body.
    </div>
  </div>
);

export default Page;
