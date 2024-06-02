import logo from './images/Logo.png'
import pram from './images/pram.png'

export default function Header() {


    return (
        <div className=''>
            <div className='bg-[#3F3F3F] text-white '>
                <div
                    className='max-w-[1440px] m-auto sm:flex-row lg:justify-between items-center px-3 flex-wrap  py-2 flex  flex-col justify-center ipad:gap-4 '>
                    <div className='flex items-center gap-2 lg:pt-[9.5px]'><i className="fa-solid fa-location-dot"></i>
                        <p>Алматы</p></div>
                    <p>Бесплатная доставка заказов до конца декабря!</p>
                </div>
            </div>

            <div className='max-w-[1440px] m-auto py-[7px] px-3'>
                <div className='flex items-center justify-between flex-wrap '>
                    <div className='flex items-center '>
                        <img src={logo} alt=""/>
                        <p className='font-semibold text-xl text-[#3BAEAB] '>ezy parts</p>
                    </div>
                    <div className='flex gap-[30px] items-center pho:hidden lg:flex'>
                        <p className='cursor-pointer hover:text-lime-600 duration-300 font-semibold'>О нас</p>
                        <p className='cursor-pointer hover:text-lime-600 duration-300 font-semibold'>Помощь</p>
                        <p className='cursor-pointer hover:text-lime-600 duration-300 font-semibold'>Продавцу</p>
                        <p className='cursor-pointer hover:text-lime-600 duration-300 font-semibold'>Покупателю</p>
                        <p className='cursor-pointer hover:text-lime-600 duration-300 font-semibold'>Контакты</p>
                    </div>
                    <div className='border-b-[1.4px]  border-black text-[#867777] flex gap-[75px] pho:hidden lg:flex'>
                        <input className='outline-none px-1 py-1' type="text"
                               placeholder='Введите номер детали, название или VIN'/>
                        <div className='flex items-center gap-[15px]'>
                            <i className="fa-solid fa-clock-rotate-left   cursor-pointer"></i>
                            <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
                        </div>
                    </div>


                    <div className='flex items-center gap-3 '>
                        <i className="fa-solid fa-cart-shopping bg-[#4CB8C4] px-2 py-2 rounded-full text-white cursor-pointer hover:bg-[#598A9B] duration-300 hover:text-lime-400"></i>
                        <i className="fa-regular fa-user bg-[#4CB8C4] px-2 py-2 rounded-full text-white  cursor-pointer hover:bg-[#598A9B] duration-300 hover:text-lime-400"></i>
                          <i className="fa-solid fa-earth-americas bg-[#4CB8C4] px-2 py-2 rounded-full text-white  cursor-pointer hover:bg-[#598A9B] duration-300 hover:text-lime-400"></i>
                        <i className="fa-solid fa-bars pho:flex lg:hidden px-2"></i>

                    </div>

                </div>

            </div>


            <div className=' bg-[#F5F5F5] py-[11px] px-3'>
                <div
                    className='max-w-[1440px] m-auto flex justify-between  gap-[65px] text-center font-semibold overflow-auto pho:whitespace-nowrap lg:whitespace-normal '>
                    <a className='' href="">Каталог</a>
                    <a className='mb-4' href="">ТО
                        / фильтра</a>
                    <a className='mb-4' href="">Тормозная
                        система</a>
                    <a className='mb-4' href="">Двигатель
                        / выхлоп</a>
                    <a className='mb-4' href="">Подвеска
                        / рулевое</a>
                    <a className='mb-4' href="">Коробка
                        передач</a>
                    <a className='mb-4' href="">Охлождение
                        / отопление</a>
                    <a className='mb-4' href="">Электрика
                        / освещение</a>
                    <a className='mb-4' href="">Кузов
                        / элементы</a>
                </div>

            </div>
        </div>
    )
}