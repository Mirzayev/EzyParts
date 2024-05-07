import  korpus_image  from '../images/KorpusFilter.png'


const Products = () => {


    return (
        <div className='pt-[77px]  max-w-[1440px] m-auto'>
            <div>
              <h2 className='text-[22px] text-[#18A7A7] font-bold mb-[33px]'>Хиты продаж</h2>

                <div className='flex  gap-10 text-center'>

                    <nav className='border-[1px] border-green-200'>
                        <div className='flex justify-center'><img src={korpus_image} alt=""/></div>
                        <h6>12 500 тг</h6>
                        <p>RENAULT Корпус фильтра масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200'>
                        <div className='flex justify-center'><img src={korpus_image} alt=""/></div>
                        <h6>12 500 тг</h6>
                        <p>RENAULT Корпус фильтра масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200'>
                        <div className='flex justify-center'><img src={korpus_image} alt=""/></div>
                        <h6>12 500 тг</h6>
                        <p>RENAULT Корпус фильтра масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200'>
                        <div className='flex justify-center'><img src={korpus_image} alt=""/></div>
                        <h6>12 500 тг</h6>
                        <p>RENAULT Корпус фильтра масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200'>
                        <div className='flex justify-center'><img src={korpus_image} alt=""/></div>
                        <h6>12 500 тг</h6>
                        <p>RENAULT Корпус фильтра масляного (с радиатором)</p>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Products