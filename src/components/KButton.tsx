import { Button, Text } from '@chakra-ui/react';
import React, { ComponentProps } from 'react';

const neutralLight0 = 'var(--neutral-light-0)'
const neutralDark3 = 'var(--neutral-dark-3)'

const KButton = (props: ComponentProps<typeof Button>) => (
    <Button
        h={'52px'}
        display="flex"
        justifyContent="center"
        alignContent="center"
        bg={neutralDark3}
        borderRadius={'md'}
        cursor="pointer"
        _hover={{ bg: neutralDark3 }}
        _focus={{ bg: neutralDark3 }}
        _active={{ bg: neutralDark3 }}
        color={neutralLight0}
        {...props}
    >
        <Text fontWeight="bold" fontSize={{ base: "xl" }}>
            {props.children}
        </Text>
    </Button>
)


export default KButton;
