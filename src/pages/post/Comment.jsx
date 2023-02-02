import { useEffect, useState } from 'react';
import { NavLink, useOutletContext } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Comment = () => {
    const { postId } = useOutletContext();
    const [comment, setComment] = useState(null);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
            )
            .then((res) => {
                setComment(res.data);
            });
    }, []);

    if (!comment) return null;

    return (
        <div className='min-h-screen w-full bg-slate-100 '>
            <div className='h-full max-w-[1024px] mx-auto flex justify-center flex-col gap-10'>
                <div className='flex flex-wrap w-full gap-2 mb-[10%] mt-5'>
                    {comment.map((c) => {
                        return (
                            <Card
                                sx={{ minWidth: 1024 }}
                                className='flex flex-col justify-between'
                                key={c.id}>
                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        {c.name}
                                    </Typography>
                                    <Typography variant='body2'>
                                        {c.body}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <NavLink to={``} end>
                                        <Button size='small'>{c.email}</Button>
                                    </NavLink>
                                </CardActions>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Comment;
