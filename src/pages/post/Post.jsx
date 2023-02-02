import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export default function Post() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setPost(res.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div className='min-h-screen w-full bg-slate-100'>
            <div className='h-full max-w-[1024px] mx-auto flex justify-center items-center flex-col gap-10'>
                <h1 className='mt-[30%] md:mt-[10%] font-semibold text-3xl self-start'>
                    List Post
                </h1>

                <div className='flex flex-wrap w-full gap-5 mb-[10%]'>
                    {post.map((p) => {
                        return (
                            <Card
                                sx={{ maxWidth: 500 }}
                                className='flex flex-col justify-between'
                                key={p.id}
                                data-aos='fade-up'
                                data-aos-anchor-placement='center-center'
                                data-aos-easing='linear'
                                data-aos-duration='300'>
                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        {p.title}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {p.body}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <NavLink to={`/post/${p.id}`} end>
                                        <Button size='small'>See More</Button>
                                    </NavLink>
                                </CardActions>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
