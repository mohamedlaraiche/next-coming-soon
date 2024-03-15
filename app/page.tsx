/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import './style.css';
export default function Home() {
  return (
    <main>
      <header>
        <div className='logoHolder'>
          <Image
            src='/moa.png'
            alt='MOA is a short name for Mohamed Laraiche is a brand that create websites'
            width={200}
            height={200}
          />
        </div>
        <div className='contactInfo'>
          <p>hello@mohamedlaraiche.com</p>
        </div>
      </header>
      <section>
        <h1>We are coming soon</h1>
        <p>Stay tuned for an electrifying revelation in the making.</p>
      </section>
      <footer>
        <div className='socialMedia'>
          <a
            href='https://www.facebook.com/mohamedlaraichefreelancer'
            target='_blank'>
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/mohamedlaraichefreelancer'
            target='_blank'>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/company/mohamedlaraichefreelancer'>
            <FaLinkedin />
          </a>
          <a href='https://wa.link/l22uz8' target='_blank'>
            <IoLogoWhatsapp />
          </a>
        </div>
      </footer>
    </main>
  );
}
