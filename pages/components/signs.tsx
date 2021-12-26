import Link from 'next/link';
import Image from 'next/image';


export const signs = (props: {day: string}) => {
  return (
    <div className='container'>
      <ul className='cards-container'>
        <li className='card'>
          <Image src='/Capricorn.png' width={150} height={150} alt='capricorn'/>
          <h4>Dec 22 - Jan 19</h4>
          <Link href={`/capricorn&${props.day}`} key={Math.random().toString()}><a>Capricorn</a></Link>
        </li>
        <li className='card'>
          <Image src='/Aquarius.png' width={150} height={150} alt='aquarius'/>
          <h4>Jan 20 - Feb 18</h4>
          <Link href={`/aquarius&${props.day}`} key={Math.random().toString()}><a>Aquarius</a></Link>
        </li>
        <li className='card'>
          <Image src='/Pisces.png' width={150} height={150} alt='pisces'/>
          <h4>Feb 19 - Mar 20</h4>
          <Link href={`/pisces&${props.day}`} key={Math.random().toString()}><a>Pisces</a></Link>
        </li>
        <li className='card'>
          <Image src='/Aries.png' width={150} height={150} alt='aries'/>
          <h4>Mar 21 - Apr 20</h4>
          <Link href={`/aries&${props.day}`} key={Math.random().toString()}><a>Aries</a></Link>
        </li>
        <li className='card'>
          <Image src='/Taurus.png' width={150} height={150} alt='taurus'/>
          <h4>Apr 21 - May 20</h4>
          <Link href={`/taurus&${props.day}`} key={Math.random().toString()}><a>Taurus</a></Link>
        </li>
        <li className='card'>
          <Image src='/Gemini.png' width={150} height={150} alt='gemini'/>
          <h4>May 21 - Jun 21</h4>
          <Link href={`/gemini&${props.day}`} key={Math.random().toString()}><a>Gemini</a></Link>
        </li>
        <li className='card'>
          <Image src='/Cancer.png' width={150} height={150} alt='cancer'/>
          <h4>Jun 22 - Jul 22</h4>
          <Link href={`/cancer&${props.day}`} key={Math.random().toString()}><a>Cancer</a></Link>
        </li>
        <li className='card'>
          <Image src='/Leo.png' width={150} height={150} alt='leo'/>
          <h4>Jul 23 - Aug 22</h4>
          <Link href={`/leo&${props.day}`} key={Math.random().toString()}><a>Leo</a></Link>
        </li>
        <li className='card'>
          <Image src='/Virgo.png' width={150} height={150} alt='virgo'/>
          <h4>Aug 23 - Sep 22</h4>
          <Link href={`/virgo&${props.day}`} key={Math.random().toString()}><a>Virgo</a></Link>
        </li>
        <li className='card'>
          <Image src='/Libra.png' width={150} height={150} alt='libra'/>
          <h4>Sep 23 - Oct 22</h4>
          <Link href={`/libra&${props.day}`} key={Math.random().toString()}><a>Libra</a></Link>
        </li>
        <li className='card'>
          <Image src='/Scorpio.png' width={150} height={150} alt='scorpio'/>
          <h4>Oct 23 - Nov 22</h4>
          <Link href={`/scorpio&${props.day}`} key={Math.random().toString()}><a>Scorpio</a></Link>
        </li>
        <li className='card'>
          <Image src='/Sagittarius.png' width={150} height={150} alt='sagittarius'/>
          <h4>Nov 23 - Dec 21</h4>
          <Link href={`/sagittarius&${props.day}`} key={Math.random().toString()}><a>Sagittarius</a></Link>
        </li>
      </ul>

      <style jsx>{`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .cards-container {
            width: 900px;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 40px

          }
          .card{
            flex: 0 0 33%;
            margin: 30px 0;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          h4 {
            margin: 15px 0;
          }
          a {
            font-size: 26px;
          }
        `}</style>
    </div>
  )
}

export default signs
