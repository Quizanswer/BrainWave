
import { Button, Divider, Form, Input, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import CommonWrapper from "../components/CommonWrapper"
import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query"
// import useSWR from "swr"
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Question = () => {
    const [action, setAction] = React.useState(null);
    const [page, setPage] = React.useState(1);

    //** CREATE QUESTION PAPER START **//
    const postQuestions = async (data) => {
        const res = await axios.post("https://test-alchemy-backend.onrender.com/q-paper/create",{
            
        }, data);
        return res.data;
    }

    const { mutate, isPending } = useMutation({
        mutationFn: postQuestions,
        onSuccess: (data) => {
            console.log("question is uploaded", data)
        }
    })
    //** CREATE QUESTION PAPER END **//

    // const { data, isLoading } = useSWR(`https://swapi.py4e.com/api/people?page=${page}`, fetcher, {
    //     keepPreviousData: true,
    // });

    // const rowsPerPage = 10;

    // const pages = React.useMemo(() => {
    //     return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
    // }, [data?.count, rowsPerPage]);

    // const loadingState = isLoading || data?.results.length === 0 ? "loading" : "idle";

    return (
        <div >
            <CommonWrapper>
                <div className="px-10 mt-10">
                    {/* CREATE QUESTION PAPER RELATED FORM */}
                    <Form
                        className="w-full mx-auto flex flex-col gap-5"
                        validationBehavior="native"
                        onReset={() => setAction("reset")}
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log(data, "51 no line")
                            mutate(data)
                        }}
                    >
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-x-4">
                            <Input
                                isRequired
                                errorMessage="Please enter a question duration"
                                label="Duration"
                                labelPlacement="outside"
                                name="duration"
                                placeholder="Enter your Quiz Duration"
                                type="number"
                                radius="none"
                            />

                            <Input
                                isRequired
                                errorMessage="Please enter a Quiz Mark"
                                label="totalMarks"
                                labelPlacement="outside"
                                name="totalMarks"
                                placeholder="Enter your Quiz Mark"
                                type="number"
                                radius="none"
                            />
                        </div>
                        <Input
                            isRequired
                            errorMessage="Please enter a Quiz Name"
                            label="Question Name"
                            className="w-full"
                            labelPlacement="outside"
                            name="name"
                            placeholder="Enter your Question Name"
                            type="text"
                            radius="none"
                        />
                        <div className="flex gap-2">
                            <Button color="primary" radius="none" type="submit">
                                Submit
                            </Button>
                            <Button type="reset" radius="none" variant="flat">
                                Reset
                            </Button>
                        </div>
                        {action && (
                            <div className="text-small text-default-500">
                                Action: <code>{action}</code>
                            </div>
                        )}
                    </Form>
                    <Divider className="my-4" />
                    {/* QUESTION PAPER TABLE SET */}
                    <div>
                        <h1 className="w-full py-2 hover:border-[#838c48] border-1 border-transparent hover:border-1 transition-all duration-200 text-center bg-[#FDF6EA]">Show All Question Paper</h1>
                        {/* SHOW TABLE DATA */}

                        <Table
                            classNames={{ th: "!rounded-none" }}
                            aria-label="Example table with client async pagination"
                            // bottomContent={
                            //     pages > 0 ? (
                            //         <div className="flex w-full justify-center">
                            //             <Pagination
                            //                 isCompact
                            //                 showControls
                            //                 showShadow
                            //                 color="primary"
                            //                 page={page}
                            //                 total={pages}
                            //                 onChange={(page) => setPage(page)}
                            //             />
                            //         </div>
                            //     ) : null
                            // }
                            radius="none"
                            className="mt-5"
                        >
                            <TableHeader >
                                <TableColumn key="birth_year">Birth year</TableColumn>
                                <TableColumn key="birth_year">Birth year</TableColumn>
                                <TableColumn key="name">Name</TableColumn>
                                <TableColumn key="height">Height</TableColumn>
                                <TableColumn key="mass">Mass</TableColumn>
                            </TableHeader>
                            <TableBody
                            // items={data?.results ?? []}
                            // loadingContent={<Spinner />}
                            // loadingState={loadingState}
                            >
                                {/* {(item) => (
                                    <TableRow key={item?.name}>
                                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                    </TableRow>
                                )} */}
                                <TableRow >
                                    <TableCell>data</TableCell>
                                    <TableCell>data</TableCell>
                                    <TableCell>data</TableCell>
                                    <TableCell>data</TableCell>
                                    <TableCell>data</TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>

                    </div>
                </div>
            </CommonWrapper >
        </div >
    )
}
export default Question