
import { Button, Divider, Form, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import CommonWrapper from "../components/CommonWrapper"
import React from "react";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import AxiosSecure from "../hooks/AxiosSecure";
import toast from "react-hot-toast";
import deletedQuestionFun from "../hooks/deletedQuestionFun";
import updateQuestion from "../hooks/updateQuestion";
const Question = () => {
  const { deletedQuestionPaper } = deletedQuestionFun()
  const { updateQuestionPaper } = updateQuestion()
  const axiosSecure = AxiosSecure();
  const [action, setAction] = React.useState(null);
  const [modalAction, setModalAction] = React.useState(null)
  const [page, setPage] = React.useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  //** CREATE QUESTION PAPER START **//
  const postQuestions = async (data) => {
    const res = await axiosSecure.post("/q-paper/create", data);
    return res.data;
  }
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["create-question"],
    mutationFn: postQuestions,
    onSuccess: () => {
      queryClient.invalidateQueries("create-question")
      toast.success("question paper created!")
    }
  })
  //** CREATE QUESTION PAPER END **//


  //** GET ALL QUESTION PAPER START **//
  const getQuestions = async (page) => {
    const res = await axiosSecure.get(`/q-paper/get-all?take=5&skip=${page}`);
    return res.data;
  }
  const { data, refetch } = useQuery({
    queryKey: ["all-question"],
    queryFn: () => getQuestions(page),
    keepPreviousData: true
  })
  const totalPage = Math.ceil(data?.total / 5)
  const handleChange = () => {
    if (page < totalPage) {
      console.log("next", page)
      setPage(page + 1)
      refetch()
    } else if (page > totalPage) {
      console.log("prev", page)
      setPage(page - 1)
      refetch()
    }
  }

  // HANDLE_UPDATE_QUESTION
  const handleUpdateData = (id, e) => {
    const updateData = Object.fromEntries(new FormData(e.currentTarget));
    const duration = parseInt(updateData.duration)
    const totalMarks = parseInt(updateData.totalMarks)
    const name = updateData?.name
    const updatedData = {
      duration, totalMarks, name
    }
    updateQuestionPaper({ id, updatedData: updatedData })
    console.log(updatedData, "68 no line update")
  }



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
              const duration = parseInt(data.duration)
              const totalMarks = parseInt(data.totalMarks)
              mutate({ duration, totalMarks, name: data?.name })
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
              bottomContent={
                data?.total > 0 ? (
                  <div className="flex w-full justify-center">
                    <Pagination
                      isCompact
                      showControls
                      showShadow
                      color="warning"
                      page={page}
                      total={totalPage}
                      onChange={handleChange}
                    />
                  </div>
                ) : null
              }
              radius="none"
              className="mt-5"
            >
              <TableHeader >
                <TableColumn key="name">Name</TableColumn>
                <TableColumn key="duration">Duration</TableColumn>
                <TableColumn key="totalMarks">TotalMarks</TableColumn>
                <TableColumn key="update">Update</TableColumn>
                <TableColumn key="delete">Delete</TableColumn>
              </TableHeader>
              <TableBody
                items={data?.data ?? []}
                loadingContent={<Spinner />}
              // loadingState={loadingState}
              >
                {(item) => (
                  <TableRow key={item?.name}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
                {
                  data ? data?.data.map(item => {
                    return (
                      <TableRow key={item?._id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item?.duration}</TableCell>
                        <TableCell>{item.totalMarks}</TableCell>
                        <TableCell>
                          <Button radius="none" color="success" onPress={onOpen} >Update</Button>
                          <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalHeader className="flex flex-col gap-1">Update Question</ModalHeader>
                                  <ModalBody>
                                    <Form
                                      className="w-full max-w-xs flex flex-col gap-4"
                                      validationBehavior="native"
                                      onReset={() => setAction("reset")}
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                        handleUpdateData(item?._id, e)
                                      }}
                                    >
                                      <Input
                                        radius="none"
                                        isRequired
                                        errorMessage="Please enter a name"
                                        label="Name"
                                        labelPlacement="outside"
                                        name="name"
                                        placeholder="Enter a name"
                                        type="text"
                                        variant="bordered"
                                      />

                                      <Input
                                        radius="none"
                                        isRequired
                                        errorMessage="Please enter duration"
                                        label="Duration"
                                        labelPlacement="outside"
                                        name="duration"
                                        placeholder="Enter duration"
                                        type="number"
                                        variant="bordered"
                                      />
                                      <Input
                                        radius="none"
                                        isRequired
                                        errorMessage="Please enter marks"
                                        label="Total Marks"
                                        labelPlacement="outside"
                                        name="totalMarks"
                                        placeholder="Enter TotalMarks"
                                        type="number"
                                        variant="bordered"
                                      />


                                      {modalAction && (
                                        <div className="text-small text-default-500">
                                          Action: <code>{modalAction}</code>
                                        </div>
                                      )}
                                      <ModalFooter>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                          Close
                                        </Button>
                                        <Button color="warning" type="submit">
                                          Submit
                                        </Button>
                                      </ModalFooter>
                                    </Form>

                                  </ModalBody>

                                </>
                              )}
                            </ModalContent>
                          </Modal>
                        </TableCell>
                        <TableCell>
                          <Button onPress={() => deletedQuestionPaper(item?._id)} radius="none" color="warning">Delete</Button>
                        </TableCell>

                      </TableRow>
                    )
                  }) : "loading..."
                }
              </TableBody>
            </Table>

          </div>
        </div>
      </CommonWrapper >
    </div >
  )
}
export default Question