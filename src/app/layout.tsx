"use client";
import type { Metadata } from "next";
import "./globals.css";
import Logo from "@/components/layouts/Logo";
import MenuCard from "@/components/dashboard/MenuCard";
import { leftMenuList } from "@/components/utils/LeftMenuList";
import { usePathname } from "next/navigation";
import DetailHeader from "@/components/layouts/DetailHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={"font-inter flex h-screen overflow-hidden"}>
        <aside className="w-[249px] h-screen border-r border-stk-zinc-2">
          <div className="py-4 w-fit mx-auto">
            <Logo />
          </div>
          <div className="p-4">
            <div className="text-stk-gray-2 px-4 text-xs font-medium tracking-wide mb-4">
              PAGES
            </div>
            <div className="flex flex-col gap-1">
              {leftMenuList.map((item) => (
                <MenuCard
                  key={item.name}
                  img={item.img}
                  name={item.name}
                  active={pathname === item.link}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </aside>
        <section className="w-full h-full flex flex-col gap-12 px-10 py-6">
          <DetailHeader />
          {children}
        </section>
      </body>
    </html>
  );
}
