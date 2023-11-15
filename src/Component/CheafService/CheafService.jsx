import img from '../../assets/home/chef-service.jpg'

const CheafService = () => {


    return (
        <div className='mb-5 '>
            <img src={img} alt="" />
            <div className='text-center -mt-60 mb-40  text-white'>
                <h2 className='font-bold text-3xl mb-3'>
                Bistro Boss
                </h2>
                <p className='text-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </div>
    );
};

export default CheafService;