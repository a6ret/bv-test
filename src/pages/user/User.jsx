import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

const baseURL = 'https://jsonplaceholder.typicode.com/users';

export default function User() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((res) => {
            setUser(res.data);
        });
    }, []);

    if (!user) return null;

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'username', headerName: 'Username', width: 130 },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        { field: 'phone', headerName: 'Phone', width: 130 },
        // { field: 'address', headerName: 'Address', width: 180 },
        { field: 'website', headerName: 'Website', width: 130 },
    ];

    return (
        <div className='h-screen w-full bg-slate-100'>
            <div className='h-full max-w-[1024px] mx-auto flex justify-center items-center flex-col gap-10'>
                <h1 className='mt-10 font-semibold text-3xl self-start'>
                    List User
                </h1>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={user}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}
