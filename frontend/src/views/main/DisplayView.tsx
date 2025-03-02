import { Container } from "@chakra-ui/react";
import Clock from "../../components/main/time/Clock"
import displayViewStyles from "./DisplayView.styles"

function DisplayView() {
  const cls = displayViewStyles;
  return (
    <Container w="full" h="full" style={cls.root}>
      <Clock />
    </Container>
  )
}

export default DisplayView
