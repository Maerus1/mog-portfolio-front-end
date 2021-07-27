import LodestoneLogo from './../img/lodestone-logo.png';
import BannerImage from './../img/landing-page-banner.png';

function Login() {
  return (
    <div className="flex items-center flex-col">
      <img
        src={BannerImage}
        alt="Landing page banner image"
        className="bg-auto"
      />
      <p className="text-red-600 font-semibold mx-2">
        Welcome to the Mug Station, the account management page for that game
        that totally exists!
      </p>
      <p className="mx-2">
        Here you can manage your account and any additional services available
        for members.
      </p>
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="md:w-1/2 2xl:w-1/4 h-auto mb-4 md:mb-0">
          <div className="border border-t-2 border-b-8 border-gray-300 rounded-md">
            <h2 className="bg-gray-200 rounded-t-sm text-center text-gray-500 font-bold">
              Log In
            </h2>
            <form className="flex flex-col items-center mt-4 mb-2 h-full">
              <div className="flex flex-col gap-3">
                <label>
                  Member ID
                  <input type="text" className="border w-1/2 float-right" />
                </label>
                <label>
                  Member Password
                  <input type="password" className="border w-1/2 float-right" />
                </label>
                <a href="#" className="text-blue-700 text-sm font-semibold">
                  Forgot your ID or password?
                </a>
              </div>
              <label className="text-sm mt-3">
                <input type="checkbox" />
                Remember Member ID
              </label>
              <button
                type="submit"
                className="bg-gradient-to-t from-red-300 via-red-400 to-red-100 hover:via-red-600 px-20 py-2 mt-3 text-white font-bold rounded-md"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:ml-2 md:w-1/2 lg:w-4/12 2xl:w-2/12">
          <div className="border border-t-2 border-b-8 border-gray-300 rounded-md mb-4">
            <div className="mx-2 mt-2">
              <button
                type="button"
                className="bg-gradient-to-t from-blue-300 via-blue-400 to-blue-200 hover:via-blue-600 py-6 rounded-md text-white font-bold w-full"
              >
                Register New Account
              </button>
              <p className="font-semibold">
                What is a Test Company Member account?
              </p>

              <p>
                Spicy jalapeno bacon ipsum dolor amet prosciutto doner pastrami
                kevin picanha, boudin shankle pork ribeye. Cow bresaola ground
                round, short loin ham hock shank tongue pig prosciutto beef ribs
                pork loin tenderloin meatball capicola boudin. Hamburger
                porchetta fatback kevin tenderloin, boudin shank pork belly
                spare ribs pig pancetta t-bone cupim shankle. Buffalo ground
                round sausage landjaeger, beef pork loin biltong capicola beef
                ribs t-bone tail jowl fatback.
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-t from-blue-600 via-blue-800 to-blue-600 hover:via-blue-900 w-full py-6 rounded-md text-white font-bold">
            Go To The Character Portal
          </button>
          {/* <img src={LodestoneLogo} alt="Go to lodestone" /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
