import {AppShell, Badge, Container, Group, Paper, SimpleGrid, ThemeIcon, Title,Text, UnstyledButton} from "@mantine/core";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {useNavigate} from "react-router-dom";
import {IconArrowLeft, IconArrowUpRight} from "@tabler/icons-react";
import {datosStatus, Dispositivo, fuenteTrafico, retencionAudiencia, vistasDia} from "../data/stats.ts";
import {AreaChart, BarChart, DonutChart } from "@mantine/charts";




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
                    <SimpleGrid cols={{lg:4}} spacing={"lg"} mb={"xl"}>
                        {datosStatus.map((item, index) => (
                            <Paper key={index} withBorder p="md" radius="md" shadow="xs">
                                <ThemeIcon color={item.color} variant="light" size="xl" radius="md" mb="sm">
                                    <item.icon style={{ width: '60%', height: '60%' }} />
                                </ThemeIcon>
                                <Text size="sm" c="dimmed" mt={5}>{item.titulo}</Text>
                                <Text fw={700} size="xl">{item.valor}</Text>
                            </Paper>
                    ))}
                    </SimpleGrid>

                    <SimpleGrid cols={{lg:2}} spacing={"lg"} mb={"xl"}>

                            <Paper withBorder p="md" radius="md" shadow="xs">
                                <Title order={4} mt={"md"}>Vistar por Dia</Title>
                                    <BarChart
                                        h={300}
                                        data={vistasDia}
                                        dataKey="dia"
                                        series={[{ name: 'vistas', color: 'indigo' }]}
                                        tickLine="y"
                                    />
                                </Paper>

                        <Paper withBorder p="md" radius="md" shadow="xs">
                            <Title order={4} mt={"md"}>Retencion de Audiencia</Title>
                            <AreaChart
                                h={300}
                                data={retencionAudiencia}
                                dataKey="tiempo"
                                series={[
                                    { name: 'audiencia', color: 'violet' },
                                ]}
                                curveType="linear"
                            />
                        </Paper>

                    </SimpleGrid>

                    <SimpleGrid cols={{lg:2}} spacing={"lg"} mb={"xl"}>
                        <Paper withBorder p="md" radius="md" shadow="xs">
                            <Title order={4} mt={"md"}>Fuentes de trafico</Title>
                            <DonutChart size={300} withLabelsLine labelsType="percent" withLabels data={fuenteTrafico}  />
                        </Paper>

                        <Paper withBorder p="md" radius="md" shadow="xs">

                                <Title order={4} mt={"md"}>Dispositivos</Title>
                                <DonutChart size={300} withLabelsLine labelsType="percent" withLabels data={Dispositivo}  />

                        </Paper>

                    </SimpleGrid>





                </AppShell.Main>
            </Container>
            <Footer/>
        </AppShell>


    )
}