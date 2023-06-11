import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={500}
        viewBox='0 0 280 500'
        backgroundColor='#d6d6d6'
        foregroundColor='#ffbe4d'
    >
        <circle cx='140' cy='115' r='115' />
        <rect x='0' y='250' rx='10' ry='10' width='280' height='20' />
        <rect x='0' y='280' rx='10' ry='10' width='280' height='88' />
        <rect x='0' y='380' rx='10' ry='10' width='110' height='30' />
        <rect x='150' y='380' rx='20' ry='20' width='130' height='45' />
    </ContentLoader>
);

export default Skeleton;
