import { Box, Stack } from '@chakra-ui/react'
import Staked from './Staked'
import XToken from './XToken'

type Props = {
}
export default function MyAccount(props: Props) {
    return (
        <Box position={"relative"} mt={4}>
            <Stack
                p={0}
                direction={{ base: "column", md: "row" }}
                spacing={{ base: 4 }}
                align="stretch"
                justify="stretch"
            >
                <Box flex={1}>
                    <Staked />
                </Box>
                <Box flex={1}>
                    <XToken />
                </Box>
            </Stack>
        </Box>
    )
}
