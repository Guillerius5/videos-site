import {
    ActionIcon,
    AppShell, Badge,
    Button, Card,
    Chip,
    Container,
    Group, Image,
    SimpleGrid,
    Text,
    Title,
} from "@mantine/core";
import {IconChartBar, IconCheck, IconEye, IconHeart, IconUpload} from "@tabler/icons-react";
import {videosData} from "../data/videos.ts";
import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";
import {useEffect} from "react";
import {notifications} from "@mantine/notifications";
import {useNavigate} from "react-router-dom";


export function DashBoard() {


    useEffect(() => {
        notifications.show({
            title: '¡Bienvenido de nuevo!',
            message: 'Bienvenido de nuevo',
            color: 'green',
            icon: <IconCheck />,
            autoClose: 4000,
            withCloseButton: true,
        });
    }, []);

    const navigate = useNavigate();

    return (
        <>

            <AppShell
                header={{height: 70}}
                footer={{height: 180}}
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

                            <Button color={"green"} leftSection={<IconUpload size={20} />}>
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

                            {videosData.map((item,index)=>(
                                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>


                                    <Card.Section>
                                        <Image
                                            src={item.image}
                                            height={160}
                                            alt={item.title}
                                        />
                                    </Card.Section>


                                    <Group justify="space-between" mt="md" mb="xs">
                                        <Badge color={item.color} variant="light">
                                            {item.category}
                                        </Badge>
                                    </Group>


                                    <Text fw={500}>{item.title}</Text>

                                    <Text size="sm" c="dimmed" mt="sm">
                                        Aprende los fundamentos y domina esta habilidad desde cero.
                                    </Text>


                                    <Group mt="md" justify="space-between">
                                        <Group gap={5}>
                                            <IconEye size={16} color="gray" />
                                            <Text size="xs" c="dimmed">{item.views}</Text>
                                        </Group>

                                        <ActionIcon variant="subtle" color="gray">
                                            <IconHeart size={20} />
                                        </ActionIcon>
                                    </Group>


                                    <Button
                                        variant="light"
                                        color="violet"
                                        fullWidth
                                        mt="md"
                                        radius="md"
                                        leftSection={<IconChartBar size={16}/>}
                                        onClick={() => navigate('/stadistics')}
                                    >
                                        Ver Estadísticas
                                    </Button>

                                </Card>



                            ))}

                            </SimpleGrid>

                        <Group justify="center" mt={"xl"}>
                            <Button color={"blue"} justify={"center"}>
                                Cargar más contenido
                            </Button>

                        </Group>


                    </Container>
                </AppShell.Main>

                <Footer/>

            </AppShell>
        </>
    )
}
