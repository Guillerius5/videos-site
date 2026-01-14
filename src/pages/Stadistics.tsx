import { AppShell } from "@mantine/core";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Stadistics() {

    return (
        <AppShell
            header={{height: 70}}
            footer={{height: 180}}
            padding={"md"}>

          <Header/>



        <Footer/>
        </AppShell>

    )
}