import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LuMonitorCog } from "react-icons/lu";
import { BiCommentEdit } from "react-icons/bi";
import { PiComputerTowerThin } from "react-icons/pi";

const Carousel = () => {
    //**  CAROUSEL SETTINGS **//
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000
    };
    //** SLIDER DAYNAMIC IMAGES **//
    const sliderData = [
        {
            title: "Knowledge At Your Fingertips",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam suscipit eligendi voluptatem, cum sed.",
            iconsOne: <PiComputerTowerThin className="text-2xl font-semibold" />,
            iconTwo: <LuMonitorCog className="text-2xl font-semibold" />,
            btnOne: "Free Ai Assignment",
            btnTwo: "Free Demo",
            img: "https://i.ibb.co.com/1fnZyMqJ/hometwo.jpg",
        },
        {
            title: "Learn Anytime, Anywhere",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam suscipit eligendi voluptatem, cum sed.",
            iconsOne: <BiCommentEdit className="text-2xl font-semibold" />,
            iconTwo: <LuMonitorCog className="text-2xl font-semibold" />,
            btnOne: "Free Ai Assignment",
            btnTwo: "Free Demo",
            img: "https://i.ibb.co.com/5Wm4wN50/homethree.jpg"

        },
        {
            title: "Study At Your Own Place",
            description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam suscipit eligendi voluptatem, cum sed.",
            iconsOne: <BiCommentEdit className="text-2xl font-semibold" />,
            iconTwo: <LuMonitorCog className="text-2xl font-semibold" />,
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
                        <div>
                            <img src={slider.img} alt="" />
                        </div>
                    )
                })
            }

        </Slider>
    )
}

export default Carousel