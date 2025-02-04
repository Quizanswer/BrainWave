import { Checkbox } from "@nextui-org/react";
import CommonWrapper from "../components/CommonWrapper";

const Quiz = () => {
    return (
        <div>
            {/* QUIZ HEADER */}
            <h1 className="bg-gray-800 py-8 text-center text-white font-semibold text-2xl">Question Paper Name</h1>
            <CommonWrapper>
                <div className="px-8 lg:mt-16 mt-6">
                    {/* TITLE AND QUIZ RELATED DESCRILPTION */}
                    <section className="max-w-fit min-w-20 mx-auto space-y-4">
                        <h1 className="bg-[#FFE6E5] rounded-3xl p-2 text-center max-w-36 min-w-20 mx-auto">Qestion 01</h1>
                        <h2 className="font-extrabold text-4xl text-center">Quiz Name</h2>
                        <p className="px-5">User interface design.One Awesome Flat Ui Kit in Psd format. The pack Quiz App is a mobile UI kit created using Sketch and Photoshop.</p>
                    </section>
                    {/* ALL CHEAKBOX HERE */}
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-14 justify-center pt-10">
                        <Checkbox
                            classNames={{ label: "w-[450px] " }}
                            size="lg"
                            className="border rounded-3xl hover:border-orange-400 " radius="full" defaultSelected color="warning">
                            Warning
                        </Checkbox>
                        <Checkbox
                            classNames={{ label: "min-w-[450px]" }}
                            size="lg"
                            className="border rounded-3xl hover:border-orange-400 " radius="full" defaultSelected color="warning">
                            Warning
                        </Checkbox>
                        <Checkbox
                            classNames={{ label: "w-[450px] " }}
                            size="lg"
                            className="border rounded-3xl hover:border-orange-400 " radius="full" defaultSelected color="warning">
                            Warning
                        </Checkbox>
                        <Checkbox
                            classNames={{ label: "min-w-[450px]" }}
                            size="lg"
                            className="border rounded-3xl hover:border-orange-400 " radius="full" defaultSelected color="warning">
                            Warning
                        </Checkbox>
                    </div>


                </div>
            </CommonWrapper>
        </div>

    )
}
export default Quiz;