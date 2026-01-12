import {
    AppShell,
    Button,
    Chip,
    Container,
    Group,
    Indicator,
    SimpleGrid,
    Text,
    ThemeIcon,
    Title,
    UnstyledButton
} from "@mantine/core";
import {IconBell, IconHome, IconLogout, IconUpload, IconUser} from "@tabler/icons-react";
import {useLocation, useNavigate} from "react-router-dom";
import {Header} from "../Components/Header.tsx";


export function DashBoard() {


    const video = [
        {title: "Introducción a React", category: "Programación", color: "blue", views: "12.5k"},
        {title: "Diseño UI/UX Moderno", category: "Diseño", color: "blue", views: "8.3k"},
        {title: "Marketing digital", category: "Marketing", color: "blue", views: "15.7k"},
        {title: "Fotografia Profesional", category: "Fotografia", color: "blue", views: "10.2k"},
        {title: "Desarrollo Web Full Stack", category: "Programación", color: "blue", views: "20.1k"},
        {title: "Productividad Personal", category: "Productividad", color: "blue", views: "9.8k"},
        {title: "Inteligencia Artificial", category: "Tecnologia", color: "blue", views: "18.4k"},
        {title: "Finanzas Personales", category: "Finanzas", color: "blue", views: "11.3k"}
    ]

    return (
        <>
            <AppShell
                header={{height: 70}}
                footer={{height: 50}}
                padding={"md"}>

               <Header/>

                <AppShell.Main>
                    <Container size="xl" mt="md">

                        <Group justify={"space-between"}>
                            <div>
                                <Title order={2}>
                                    Bienvenido a tu Dashboard
                                </Title>
                                <Text>
                                    Explora nuestro contenido multimedia y comienza a aprender hoy mismo
                                </Text>
                            </div>

                            <Button color={"green"} leftSection={<IconUpload size={20}/>}>
                                subir video
                            </Button>

                        </Group>


                        <Group gap={"xs"} mt={"xl"}>
                            <Chip defaultChecked color={"violet"} variant={"filled"} icon={null}>Todos</Chip>
                            <Chip color={"violet"} variant={"filled"} icon={null}>Programación</Chip>
                            <Chip color={"violet"} variant={"filled"} icon={null}>Diseño</Chip>
                            <Chip color={"violet"} variant={"filled"} icon={null}>Marketing</Chip>
                            <Chip color={"violet"} variant={"filled"} icon={null}>Fotografía</Chip>
                            <Chip color={"violet"} variant={"filled"} icon={null}>Productividad</Chip>

                        </Group>

                        <SimpleGrid cols={{base: 1, sm: 2, lg: 4}} spacing="lg" mt="xl">

                        </SimpleGrid>
                    </Container>
                </AppShell.Main>

                <AppShell.Footer>
                    el footer
                </AppShell.Footer>

            </AppShell>
        </>
    )
}
