import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaComments } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';

export default function PostDetail() {
    const { postId } = useParams();
    const [detail, setDetail] = useState(null);
    const [user, setUser] = useState(null);
    const [comment, setComment] = useState(null);
    const [toggleComment, setToggleComment] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => {
                setDetail(res.data);
                return res.data;
            })
            .then((data) => {
                axios
                    .get(
                        `https://jsonplaceholder.typicode.com/users/${data.userId}`
                    )
                    .then((res) => {
                        setUser(res.data);
                    });
            });
    }, []);

    if (!detail || !user) return null;

    return (
        <div className='min-h-screen w-full bg-slate-100'>
            <div className='h-full max-w-[1024px] mx-auto flex justify-center items-center flex-col gap-10'>
                <div
                    className='mt-[10%] flex flex-col w-[100%] gap-[20px] text-center'
                    data-aos='fade-up'
                    data-aos-anchor-placement='center-center'
                    data-aos-easing='linear'
                    data-aos-duration='300'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold text-xl'>
                            {detail.title}
                        </span>
                        <span>{detail.body}</span>
                    </div>

                    <span className='text-[15px] italic text-gray-500'>
                        Creator: {user.name}
                    </span>

                    <div className='flex self-end gap-4 justify-center items-center text-gray-600 hover:cursor-pointer hover:text-gray-500 duration-200'>
                        <span className='font-semibold'>Comments</span>
                        <FaComments className='text-[30px]' />

                        <div className='relative top-[-5px] right-6 h-[10px] w-[10px] bg-red-600 rounded-full'></div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
}
