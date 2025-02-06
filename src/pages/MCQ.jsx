import React, { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import {
  Button,
  Chip,
  Form,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

const MCQ = () => {
  const [submitted, setSubmitted] = useState(null);
  const [options, setOptions] = useState("");
  const [itemList, setItemList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
  };

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
        <Form
          className="w-full pt-5 "
          validationBehavior="native"
          onSubmit={onSubmit}
        >
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
          <div className="w-full">
            <h2>Add question answers</h2>
            <div className="flex w-full gap-4">
              <Input
                isRequired
                errorMessage="Please enter a valid username"
                labelPlacement="outside"
                name="options"
                placeholder="Add question answer"
                type="text"
                radius="none"
                value={options}
                onChange={(e) => {
                  setOptions(e.target.value);
                }}
              />
              <Button onPress={addAnswer}>Add answer</Button>
            </div>
            <div className="flex gap-2 py-4">
              {itemList.map((item, index) => (
                <Chip
                  key={index}
                  variant="flat"
                  onClose={() => handleClose(item)}
                >
                  {item}
                </Chip>
              ))}
            </div>
            <div className="flex flex-wrap w-full gap-4 md:flex-nowrap">
              <Select
                className="max-w-xs"
                label="Select an answer"
                name="correctAns"
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
                />
              </div>
            </div>
          </div>
          <Button type="submit" variant="flat">
            ADD MCQ
          </Button>
          {submitted && (
            <div className="text-small text-default-500">
              You submitted: <code>{JSON.stringify(submitted)}</code>
            </div>
          )}
        </Form>
      </CommonWrapper>
    </div>
  );
};

export default MCQ;
