import useTime from "../../../plugins/time/time";
import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import clockStyles from "./Clock.styles";

function Clock() {
    const dateTime = useTime()
    const cls = clockStyles
    return (
        <Center style={cls.root}>
            {dateTime != null && (
                <VStack gap={0}>
                    <Text fontSize="8xl">
                        {dateTime.time}
                    </Text>
                    <Text fontSize="3xl">
                        {dateTime.date}
                    </Text>
                </VStack>
            )}
        </Center>
    );
}

export default Clock;
