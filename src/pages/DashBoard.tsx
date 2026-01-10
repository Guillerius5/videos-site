import {AppShell, Group, Indicator, Text, ThemeIcon, UnstyledButton} from "@mantine/core";
import {IconBell, IconHome, IconLogout, IconUser} from "@tabler/icons-react";
import {useLocation, useNavigate} from "react-router-dom";


export function DashBoard() {

    const location= useLocation();
    const navigate = useNavigate();

    const emailRecibido = location.state?.emailUsuario || "username"; //ivan para el user lo hago con local storage? o lo dejo asi sin que guarde el nombre

    const nombreUsuario= emailRecibido.split('@')[0];

    return (
        <>
            <AppShell
                header={{height: 70}}
                footer={{height: 50}}
                padding={"md"}>

                <AppShell.Header>

                    <Group h="100%" px="md" justify="space-between">


                        <Group gap={30}>
                            <ThemeIcon color={"violet"}>
                                <IconHome/>
                            </ThemeIcon>
                            MyApp
                        </Group>


                        <Group gap={30}>
                            <UnstyledButton>
                                Home
                            </UnstyledButton>
                            <UnstyledButton>
                                Explore
                            </UnstyledButton>
                            <UnstyledButton>
                                About
                            </UnstyledButton>

                        </Group>


                        <Group gap={30}>
                            <UnstyledButton>
                                <Indicator color="red" size={8} offset={4} processing>
                                    <IconBell
                                        size={22}
                                        stroke={1.5}
                                        color="black"
                                        fill="white"
                                    />
                                </Indicator>
                            </UnstyledButton>

                            <UnstyledButton>
                                <Group gap={8}>
                                    <ThemeIcon color={"violet"} >
                                        <IconUser/>
                                    </ThemeIcon>
                                    <Text>
                                        {nombreUsuario}
                                    </Text>
                                </Group>
                            </UnstyledButton>

                            <UnstyledButton onClick={()=>navigate('/')}>

                                <Group gap={8}>
                                    <IconLogout/>
                                    <Text>
                                        Cerrar sesion
                                    </Text>
                                </Group>
                            </UnstyledButton>





                        </Group>

                    </Group>


                </AppShell.Header>

                <AppShell.Main>
                    titulo , videos , boton verde
                </AppShell.Main>

                <AppShell.Footer>
                    el footer

                </AppShell.Footer>

            </AppShell>


        </>
    )
}
