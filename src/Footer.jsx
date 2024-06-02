import balon from '../src/images/balloon.png'
import tranmisson from '../src/images/Transmission.png'








export default function Footer() {

    return (

        <div className="bg-[#F7EEEC] relative">
            <div className="max-w-[1440px] m-auto px-3">
                <div className="lg:py-[46px]">

                    <img className="absolute top-[-30px] hidden lg:block" src={balon} alt=""/>
                    <img className="absolute botto-0 right-0 hidden lg:block" src={tranmisson} alt=""/>
                    <div className="text-[#18A7A7]    max-w-[514px] mx-auto text-center">
                        <h2 className="xl:text-[40px] lg:text-3xl text-xl ipad:text-2xl   font-bold mb-[30px] ">Начните
                            продавать <br/> на EZY Parts!</h2>
                        <button className="text-white bg-[#18A7A7] xl:w-[397px] xl:py-3 duration-300 hover:bg-[#18C7A7] px-3 py-1 rounded-md">СТАТЬ ПРОДАВЦОМ
                        </button>
                    </div>

                    <div className="reklama">

                    </div>



                </div>
                <div className="grid lg:grid-cols-4 grid-cols-3   justify-between py-[30px]">
                    <div className="flex flex-col gap-3">
                        <p>Каталог автозапчастей</p>
                        <p>О компании</p>
                        <p>Помощь</p>
                        <p>Покупателю</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p>Продавцу</p>
                        <p>Реклама на сайте</p>
                        <p>Контакты</p>
                    </div>

                    <div className="flex gap-3 ">
                        <i className="fa-brands fa-vk text-xl cursor-pointer hover:text-gray-500 duration-200"></i>
                        <i className="fa-brands fa-facebook text-xl cursor-pointer hover:text-gray-500 duration-200"></i>
                        <i className="fa-brands fa-instagram text-xl cursor-pointer hover:text-gray-500 duration-200"></i>
                    </div>

                    <div className="   flex flex-col gap-3">
                    <img src="" alt=""/>
                        <p>© 2021, EZY parts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}