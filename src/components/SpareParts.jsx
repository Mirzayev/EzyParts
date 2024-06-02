import svecha from '../images/candle.png'
import oil from '../images/EngineOil.png'
import upper from '../images/UpperParts.png'
import katalogTO from '../images/KatalogTO.png'
import katalog  from '../images/Katalog.png'
import chehol  from '../images/Chehol.png'
import transOil from '../images/transOil.png'
import piston from '../images/piston.png'
import engine from '../images/engine.png'

export default function SpareParts() {


    return (

        <div className='max-w-[1440px] m-auto'>
            <div>
                <h2 className='text-[22px] text-[#18A7A7] font-bold mb-[33px] px-5'>Необходимое для каждого авто </h2>

                <div className='grid lg:grid-cols-3  gap-5 md:grid-cols-2 pho:grid-cols-1 px-4'>


                    <div className='row-span-4'>

                        <div className='flex  items-center bg-gray-200 my-2 rounded-lg pl-[29px]'>
                            <div>
                                <h4 className='text-[18px] font-bold'>Свечи</h4>
                                <p className='text-[#867777] '>Свечи зажигания, свечи накала</p>
                            </div>
                            <img src={svecha} alt=""/>
                        </div>
                        <div className='flex  items-center bg-gray-200 my-2 rounded-lg pl-[29px]'>
                            <div>
                                <h3 className='text-[18px] font-bold'>Моторные масла</h3>
                                <p className='text-[#867777] '>Свечи зажигания, свечи накала</p>
                                <button
                                    className='text-[#18A7A7] font-semibold bg-transparent mt-5  border-[2px] border-[#18A7A7] px-[30px] py-[10px] rounded-lg'>1
                                    л
                                </button>
                                <br/>
                                <button
                                    className='text-[#18A7A7] font-semibold bg-transparent my-[6px]  border-[2px] border-[#18A7A7] px-[30px] py-[10px] rounded-lg'>4
                                    л
                                </button>
                                <br/>
                                <button
                                    className='text-[#18A7A7] font-semibold bg-transparent  border-[2px] border-[#18A7A7] px-[30px] py-[10px] rounded-lg'>5
                                    л
                                </button>

                            </div>
                            <img className='object-contain' src={oil} alt=""/>

                        </div>
                        <div className='flex items-center bg-gray-200 my-2 rounded-lg pl-[29px]'>
                            <div>
                                <h4 className='text-[18px] font-bold'>Кузовные запчасти</h4>
                                <p className='text-[#867777]'>Свечи зажигания, свечи накала</p>
                            </div>
                            <img src={upper} alt=''/>
                        </div>

                    </div>


                    <div>
                        <div className='flex  items-center  my-[10px] rounded-lg bg-gray-200  pl-[29px]'>
                            <div>
                                <h4 className='text-[18px] font-bold'>Каталог ТО</h4>
                                <p className='text-[#867777] '>Свечи зажигания, свечи накала</p>
                            </div>
                            <img src={katalogTO} alt=""/>
                        </div>
                        <div className='flex items-center  my-[10px] rounded-lg bg-gray-200  pl-[29px]'>
                            <div>
                                <h4 className='text-[18px] font-bold'>Каталог</h4>
                                <p className='text-[#867777]'>Свечи зажигания, свечи накала</p>
                            </div>
                            <img src={katalog} alt=''/>
                        </div>
                        <div className='flex items-center  my-[10px] rounded-lg bg-gray-200  pl-[29px]'>
                            <div>
                                <h4 className='text-[18px] font-bold'>Коврики</h4>
                                <p className='text-[#867777]'>Свечи зажигания, свечи накала</p>
                            </div>
                            <img src={chehol} alt=''/>
                        </div>
                        <div className='flex justify-between items-center  my-[10px] rounded-lg bg-gray-200  pl-[29px]'>
                            <div>
                                <h4 className='text-[18px] font-bold'>Трансмиссионные
                                    масла</h4>
                                <p className='text-[#867777] '>Свечи зажигания, свечи накала</p>
                            </div>
                            <img src={transOil} alt=""/>
                        </div>
                    </div>

                    <div className='xl:gap-2'>
                        <div className='mt-3 rounded-lg  items-center bg-[#68b0ab] text-white'>
                            <div className='px-[30px] m-auto'>
                                <h4 className='text-[18px] font-bold  py-[15px] text-18px]  '>Поиск запчастей <br/>  по VIN номеру авто</h4>
                                <div className=' flex px-3  items-center bg-white py-4 mt-1 rounded'>
                                    <input className='w-full h-full outline-none text-black' type="text"
                                           placeholder='Введите номер детали, название или VIN'/>
                                    <i className="fa-solid fa-magnifying-glass text-black  cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='w-full flex justify-end '>
                                <img className='mr-10 ' src={piston} alt=""/>
                            </div>
                        </div>

                        <div className='flex px-3  bg-gray-200 rounded-lg my-2'>
                            <div  className=' py-[30px]'>
                                <h3 className='text-[18px] font-bold pl-3 '>АКБ</h3>
                                <p className='text-[#867777] pl-3'>Свечи зажигания, свечи накала</p>
                                <button
                                    className='text-[#18A7A7] font-semibold  bg-transparent mt-5  border-[2px] border-[#18A7A7] lg:px-[30px] pho:px-3  py-[4px]  rounded-lg hover:bg-[#18A7A7] hover:text-white duration-300'>Прямая
                                    полярность
                                </button>
                                <br/>
                                <button
                                    className='text-[#18A7A7] font-semibold bg-transparent my-2  border-[2px] border-[#18A7A7] lg:px-[30px] pho:px-3   py-[4px]  rounded-lg hover:bg-[#18A7A7] hover:text-white duration-300'>Обратная
                                    полярность
                                </button>


                            </div>
                            <img className=' w-30' src={engine} alt=""/>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}