import type { GetServerSideProps, NextPage } from "next";
import { useMantineColorScheme, Text, Card } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import Aos from "aos";
import AppFooter from "@/components/AppFooter";
import { GetStaticConfig, IStaticConfig } from "@/utils/changeConfig";

const SEP = process.env.sep;

const Home = (props: IStaticConfig) => {
  const { colorScheme } = useMantineColorScheme();
  const { footerInfo } = props;

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [colorScheme]);

  return (
    <>
      <div className="2xl:max-w-[60vw] mx-auto">
        <section
          className={`relative flex flex-col justify-center items-center section-padding ${
            colorScheme === "light" ? "bg-data-light" : "bg-data-dark"
          } bg-center bg-no-repeat md:bg-contain bg-cover`}
        >
          <Image
            priority
            src="/assets/img/index-banner.png"
            alt=""
            width={1200}
            height={400}
            className="mx-auto"
          />
          <div className="flex flex-col items-center pt-4 px-6 justify-center md:mb-16 mb-12">
            <Text className="md:text-2xl text-xl text-center">
              镜头科技以快捷、轻松、娱乐、高效为己任，为用户提供正规、合法、休闲的数字娱乐游戏平台，在茶余饭后，能够享受游戏娱乐带来的快乐。
            </Text>
          </div>
        </section>
        <section className="flex flex-col pb-10">
          <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 md:gap-6 gap-4">
            <Card
              shadow="none"
              radius="md"
              p="lg"
              data-aos="zoom-in"
              data-aos-delay="100"
              withBorder={true}
              className="hover:scale-105 transition-all duration-150"
            >
              <Card.Section className="text-center">
                <Image
                  priority
                  src="/assets/img/ico-1.png"
                  height={70}
                  width={70}
                  alt="Banner"
                />
              </Card.Section>
              <Text size="lg" color="dimmed" className="text-center">
                快捷
              </Text>
            </Card>
            <Card
              shadow="none"
              radius="md"
              data-aos="zoom-in"
              data-aos-delay="120"
              withBorder={true}
              className="hover:scale-105 transition-all duration-150"
            >
              <Card.Section className="text-center">
                <Image
                  src="/assets/img/ico-2.png"
                  priority
                  height={70}
                  width={70}
                  alt="Banner"
                />
              </Card.Section>
              <Text size="lg" color="dimmed" className="text-center">
                休闲
              </Text>
            </Card>
            <Card
              shadow="none"
              radius="md"
              data-aos="zoom-in"
              data-aos-delay="140"
              withBorder={true}
              className="hover:scale-105 transition-all duration-150"
            >
              <Card.Section className="text-center">
                <Image
                  src="/assets/img/ico-3.png"
                  height={70}
                  priority
                  width={70}
                  alt="Banner"
                />
              </Card.Section>
              <Text size="lg" color="dimmed" className="text-center">
                安全
              </Text>
            </Card>
          </div>
        </section>
      </div>
      <section
        className={`relative flex flex-col justify-center items-center  ${
          colorScheme === "light" ? "bg-data-light" : "bg-data-dark"
        } bg-center bg-no-repeat md:bg-contain bg-cover`}
      >
        <Image
          priority
          src="/assets/img/index-banner2.png"
          alt="钉钉群二维码"
          width={1200}
          height={400}
          className="mx-auto"
        />
        <div className="flex flex-col items-center pt-4 px-6 justify-center md:mb-16 mb-12">
          <Text className="md:text-2xl  text-xl text-center">
            公司愿景：用数字娱乐推动时代变化，用数字娱乐改变移动生活，用数字娱乐让用户享受生活，用数字娱乐创造美好未来。
          </Text>
        </div>
      </section>
      <div>
        <AppFooter footerInfo={footerInfo} />
      </div>
    </>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps<IStaticConfig> =
  GetStaticConfig;
