import {AppShell, Container, Group, Indicator, Text, ThemeIcon, UnstyledButton} from "@mantine/core";
import { IconBell, IconHome, IconLogout, IconUser } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";



export function Header() {

    const navigate = useNavigate();
    const emailGuardado = localStorage.getItem('userEmail') || "Invitado";
    const nombreUsuario = emailGuardado.split('@')[0];

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        navigate('/');
    };

    return (

        <AppShell.Header>
            <Container size="xl" mt="md">
            <Group h="100%" px="md" justify="space-between">


                <Group gap={30}>
                    <ThemeIcon color="violet">
                        <IconHome />
                    </ThemeIcon>
                    MyApp
                </Group>


                <Group gap={30}>
                    <UnstyledButton>Home</UnstyledButton>
                    <UnstyledButton>Explore</UnstyledButton>
                    <UnstyledButton>About</UnstyledButton>
                </Group>


                <Group gap={30}>
                    <UnstyledButton>
                        <Indicator color="red" size={8} offset={4} processing>
                            <IconBell size={22} stroke={1.5} color="black" fill="white" />
                        </Indicator>
                    </UnstyledButton>

                    <UnstyledButton>
                        <Group gap={8}>
                            <ThemeIcon color="violet">
                                <IconUser />
                            </ThemeIcon>
                            <Text>{nombreUsuario}</Text>
                        </Group>
                    </UnstyledButton>

                    <UnstyledButton onClick={handleLogout}>
                        <Group gap={8}>
                            <IconLogout />
                            <Text>Cerrar sesión</Text>
                        </Group>
                    </UnstyledButton>
                </Group>

            </Group>
            </Container>

        </AppShell.Header>

    );
}