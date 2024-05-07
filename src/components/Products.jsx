import './product.css'

import korpus_image from '../images/KorpusFilter.png'

const Products = () => {


    return (
        <div className='pt-[77px]  max-w-[1440px] m-auto py-20'>
            <div>
                <h2 className='text-[22px] text-[#18A7A7] font-bold mb-[33px] px-5'>Хиты продаж</h2>

                <div className='flex px-4 lg:justify-center  gap-10 text-center overflow-auto pho:whitespace-nowrap lg:whitespace-normal py-3'>

                    <nav className='border-[1px] border-green-200 rounded-lg products_table px-4'>
                        <div className='flex justify-center pt-3'><img src={korpus_image} alt=""/></div>
                        <h6 className='text-[22px] text-[#18A7A7] font-bold py-[10px]'>12 500 тг</h6>
                        <p className='font-semibold py-4 w-auto'>RENAULT Корпус фильтра <br/> масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200 rounded-lg products_table px-4'>
                        <div className='flex justify-center pt-3'><img src={korpus_image} alt=""/></div>
                        <h6 className='text-[22px] text-[#18A7A7] font-bold py-[10px]'>12 500 тг</h6>
                        <p className='font-semibold py-4 w-auto'>RENAULT Корпус фильтра <br/> масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200 rounded-lg products_table px-4'>
                        <div className='flex justify-center pt-3'><img src={korpus_image} alt=""/></div>
                        <h6 className='text-[22px] text-[#18A7A7] font-bold py-[10px]'>12 500 тг</h6>
                        <p className='font-semibold py-4 w-auto'>RENAULT Корпус фильтра <br/> масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200 rounded-lg products_table px-4'>
                        <div className='flex justify-center pt-3'><img src={korpus_image} alt=""/></div>
                        <h6 className='text-[22px] text-[#18A7A7] font-bold py-[10px]'>12 500 тг</h6>
                        <p className='font-semibold py-4 w-auto'>RENAULT Корпус фильтра <br/> масляного (с радиатором)</p>
                    </nav>
                    <nav className='border-[1px] border-green-200 rounded-lg products_table px-4'>
                        <div className='flex justify-center pt-3'><img src={korpus_image} alt=""/></div>
                        <h6 className='text-[22px] text-[#18A7A7] font-bold py-[10px]'>12 500 тг</h6>
                        <p className='font-semibold py-4 w-auto'>RENAULT Корпус фильтра <br/> масляного (с радиатором)</p>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Products