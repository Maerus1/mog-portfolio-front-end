import PSLogo from './../../img/playstation-logo.png';
import PCLogo from './../../img/pc-logo.png';
import MacLogo from './../../img/mac-logo.png';
import SteamLogo from './../../img/steam-logo.png';
import ESRBLogo from './../../img/esrb-logo.png';
import ESRBCertificationLogo from './../../img/esrb-certification-logo.png';

function Footer() {
  return (
    <div className="flex flex-col bg-gray-1200 text-white mt-4">
      <div className="flex flex-row justify-evenly border-b-2 md:rounded-b-full mb-2">
        <a href="#">About This Site</a> |<a href="#">Privacy Policy</a> |
        <a href="#">Cookie Policy</a> |<a href="#">User Agreement</a>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row content-between flex-wrap gap-x-2">
          <a href="#" className="flex">
            <img
              src={PSLogo}
              alt="Go to the Playstation main site"
              className="self-center"
            />
          </a>
          <img src={PCLogo} alt="PC logo" className="self-center" />
          <img src={MacLogo} alt="Mac logo" className="self-center" />
          <img src={SteamLogo} alt="Steam logo" className="self-center" />
          <a href="#" className="flex">
            <img
              src={ESRBLogo}
              alt="Go to the ESRB main site"
              className="self-center"
            />
          </a>
          <div className="grid grid-cols-1">
            <a href="#" className="flex">
              <img src={ESRBCertificationLogo} alt="" className="self-start" />
            </a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet venison prosciutto alcatra
            jowl tail
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
