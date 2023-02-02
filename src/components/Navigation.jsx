import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../actions';
import Logo from '../assets/bv-logo.png';

export default function Navigation() {
    const isToggle = useSelector((state) => state.isToggle);
    const dispatch = useDispatch();
    const [nav, setNav] = useState(false);
    // const [toggleProfil, setToggleProfile] = useState(true);
    const handleClick = () => setNav(!nav);

    console.log(isToggle);

    return (
        <div className='fixed w-full h-[80px] text-black bg-white flex justify-center z-50'>
            <div className='w-[1024px] flex h-full justify-between px-5 md:px-0 md:justify-between items-center'>
                <div>
                    <NavLink to='/' end className='cursor-pointer'>
                        <img src={Logo} alt='Logo' className='w-[70px]' />
                    </NavLink>
                </div>

                {/* Menu */}
                <ul className='hidden md:flex items-center'>
                    <li>
                        <NavLink
                            to='/'
                            end
                            className='hover:text-blue-500 font-semibold duration-300'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/post'
                            end
                            className='hover:text-blue-500 duration-300 font-semibold'>
                            Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/user'
                            end
                            className='hover:text-blue-500 duration-300 font-semibold'>
                            User
                        </NavLink>
                    </li>
                    <li className='relative'>
                        <div className='flex gap-4 text-2xl'>
                            <MdAccountCircle
                                onClick={() => dispatch(toggle())}
                            />
                        </div>

                        <ul
                            className={
                                isToggle
                                    ? 'toggle-dropdown-profile absolute shadow-md py-3 flex flex-col ml-[44px] mt-1'
                                    : 'absolute shadow-md py-3 flex flex-col mt-1 bg-white'
                            }>
                            <li className='hover:bg-gray-100 duration-200 py-2'>
                                Setting
                            </li>
                            <li className='hover:bg-gray-100 duration-200 py-2'>
                                Logout
                            </li>
                        </ul>
                    </li>
                </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? (
                        <FaBars className='hover:cursor-pointer' />
                    ) : (
                        <FaTimes className='hover:cursor-pointer' />
                    )}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={
                        !nav
                            ? 'hidden'
                            : 'md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-[50px] text-[20px]'
                    }>
                    <li>
                        <NavLink
                            to='home'
                            end
                            className='cursor-pointer absolute top-5 left-[50%] ml-[-50px]'>
                            <img src={Logo} alt='Logo' className='w-[100px]' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            end
                            className='hover:text-blue-500 font-semibold duration-300'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/post'
                            end
                            className='hover:text-blue-500 duration-300 font-semibold'>
                            Post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/user'
                            end
                            className='hover:text-blue-500 duration-300 font-semibold'>
                            User
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
