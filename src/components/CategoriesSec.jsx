import SliderCategoriesSec from './SliderCategoriesSec'

const image = [{
    image: '/action-cat.png',
    title: 'Action'
}, {

    image: '/adven-cat.png',
    title: 'Adventure'
}, {
    image: '/comedy-cat.png',
    title: 'Comedy'
}, {
    image: '/drama-cat.png',
    title: 'Drama'
}, {
    image: '/horror-cat.png',
    title: 'Horror'
}


]

export default function CategoriesSec() {
    const data = image

    return (
        <div className='container mx-auto'>
            <div className='relative text-white '>
                <div className='mb-20'>
                    <h3 className='mb-5 text-4xl font-bold'>Explore our wide variety of categories</h3>
                    <p className='text-slate-400'>{"Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"}</p>
                </div>
                <div>
                    <SliderCategoriesSec data={data} />
                </div>
            </div>
        </div>
    )
}