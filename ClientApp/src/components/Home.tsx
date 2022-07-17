import React from 'react';
import { useAppSelector } from '../store/hooks';

function Home() {

    const role = useAppSelector(state => state.authReduser.role);

    return (
        <div>
            Home Page: {role ? `You have ${role} role` : 'You are a guest'}
        </div>
    );
}

export default Home;