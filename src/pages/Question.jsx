
import { Button, Divider, Form, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import CommonWrapper from "../components/CommonWrapper"
import React from "react";

const Question = () => {
    const [action, setAction] = React.useState(null);
    // const [formData, setFormData] = React.useState(null)
    console.log(action, "8 no line")
    return (
        <div >
            <CommonWrapper>
                <div className="px-10 mt-10">
                    {/* CREATE QUESTION PAPER RELATED FORM */}
                    <Form
                        className="w-full max-w-3xl mx-auto flex flex-col gap-5"
                        validationBehavior="native"
                        onReset={() => setAction("reset")}
                        onSubmit={(e) => {
                            e.preventDefault();
                            let data = Object.fromEntries(new FormData(e.currentTarget));
                            setAction(`submit ${JSON.stringify(data)}`);
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
                            />

                            <Input
                                isRequired
                                errorMessage="Please enter a Quiz Mark"
                                label="Marks"
                                labelPlacement="outside"
                                name="marks"
                                placeholder="Enter your Quiz Mark"
                                type="number"
                            />
                        </div>
                        <Input
                            isRequired
                            errorMessage="Please enter a Quiz Name"
                            label="Question Name"
                            className="w-full"
                            labelPlacement="outside"
                            name="email"
                            placeholder="Enter your Question Name"
                            type="text"
                        />
                        <div className="flex gap-2">
                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                            <Button type="reset" variant="flat">
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
                        <h1 className="w-full py-2 hover:border-orange-400 hover:border-2 text-center bg-[#FDF6EA]">Show All Question Paper</h1>
                        {/* SHOW TABLE DATA */}

                        <Table aria-label="Example static collection table" className="mt-5" radius="none">
                            <TableHeader>
                                <TableColumn>Name</TableColumn>
                                <TableColumn>Duration</TableColumn>
                                <TableColumn>Marks</TableColumn>
                                <TableColumn>Delete</TableColumn>
                                <TableColumn>Update</TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key="1">
                                    <TableCell>Tony Reichert</TableCell>
                                    <TableCell>CEO</TableCell>
                                    <TableCell>Active</TableCell>
                                    <TableCell>Active</TableCell>
                                    <TableCell>Active</TableCell>
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