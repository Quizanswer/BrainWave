import React, { useContext, useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import {
  Button,
  Chip,
  Form,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import McqList from "../components/McqList";

const MCQ = () => {
  // const { token } = useContext(Appcontext);
  const [submitted, setSubmitted] = useState(null);
  const [options, setOptions] = useState("");
  const [itemList, setItemList] = useState([]);

  const McqAdded = async (data) => {
    console.log("ramjan=====", data);
    const res = await axios.post(
      `https://test-alchemy-backend.onrender.com/mcq/create`,
      { headers: { Authorization: `Bearer ${token}` } },
      data
    );
    return res.data;
  };
  const { data, isPending, isError, mutate } = useMutation({
    mutationFn: McqAdded,
    onSuccess: (data) => {
      if (data) {
        toast.success("MCQ Added successfull");
      }
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    mutate(data);
  };

  console.log("data", data);
  const addAnswer = () => {
    if (options.length > 1) {
      setItemList((pre) => {
        return [...pre, options];
      });
    }
    setOptions(" ");
  };

  const handleClose = (itemRemove) => {
    setItemList(itemList.filter((item) => item !== itemRemove));
  };

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];
  return (
    <div className="">
      <div className="bg-[#DA853D] py-8 ">
        <CommonWrapper>
          <h1 className="py-1 text-xl font-semibold text-white sm:text-4xl ">
            Create Multiple Choice Question.
          </h1>
        </CommonWrapper>
      </div>
      <CommonWrapper>
        <div className="w-full max-w-4xl py-4">
          <Form
            className="flex flex-col w-full gap-4"
            validationBehavior="native"
            onSubmit={onSubmit}
          >
            <div className="flex w-full gap-4 ">
              <Input
                isRequired
                classNames={{
                  inputWrapper:
                    "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                }}
                errorMessage="Please enter a question name"
                label="Question name"
                labelPlacement="outside"
                name="question"
                placeholder="Enter question name"
                type="text"
                radius="none"
                size="lg"
              />
              <Select className="max-w-xs" label="Select an animal">
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>

            <div className="w-full ">
              <h2 className="pb-2">
                Add question answers <span className="text-red-500">*</span>
              </h2>
              <div className="flex w-full gap-4">
                <Input
                  isRequired
                  classNames={{
                    inputWrapper:
                      "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ",
                  }}
                  errorMessage="Please enter a valid username"
                  labelPlacement="outside"
                  name="options"
                  placeholder="Add question answer"
                  type="text"
                  radius="none"
                  size="lg"
                  value={options}
                  onChange={(e) => {
                    setOptions(e.target.value);
                  }}
                />
                <Button
                  cl
                  onPress={addAnswer}
                  size="lg"
                  color="warning"
                  className="font-medium text-white"
                >
                  Add answer
                </Button>
              </div>
              <div className="flex gap-2 pt-4">
                {itemList.map((item, index) => (
                  <Chip
                    key={index}
                    variant="flat"
                    onClose={() => handleClose(item)}
                    className="mb-4"
                  >
                    {item}
                  </Chip>
                ))}
              </div>
              {/* // "ring-1 ring-[#E2D6C1] bg-white focus-within:ring-[#838c48] ", */}
              <div className="flex flex-wrap w-full gap-4 md:flex-nowrap">
                <Select
                  className="max-w-xs"
                  label="Select an answer"
                  name="correctAns"
                  radius="none"
                  size="sm"
                >
                  {itemList.map((item, i) => (
                    <SelectItem key={(item, i)}>{item}</SelectItem>
                  ))}
                </Select>

                <div>
                  <Input
                    label="Mark"
                    labelPlacement="inside"
                    type="number"
                    name="mark"
                    radius="none"
                    size="sm"
                  />
                </div>
              </div>
            </div>
            <Button
              type="submit"
              color="warning"
              className="font-medium text-white"
              size="lg"
            >
              ADD MCQ
            </Button>
            {/* {submitted && (
              <div className="text-small text-default-500">
                You submitted: <code>{JSON.stringify(submitted)}</code>
              </div>
            )} */}
          </Form>
        </div>
      </CommonWrapper>

      <CommonWrapper>
        <McqList />
      </CommonWrapper>
    </div>
  );
};

export default MCQ;
