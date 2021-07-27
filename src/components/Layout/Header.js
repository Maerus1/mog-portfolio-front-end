import CorporateLogo from './../../img/company-logo.png';

function Header() {
  return (
    <div className="md:text-center bg-gray-1200 mx-0 py-2 flex justify-evenly">
      <img src={CorporateLogo} className="self-center" />
      <select className="rounded-lg bg-gray-600 focus:outline-none">
        <option>Japanese</option>
        <option selected>English</option>
        <option>French</option>
        <option>German</option>
      </select>
    </div>
  );
}

export default Header;
