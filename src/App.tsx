import { BackgroundImage } from './components/BackgroundImage';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import CoinhallLogo from './assets/coinhall.svg';
import AstroportLogo from './assets/astroport.svg';
import DEXScreenerLogo from './assets/dexscreener.svg';

function App() {
  return (
    <>
      <BackgroundImage />
      <div className="flex justify-center items-center h-screen flicker">
        <div className="bg-black bg-opacity-50 p-8 rounded-md text-white text-center font-bold">
          <h1 className="text-4xl mb-4 font-quicksand gradient-text ">$KARMA</h1>
          <div className="text-3xl mb-4 font-quicksand gradient-text2 "> Enrichment for your Mind and Soul</div>

          <div className="grid grid-cols-2  place-content-around  justify-items-center  rounded-md m-12 ">
            <a href={"https://t.co/aKWqivztWm"} rel="noreferrer" className="flex items-center underline">
              <FaTelegramPlane size={48} />
            </a>

            <a href={"https://twitter.com/KarmaInjective"} rel="noreferrer" className="underline">
              <RiTwitterXLine size={48} />
            </a>
          </div>


          <div className="grid grid-cols-2  place-content-around  justify-items-center  rounded-md ">
            <div className="text-s  mt-2  text-center underline text-blue-400"> <a href="https://explorer.injective.network/transaction/66E34F6ACEEA1894E1B11015DB8411FCA919F093F0DD007FB6A454343B0B316F/ ">LP RENOUNCED </a>  </div>
            <div className="text-s  mt-2  text-center underline text-blue-400"> <a href="https://explorer.injective.network/transaction/F1AE80C92BC08939A8F8A7DEDD26F7E5D97466B9AEA3AB447B6371B8FFB7E8D9/ ">NO ADMIN OWNERSHIP </a> </div>
            <div className="text-s  mt-2  text-center underline text-blue-400"> <a href="https://explorer.injective.network/transaction/F1AE80C92BC08939A8F8A7DEDD26F7E5D97466B9AEA3AB447B6371B8FFB7E8D9/ ">ZERO INFINITE MINT ABILITY </a> </div>
            <div className="text-s  mt-2  text-center underline text-blue-400"> <a href="https://explorer.injective.network/transaction/0x7d2b2102605f249dfedff2b595b8a18cfba9ead9254d82598194910c1b6fc0df/">100% SUPPLY ADDED TO LP </a> </div>

          </div>

          
    <div className='grid grid-cols-3  place-content-around  justify-items-center  rounded-md '>
          <div className='mt-12 text-center flex items-center '>
            <a href="https://coinhall.org/injective/inj1kase2dwjkga8xe6c97nhzvu2p4u0294n3l0f94" rel="noreferrer" className="flex items-center underline">
              <img className="rounded-full w-16 h-16" src={CoinhallLogo} alt="CoinHallLogo" />  {' '} Coinhall{' '}
            </a>
          </div>
          <div className='mt-16'>
            <a href="https://dexscreener.com/injective/inj1kase2dwjkga8xe6c97nhzvu2p4u0294n3l0f94" rel="noreferrer" className="flex items-center underline">
              <img className="rounded-full w-8 h-8" src={DEXScreenerLogo} alt="DexScreenerLogo" />  {' '} DEXSCREENER{' '}
            </a>
          </div>
          <div className='mt-12'>
            <a href="https://app.astroport.fi/swap?to=factory/inj1d4ld9w7mf8wjyv5y7fnhpate07fguv3s3tmngm/karmainj&from=inj" rel="noreferrer" className="flex items-center underline">
              <img className="rounded-full w-16 h-16" src={AstroportLogo} alt="AstropPortLogo" />  {' '} Astroport{' '}
            </a>
          </div>
          </div>
          <div className="text-xs mt-16 text-center gradient-text2">$KARMA is a community owned MEME coin with absolutely no intrinsic value nor expectation of financial return. The coin is for entertainment purposes only. #DYOR #NFA
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
