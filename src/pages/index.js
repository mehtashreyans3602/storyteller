import Storyteller from '@/components/geminiComponent/geminiComponent';
import { Inter, Poppins } from 'next/font/google';

// Define font variables
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-poppins"
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  variable: "--font-inter"
});

export default function Home() {
  return (
    <div className="font-poppins text-secondary">
      <h1 className='text-center text-3xl font-bold'>Storyteller</h1>
      <Storyteller/>
    </div>
  );
}
