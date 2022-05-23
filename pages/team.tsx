import { DefaultLayout } from "@/layouts";
import { Heading, Text } from "@chakra-ui/react";

const Team = () => {
  return (
    <DefaultLayout title="Team">
      <Heading as="h1">Team</Heading>
      <Text mt="6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus iste
        eum id minus, earum laboriosam nesciunt ratione temporibus recusandae,
        debitis qui, officia dolorum delectus. Enim vero libero quam dignissimos
        nulla?
      </Text>
    </DefaultLayout>
  );
};

export default Team;
