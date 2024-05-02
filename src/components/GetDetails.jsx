import './getDetails.css'
import decor from '../images/decor.png'

export default function GetDetails() {

    return (
        <div className='Details relative'>
            <div className='   max-w-[1440px] m-auto'>
                <img className='absolute top-0 right-0 w-full z-10' src={decor} alt=""/>
                <div className='absolute z-20 GetDetail top-40 py-[17px] px-[47.5px]'>
                    <h2 className='flex justify-center text-[36px] uppercase font-bold '>подобрать детали</h2>
                    <p className='flex  justify-center text-center font-bold py-[10px]'>найдите недостающие детали именно на ваше транспортное стредство</p>
                    <div className='flex justify-between w-full gap-[15px] '>
                        <div className=' items-center bg-white py-[10px] px-4 inline-block border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Год выпуска</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className=' items-center bg-white py-[10px] px-4 inline-block border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Марка</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className=' items-center bg-white py-[10px] px-4 inline-block border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Модель</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div className=' items-center bg-white py-[10px] px-4 inline-block border-[#867777] border-2 rounded-lg cursor-pointer'>
                            <p className='inline mr-[200px]'> Тип кузова</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>

                <div className='flex justify-center py-6'>
                    <button className=' bg-[#E11C43] py-[10.5px] px-[65px] text-white rounded-full font-bold'>НАЙТИ ДЕТАЛИ</button>
                </div>
                </div>
            </div>
        </div>
    )
}