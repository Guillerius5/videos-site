import {AppShell, Button, Text, Container, Group, Paper, Select, Stack,
    Stepper, Textarea, TextInput, ThemeIcon, UnstyledButton} from "@mantine/core";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer.tsx";
import {useNavigate} from "react-router-dom";
import {IconArrowLeft, IconArrowRight, IconMovie, IconPhoto, IconUpload} from "@tabler/icons-react";
import {useState} from "react";


export default function SubirVideo() {

    const navigate = useNavigate();
    const [active, setActive] = useState(0);

    return (
        <>
            <AppShell
                header={{height: 70}}
                footer={{height: 180}}
                padding={"md"}>
                <Header/>

                <AppShell.Main>
                    <Container size="lg" mt="md">
                        <UnstyledButton onClick={() => navigate(-1)}>
                            <Group gap={"5"}>
                                <IconArrowLeft></IconArrowLeft>
                                <text>Volver</text>
                            </Group>
                        </UnstyledButton>


                            <Paper shadow="xs" radius="md" p="xl" withBorder>


                                <Stepper active={active} onStepClick={setActive} color="violet" mb="xl">
                                    <Stepper.Step
                                        label="Información y Archivos"
                                        icon={<IconUpload size={18} />}
                                    />
                                    <Stepper.Step
                                        label="Configuración y Publicar"
                                        icon={<IconMovie size={18} />}
                                    />
                                </Stepper>

                                <Stack gap="md">

                                    <TextInput
                                        label="Título del Video"
                                        placeholder="Ej: Tutorial completo de React"
                                        withAsterisk
                                        description="0/100 caracteres"
                                    />

                                    <Textarea
                                        label="Descripción"
                                        placeholder="Describe tu video..."
                                        withAsterisk
                                        minRows={4}
                                        description="0/5000 caracteres"
                                    />

                                    <Select
                                        label="Categoría"
                                        placeholder="Selecciona una categoría"
                                        withAsterisk
                                        data={['Programación', 'Diseño', 'Marketing', 'Música']}
                                    />


                                    <Text fw={500} size="sm" mt="sm">Archivo de Video *</Text>
                                    <Stack
                                        align="center"
                                        justify="center"
                                        bg="gray.0"
                                        style={{ border: '1px dashed #ced4da', borderRadius: '8px', cursor: 'pointer' }}
                                        p="xl"
                                        gap="xs"
                                    >
                                        <ThemeIcon size={50} radius="xl" variant="light" color="gray">
                                            <IconMovie size={30} />
                                        </ThemeIcon>
                                        <Text size="sm" fw={500}>Haz clic para subir un video</Text>
                                        <Text size="xs" c="dimmed">MP4, MOV, AVI (máx. 500MB)</Text>
                                    </Stack>


                                    <Text fw={500} size="sm" mt="sm">Miniatura (Opcional)</Text>
                                    <Stack
                                        align="center"
                                        justify="center"
                                        bg="gray.0"
                                        style={{ border: '1px dashed #ced4da', borderRadius: '8px', cursor: 'pointer' }}
                                        p="xl"
                                        gap="xs"
                                    >
                                        <ThemeIcon size={50} radius="xl" variant="light" color="gray">
                                            <IconPhoto size={30} />
                                        </ThemeIcon>
                                        <Text size="sm" fw={500}>Haz clic para subir una miniatura</Text>
                                        <Text size="xs" c="dimmed">JPG, PNG (máx. 5MB)</Text>
                                    </Stack>

                                </Stack>


                                <Group justify="space-between" mt="xl">
                                    <Button variant="default" leftSection={<IconArrowLeft size={16}/>} disabled>
                                        Anterior
                                    </Button>

                                    <Button color="violet" rightSection={<IconArrowRight size={16}/>}>
                                        Siguiente
                                    </Button>
                                </Group>

                            </Paper>
                    </Container>
                </AppShell.Main>
                <Footer/>
            </AppShell>
        </>
    )
}