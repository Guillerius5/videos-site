import { Card, ThemeIcon,  Text,TextInput,PasswordInput ,Button, Group } from '@mantine/core';
import { Center } from '@mantine/core'
import {IconAt, IconLock } from '@tabler/icons-react';

export function Login() {
    return (


        <Center h="100vh" bg="blue.1">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                   <ThemeIcon variant="light" radius="xl" size="xl" color="violet">
                       <IconLock style={{ width: '70%', height: '70%' }} />
                   </ThemeIcon>
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Welcome Back</Text>

                </Group>

                <Text size="sm" c="dimmed">
                    Sign in to your account to continue
                </Text>

                <TextInput
                    label="Email"
                    placeholder="tu@email"
                    leftSection={<IconAt size={16} />}
                    required
                    />

                <PasswordInput
                    label={"Password"}
                    placeholder={"enter your password"}
                    leftSection={<IconAt size={16} />}
                    required
                    mt={"md"}/>  {/*//mt margen top*/}

                <Button color="blue" fullWidth mt="md" radius="md">
                   sign in
                </Button>
            </Card>
            </Center>
)
}