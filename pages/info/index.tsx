import AppFooter from "@/components/AppFooter";
import { GetStaticConfig, IStaticConfig } from "@/utils/changeConfig";
import { Text, useMantineColorScheme } from "@mantine/core";
import Aos from "aos";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useEffect } from "react";

const Info = (props: IStaticConfig) => {
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
          className={`relative flex h-44 md:h-96 w-full px-2 flex-col justify-center items-center  ${
            colorScheme === "light" ? "bg-data-light" : "bg-data-dark"
          } bg-center bg-no-repeat md:bg-contain bg-cover`}
        >
          <Image
            priority
            src="/assets/img/index-banner.png"
            alt=""
            layout="fill"
            className="mx-auto"
          />
        </section>
      </div>
      <div className="2xl:max-w-[60vw] mt-4 mx-auto">
        <section
          className={`relative flex flex-row items-center justify-between ${
            colorScheme === "light" ? "bg-data-light" : "bg-data-dark"
          } bg-center bg-no-repeat md:bg-contain bg-cover`}
        >
          <div className="mx-2">
            <Image
              priority
              src="/assets/img/company-img-1.png"
              alt=""
              width={400}
              height={200}
            />
          </div>
          <div className="mx-2">
            <Image
              priority
              src="/assets/img/company-img-2.png"
              alt=""
              width={400}
              height={200}
            />
          </div>
          <div className="mx-2">
            <Image
              priority
              src="/assets/img/company-img-3.png"
              alt=""
              width={400}
              height={200}
            />
          </div>
        </section>
      </div>
      <div className="flex flex-col  items-center pt-4 px-6 justify-center md:mb-16 mb-12">
        <Text className="md:text-2xl font-black text-xl mb-2">公司信息</Text>
        <Text className="md:text-2xl md:w-2/3 text-xl text-center">
          杭州镜头科技有限公司成立于2016年3月,是一家集产品设计、研发、发行、运营为一体的移动互联网技术公司。
          公司致力为用户提供“值得信赖的”、“快乐的”和“专业的”游戏体验，以专注的精神和独特的创意设计能力，通过自主研发向广大用户提供手游服务。{" "}
        </Text>
      </div>

      <div>
        <AppFooter footerInfo={footerInfo} />
      </div>
    </>
  );
};

export default Info;
export const getServerSideProps: GetServerSideProps<IStaticConfig> =
  GetStaticConfig;
