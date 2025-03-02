import { Box, IconButton, Text, VStack } from '@chakra-ui/react';
import { TiPlug } from 'react-icons/ti';
import routeStyles from './Route.styles';
import { useNavigate } from 'react-router-dom';

interface RouteProps {
    routeName: string;
    to: string
}

const Route = ({ routeName, to }: RouteProps) => {
    const navigate = useNavigate();
    return (
        <VStack alignItems="stretch" mt={4} w="100%">
            <IconButton onClick={() => navigate(to)} style={routeStyles.button} variant="plain">
                {routeName} <TiPlug />
            </IconButton>
        </VStack>
    );
};

export default Route;
