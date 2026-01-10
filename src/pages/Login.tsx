import {Anchor, Button, Card, Center, Checkbox, Group, PasswordInput, Text, TextInput, ThemeIcon} from '@mantine/core';
import {IconAt, IconLock} from '@tabler/icons-react';
import {useNavigate} from "react-router-dom";

export function Login() {

    const navigate = useNavigate()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/dashBoard');
    };

    return (
        <Center h="100vh" bg="blue.1">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Center ta={"center"} pt={"md"}>
                        <ThemeIcon variant="light" radius="xl" size="xl" color="violet">
                            <IconLock style={{width: '70%', height: '70%'}}/>
                        </ThemeIcon>
                    </Center>
                </Card.Section>


                <Center ta="center">
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Welcome Back</Text>

                    </Group>
                </Center>


                <Text size="sm" c="dimmed">
                    Sign in to your account to continue
                </Text>

                <form onSubmit={handleSubmit}>
                <TextInput
                    label="Email Address"
                    placeholder="your@email"
                    leftSection={<IconAt size={16}/>}
                    required
                />

                <PasswordInput
                    label={"Password"}
                    placeholder={"enter your password"}
                    leftSection={<IconAt size={16}/>}
                    required
                    mt={"md"}/>

                <Group justify={"space-between"} mt={"md"}>
                    <Checkbox
                        color={"dark"}
                        iconColor={"white"}
                        label="remember me"/>

                    <Anchor size="sm" href="#">
                        Forgot Password?
                    </Anchor>

                </Group>


                <Button type="submit" color="blue" fullWidth mt="md" radius="md"
                >
                    sign in
                </Button>
                </form>
            </Card>
        </Center>
    )
}