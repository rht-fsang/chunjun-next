import { Card, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { primaryColor } from "@/config/color";
const AppFooter = (props: any) => {
  const { footerInfo } = props;
  const { company, ipRecord1 } = footerInfo;
  const year = new Date().getFullYear();
  return (
    <section
      className="text-white pt-[20px] pb-[20px] z-[1000]"
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="text-white  flex flex-col md:flex-row justify-center">
        <div className=" bg-block2 bg-no-repeat bg-center bg-contain w-full flex justify-center items-center">
          <div className="flex md:space-x-12 space-x-6">
            <div className="text-center">
              <ul className="flex flex-row space-x-2 text-[13px] text-gray-300">
                <a>隐私政策</a>
                <a>用户协议</a>
              </ul>
              <ul className="flex flex-row space-x-2 text-[13px] text-gray-300">
                <a>{`Copyright ©${year} ${company}`}</a>
                <a href="https://beian.miit.gov.cn/">{ipRecord1}</a>
              </ul>
            </div>
            <div className="text-center">
              <ul className="flex flex-col space-y-2 text-[13px] text-gray-300">
                <a>邮箱地址</a>
              </ul>
              <ul className="flex flex-col space-y-2 text-[13px] text-gray-300">
                <a>support@jingtoutech.com</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFooter;
