import { Spinner, Center } from "@chakra-ui/react"

export default function Loading() {
  return (
    <Center mt={["33vh", null, "20vh"]}>
      <Spinner size="xl" speed="0.7s" thickness="0.2rem" />
    </Center>
  )
}
