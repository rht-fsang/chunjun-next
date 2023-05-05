import "@/styles/globals.css";
import "@/styles/font.css";
import "aos/dist/aos.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import {
  AppShell,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import AppNavbar from "@/components/AppNavbar";
import { GetServerSideProps } from "next";
import { GetStaticConfig, IStaticConfig } from "@/utils/changeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  const { titleInfo, logo } = pageProps;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const [opened, setOpened] = useState<boolean>(false);
  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  const toggleNavbar = () => {
    setOpened((o) => !o);
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Head>
          <title>{titleInfo?.title}</title>
          <meta name="description" content="凡米科技" />
          <link rel="shortcut icon" href="" />
        </Head>
        <AppShell
          padding={"md"}
          header={
            <AppHeader
              opened={opened}
              changeOpened={toggleNavbar}
              changeTheme={toggleColorScheme}
              theme={colorScheme}
              logo={logo}
            />
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.white,
              padding: 0,
            },
          })}
        >
          <Component {...pageProps} />
          <AppNavbar opened={opened} changeOpened={toggleNavbar} logo={logo} />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
export const getServerSideProps: GetServerSideProps<IStaticConfig> =
  GetStaticConfig;
