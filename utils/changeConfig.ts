import { GetServerSideProps } from "next";

export interface IStaticConfig {
  domainName: string;
  footerInfo: {
    company: string;
    ipRecord1: string;
  };
  titleInfo: {
    title: string;
  };
  logo: string;
}

export const GetStaticConfig: GetServerSideProps<IStaticConfig> = async (
  ctx
) => {
  const domain = ctx.req.headers.host || "";
  const config = domain !== "laojiayou.cn" ? "jingtoutech" : "laojiayou";
  const configData = require(`../public/${config}.json`);
  return { props: { ...configData } };
};
