import { FaFacebook, FaGithub, FaGoogle,  FaInstagram,  FaTwitter } from 'react-icons/fa';
import qZoon1 from '../../../assets/qZone1.png'
import qZoon2 from '../../../assets/qZone2.png'
import qZoon3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3  mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                   <FaGoogle/>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                   <FaGithub/>
                    Github
                </button>
            </div>
            <div className='p-4 space-y-3  mb-6'>
                <h2 className="text-3xl">Find us</h2>
                <a className='flex p-4 text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className='flex p-4 text-lg items-center border ' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    Twitter
                </a>
                <a className='flex p-4 text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q zoon */}
            <div className='p-4 space-y-3  mb-6'>
                <h2 className="text-3xl">Q Zoon</h2>
                <img src={qZoon1} alt="" />
                <img src={qZoon2} alt="" />
                <img src={qZoon3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;