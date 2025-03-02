import {
    Box,
    DrawerContent,
    DrawerRoot,
    IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { TiThMenuOutline } from 'react-icons/ti';
import Route from './Route';


function SideBarView() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Box position="absolute" zIndex={999} w="15%">
            <IconButton
                pointerEvents="auto"
                zIndex={1000}
                variant="ghost"
                ml={2}
                mt={2}
                fontSize="3xl"
                onClick={() => setOpen(!open)}
            >
                <TiThMenuOutline />
            </IconButton>
            <DrawerRoot open={open}>
                <DrawerContent>
                    <Route routeName="Home" to="" />
                    <Route routeName="Plugins" to="plugins" />
                </DrawerContent>
            </DrawerRoot>
        </Box>
    );
}

export default SideBarView;
