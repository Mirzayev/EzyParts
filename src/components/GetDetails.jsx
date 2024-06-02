import './getDetails.css'
import decor from '../images/decor.png'
import writeList from '../images/carOil.png'
import deleteOil from '../images/deleteOil.png'
import humans from '../images/humans.png'
import Add from '../images/Add.png'

export default function GetDetails() {

    return (
        <div className='Details relative'>
            <div className='   max-w-[1440px] m-auto '>
                <img className=' absolute top-0 right-0  w-full z-10' src={decor} alt=""/>
                <div className='absolute z-20 GetDetail px-4 top-[49px] py-[17px] '>
                    <h2 className='flex justify-center lg:text-[36px] pho:text-[25px] uppercase font-bold '>подобрать детали</h2>
                    <p className='flex  justify-center text-center font-bold py-[10px]'>найдите недостающие детали именно на ваше транспортное стредство</p>
                    <div className='flex justify-between w-full gap-[15px]  flex-wrap'>
                        <div className=' items-center bg-white py-[10px] px-4 flex border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Год выпуска</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className='flex items-center bg-white py-[10px] px-4  border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Марка</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className=' items-center bg-white py-[10px] px-4 flex border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Модель</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className=' items-center bg-white py-[10px] px-4 flex border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Тип кузова</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>

                <div className='flex justify-center py-6 '>
                    <button className=' bg-[#E11C43] py-[10.5px] px-[65px] text-white rounded-full font-bold'>НАЙТИ ДЕТАЛИ</button>
                </div>
                </div>

                <div className='absolute z-20  justify-center bottom-[-39px] left-[13%] gap-5 overflow-auto pho:hidden xl:flex py-4'>
                    <div className='w-[250px] text-center bg-white px-[7.5px] py-[29.5px] rounded-lg shadow-lg shadow-[#18A7A7]  cursor-pointer hover:bg-slate-200 duration-300 ' >
                        <div className='flex justify-center'><img src={writeList} alt=""/></div>
                        <p>Выбирайте по цене, скорости
                            доставки или расположению</p>
                    </div>
                    <div className='w-[250px] text-center bg-white px-[7.5px] py-[29.5px] rounded-lg  shadow-lg shadow-[#18A7A7] cursor-pointer hover:bg-slate-200 duration-300  '>
                        <div className='flex justify-center'><img src={deleteOil} alt=""/></div>
                        <p>589 837 <br/> запчастей
                            и масел в каталоге</p>
                    </div>
                    <div className='w-[250px] text-center bg-white px-[7.5px] py-[29.5px] rounded-lg  shadow-lg shadow-[#18A7A7]  cursor-pointer hover:bg-slate-200 duration-300 '>
                        <div className='flex justify-center'><img src={humans} alt=""/></div>
                        <p>Средний рейтинг
                            продавцов 4.83 из 5</p>
                    </div>
                    <div className='w-[250px] text-center bg-white px-[7.5px] py-[29.5px] rounded-lg  shadow-lg shadow-[#18A7A7] cursor-pointer hover:bg-slate-200 duration-300 '>
                        <div className='flex justify-center'><img src={Add} alt=""/></div>
                        <p>Подать объявление</p>
                    </div>
                </div>
            </div>
        </div>
    )
}