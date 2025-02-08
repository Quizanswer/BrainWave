import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import CommonWrapper from "../components/CommonWrapper";
import React from "react";
import usePostMutate from "../hooks/shared/usePostMutate";
import useUpdateMutate from "../hooks/shared/useUpdateMutate";
import useFetchQuery from "../hooks/shared/useFetch";
import useDeleteMutate from "../hooks/shared/useDeleteMutate";
const Question = () => {
  const [action, setAction] = React.useState(null);
  const [modalAction, setModalAction] = React.useState(null);
  // const [ids, setIds] = useState("");
  const [page, setPage] = React.useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate: postQuestionPaper, isPending } =
    usePostMutate("/q-paper/create");
  const params = {
    take: 5,
    skip: page,
  };
  const { data, isSuccess, isLoading, refetch } = useFetchQuery(
    "/q-paper/get-all",
    params
  );
  const { mutate: updateQuestionPapers, isPending: updatePending } =
    useUpdateMutate("/q-paper/update");

  // console.log(id,"dididjfadklfklajdklf")
  const { mutate: deleteMutation, isPending: deletePending } =
    useDeleteMutate(`/q-paper/delete`);

  console.log(data, "4466646666666666666666");

  //** CREATE QUESTION PAPER END **//

  const totalPage = Math.ceil(data?.total / 5);
  const handleChange = () => {
    if (page < totalPage) {
      console.log("next", page);
      setPage(page + 1);
      refetch();
    } else if (page > totalPage) {
      console.log("prev", page);
      setPage(page - 1);
      refetch();
    }
  };
  //** GET ALL QUESTION PAPER END **//

  return (
    <div>
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
              const duration = parseInt(data.duration);
              const totalMarks = parseInt(data.totalMarks);
              const questionPapers = {
                duration,
                totalMarks,
                name: data?.name,
              };
              console.log(
                { duration, totalMarks, name: data?.name },
                "108 no line"
              );
              postQuestionPaper(questionPapers);
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
              {isPending ? (
                <Button color="primary" radius="none" type="submit" isLoading>
                  Submit
                </Button>
              ) : (
                <Button color="primary" radius="none" type="submit">
                  Submit
                </Button>
              )}

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
            <h1 className="w-full py-2 hover:border-[#838c48] border-1 border-transparent hover:border-1 transition-all duration-200 text-center bg-[#FDF6EA]">
              Show All Question Paper
            </h1>
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
              <TableHeader>
                <TableColumn key="name">Name</TableColumn>
                <TableColumn key="duration">Duration</TableColumn>
                <TableColumn key="totalMarks">TotalMarks</TableColumn>
                <TableColumn key="update">Update</TableColumn>
                <TableColumn key="delete">Delete</TableColumn>
                <TableColumn key="delete">ID</TableColumn>
              </TableHeader>
              <TableBody
                items={data?.data ?? []}
                loadingContent={<Spinner />}
                // loadingState={loadingState}
              >
                {(item) => (
                  <TableRow key={item?.name}>
                    {(columnKey) => (
                      <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
                {data?.data.map((item) => {
                  //  HANDLE MODAL ON || OFF
                  const handleModalOpen = (id) => {
                    localStorage.setItem("updateID", id);
                    if (localStorage.getItem("updateID")) {
                      onOpen();
                    }
                  };
                  return (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item?.duration}</TableCell>
                      <TableCell>{item.totalMarks}</TableCell>
                      <TableCell>{item?._id}</TableCell>
                      <TableCell>
                        <Button
                          radius="none"
                          color="success"
                          onPress={() => handleModalOpen(item?._id)}
                        >
                          Update
                        </Button>
                        <Modal
                          isOpen={isOpen}
                          placement="top-center"
                          onOpenChange={onOpenChange}
                        >
                          <ModalContent>
                            {(onClose) => (
                              <>
                                <ModalHeader className="flex flex-col gap-1">
                                  Update Question
                                </ModalHeader>
                                <ModalBody>
                                  <Form
                                    className="w-full max-w-xs flex flex-col gap-4"
                                    validationBehavior="native"
                                    onReset={() => setAction("reset")}
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      const updateData = Object.fromEntries(
                                        new FormData(e.currentTarget)
                                      );
                                      const duration = parseInt(
                                        updateData.duration
                                      );
                                      const totalMarks = parseInt(
                                        updateData.totalMarks
                                      );
                                      const name = updateData?.name;
                                      const id =
                                        localStorage.getItem("updateID");
                                      const updatedDatas = {
                                        id,
                                        duration,
                                        totalMarks,
                                        name,
                                      };
                                      updateQuestionPapers(updatedDatas);
                                      onClose();
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
                                      <Button
                                        color="danger"
                                        variant="flat"
                                        onPress={() => {
                                          onClose();
                                          localStorage.removeItem("updateID");
                                        }}
                                      >
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
                        {deletePending ? (
                          <Button isLoading radius="none" color="warning">
                            Delete
                          </Button>
                        ) : (
                          <Button
                            onPress={deleteMutation(item?._id)}
                            radius="none"
                            color="warning"
                          >
                            Delete
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Question;
