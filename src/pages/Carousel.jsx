import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuMonitorCog } from "react-icons/lu";
import { BiCommentEdit } from "react-icons/bi";
import { PiComputerTowerThin } from "react-icons/pi";
import { Divider } from "@nextui-org/react";
import { Button } from "../components/ui/button"
const Carousel = () => {
    //**  CAROUSEL SETTINGS **//
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    //** SLIDER DAYNAMIC IMAGES **//
    const sliderData = [
        {
            title: "Knowledge At Your Fingertips",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam suscipit eligendi voluptatem, cum sed.",
            iconsOne: <PiComputerTowerThin className="text-2xl font-semibold" />,
            iconTitleOne: "Beautiful Template",
            iconTwo: <LuMonitorCog className="text-2xl font-semibold" />,
            iconTitleTwo: "Flexible And Responsive",
            btnOne: "Free Ai Assignment",
            btnTwo: "Free Demo",
            img: "https://i.ibb.co.com/1fnZyMqJ/hometwo.jpg",
        },
        {
            title: "Learn Anytime, Anywhere",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam suscipit eligendi voluptatem, cum sed.",
            iconsOne: <BiCommentEdit className="text-2xl font-semibold" />,
            iconTitleOne: "Super Easy To Use",
            iconTwo: <LuMonitorCog className="text-2xl font-semibold" />,
            iconTitleTwo: "SEO Optimized",
            btnOne: "Free Ai Assignment",
            btnTwo: "Free Demo",
            img: "https://i.ibb.co.com/5Wm4wN50/homethree.jpg"

        },
        {
            title: "Study At Your Own Place",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam suscipit eligendi voluptatem, cum sed.",
            iconsOne: <BiCommentEdit className="text-2xl font-semibold" />,
            iconTitleOne: "Fast page Build",
            iconTwo: <LuMonitorCog className="text-2xl font-semibold" />,
            iconTitleTwo: "Bespoke breanding",
            btnOne: "Free Ai Assignment",
            btnTwo: "Free Demo",
            img: "https://i.ibb.co.com/6MmqZtX/homeone.jpg"
        },
    ]
    return (

        <Slider {...settings}>
            {
                sliderData?.map(slider => {
                    return (
                        <div className="h-full relative">
                            <img className="sm:min-h-[320px] max-h-[800px] min-h-96 w-full sm:object-cover" src={slider.img} alt={slider.title} />
                            {/** BANNER TEXT SECTION **/}
                            <div className="absolute xl:ml-[150px] top-[6%] sm:top-[8%] md:top-[18%] lg:top-[25%] left-[4%] lg:left-[7%] sm:w-[40%] sm:mx-0 mx-auto w-[80%]">
                                <Divider className="my-2 sm:my-4 w-10 sm:w-16 h-[2px] bg-black mx-auto sm:mx-0" />
                                <div className="space-y-2 sm:space-y-4 lg:space-y-7">
                                    <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold text-center sm:text-start">{slider.title}</h1>
                                    <p className="text-gray-800  text-sm sMtext-xs lg:text-[17px] text-center sm:text-start">{slider.description}</p>
                                    {/** ICON SECTION **/}
                                    <section className="flex items-center flex-col sm:flex-row gap-x-3 gap-y-2 sm:gap-y-0">
                                        <div className="flex items-center space-x-2">
                                            <p className="text-red-600 text-sm sm:text-xs md:text-xl lg:text-[17px]">{slider.iconsOne}</p>
                                            <p className="text-sm sm:text-xs">{slider.iconTitleOne}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <p className="text-red-600 text-sm sm:text-xs">{slider.iconTwo}</p>
                                            <p className="text-sm sm:text-xs ">{slider.iconTitleTwo}</p>
                                        </div>
                                    </section>
                                    {/** BUTTON SECTION **/}
                                    <section className="flex items-center flex-col sm:flex-row gap-x-3 gap-y-3 sm:gap-y-0">
                                        <Button variant="destructive" className="text-sm sm:text-xs lg:text-[17px]">{slider.btnOne}</Button>
                                        <Button variant="outline" className="text-sm sm:text-xs lg:text-[17px]">{slider.btnTwo}</Button>
                                    </section>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </Slider>

    )
}

export default Carousel
