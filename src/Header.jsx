import logo from './images/Logo.png'


export default function Header() {


    return (
        <div className=''>
            <div className='bg-[#3F3F3F] text-white '>
                <div
                    className='max-w-[1140px] m-auto flex justify-between items-center px-3 flex-wrap  py-2 pho:justify-center'>
                    <div className='flex items-center gap-2 lg:py-[9.5px]'><i className="fa-solid fa-location-dot"></i>
                        <p>Алматы</p></div>
                    <p>Бесплатная доставка заказов до конца декабря!</p>
                </div>
            </div>

            <div className='flex items-center justify-between '>
                <div className='flex items-center'>
                    <img src={logo} alt=""/>
                    <p className='font-semibold text-xl text-[#3BAEAB] '>ezy parts</p>
                </div>
                <div className='flex gap-[30px] items-center'>
                    <p>О нас</p>
                    <p>Помощь</p>
                    <p>Продавцу</p>
                    <p>Покупателю</p>
                    <p>Контакты</p>
                </div>
                <div>
                    <input type="text" placeholder='Введите номер детали, название или VIN'/>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div></div>
            </div>
        </div>
    )
}