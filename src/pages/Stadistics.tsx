import {AppShell, Badge, Container, Group, Paper, SimpleGrid, ThemeIcon, Title, UnstyledButton} from "@mantine/core";
import {Header} from "../Components/Header.tsx";
import {Footer} from "../Components/Footer.tsx";
import {useNavigate} from "react-router-dom";
import {IconArrowLeft, IconArrowUpRight} from "@tabler/icons-react";
import {datosStatus} from "../data/stats.ts";


export default function Stadistics() {

    const navigate = useNavigate()


    return (
        <AppShell
            header={{height: 70}}
            footer={{height: 180}}
            padding={"md"}>

            <Header/>
            <Container size="xl" mt="md">
                <AppShell.Main>
                        <UnstyledButton onClick={()=> navigate(-1)}>
                            <Group gap={"5"}>
                                <IconArrowLeft></IconArrowLeft>
                                <text>Volver</text>
                            </Group>
                        </UnstyledButton>

                    <Group justify={"space-between"}>
                        <div>
                            <Title order={2} mt={"md"}>
                                Estadisticas del video
                            </Title>

                            <text>Introduccion a React</text>
                        </div>

                        <Badge color="green" size={"xl"} variant={"light"} leftSection={<IconArrowUpRight/>}> +12.5% esta semana</Badge>
                    </Group>





                </AppShell.Main>
            </Container>
            <Footer/>
        </AppShell>

    )
}