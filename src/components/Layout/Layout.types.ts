import { FunctionComponent, ReactNode, SVGProps } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

export type ProfileTypes = { pictureURL: string; name: string };
export type SectionTypes = {
  title: string;
  linkList: {
    Icon: FunctionComponent<
      SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    IconNegative: FunctionComponent<
      SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    name: string;
    href: string;
  }[];
};
