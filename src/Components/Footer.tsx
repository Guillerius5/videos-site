import {AppShell,Text, Container, Group, ThemeIcon, Stack, Divider} from "@mantine/core";
import {IconHome} from "@tabler/icons-react";

export function Footer() {
    return (
        <>
        <AppShell.Footer>
            <Container size="md" mt="md">

            <Group justify="space-between" align={"start"} >



                <Group>
                    <div >
                        <Group gap={10} mb={"sm"} >
                            <ThemeIcon color="violet">
                                <IconHome />
                            </ThemeIcon>
                            <Text>MyApp</Text>
                        </Group>
                        <Text size="sm" c={"dimmed"}>Tu plataforma de contenido multimedia favorita.</Text>
                    </div>
                </Group>


                <Group>

                   <Stack gap ="1">
                       <Text fw={"bold"}>Producto</Text>
                       <Text>Caracteristicas</Text>
                       <Text>Precios</Text>
                       <Text>API</Text>
                   </Stack>

                </Group>
                <Group>

                    <Stack gap={1}>
                        <Text fw={"bold"}>Compañia</Text>
                        <Text>Sobre nosotros</Text>
                        <Text>Blog</Text>
                        <Text>Contacto</Text>
                    </Stack>

                    </Group>
                <Group>
                    <Stack gap={1}>
                        <Text fw={"bold"}>Legal</Text>
                        <Text>Privacidad</Text>
                        <Text>Terminos</Text>
                        <Text>Cookies</Text>
                    </Stack>

                </Group>

            </Group>

                <Divider my="sm" />

                <Text c="dimmed" size="sm" ta="center">
                    © 2026 MyApp. Todos los derechos reservados.
                </Text>

            </Container>



        </AppShell.Footer>


        </>

    )
}