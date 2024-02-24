import useStamina from "@/modules/StateManagement/Stamina/useStamina";
import { Checkbox, Table } from "flowbite-react";
import Image from "next/image";
import React from "react";

function BlogTable() {
  const title = `The importance of ear care: Protecting yourself and your oneshealth`;

  const [checkbox, actions] = useStamina({
    initialState: {
      checkbox: false,
    },
    actions: {
      setCheckbox(v) {
        v.checkbox = !v.checkbox;
      },
    },
  });

  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <Table.Head>
          <Table.HeadCell>
            <Checkbox onChange={actions.setCheckbox} color={"blue"} />
          </Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Slug</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Main Image</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <Table.Row
              key={item}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell width={"5%"}>
                <Checkbox checked={checkbox.checkbox} onChange={actions.setCheckbox} color={"blue"} />
              </Table.Cell>
              <Table.Cell width={"19%"} className="text-gray-900 font-semibold">
                {title.length > 50 ? title.slice(0, 55) + "..." : title}
              </Table.Cell>
              <Table.Cell width={"19%"}>The-importance-of-ear-care</Table.Cell>
              <Table.Cell width={"19%"}>Apr 23, 2021</Table.Cell>
              <Table.Cell width={"19%"}>Hear Loss</Table.Cell>
              <Table.Cell width={"19%"}>
                <Image
                  alt="blogImg"
                  style={{ borderRadius: "5px" }}
                  width={110}
                  height={42}
                  src={"https://placehold.co/110x42/png"}
                ></Image>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default BlogTable;
